/*
  Cal. Eden - Bloom Edition
  © 2026 ふる. All Rights Reserved.
  Unauthorized use, reproduction, or modification is prohibited.
*/

/*=================================================================*/
// Bloom Mode Question System
// - Normal Bloom (Level1–4)
// - Level∞ (Scientific Laws Mode)
//=================================================================


// =====================================================
// Utility
// =====================================================

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randRange(range) {
  const step = range.step || 1;
  const steps = Math.floor((range.max - range.min) / step) + 1;
  return Math.floor(Math.random() * steps) * step + range.min;
}

function roundSmart(n) {
  // 整数 or 小数第一位
  return Number.isInteger(n) ? n : Math.round(n * 10) / 10;
}

// 人名リスト
const namePool = ["Alice", "Bob", "Charlie", "Diana", "Emma", "Frank", "Grace", "Henry", "Iris", "Jack", "Kate", "Leo", "Mia", "Noah", "Olivia", "Paul"];

function getRandomName() {
  return randomPick(namePool);
}

// =====================================================
// Entry Point
// =====================================================

function getBloomQuestion() {
  const levelKey = state.level.key;

  if (levelKey === "infinity") {
    return getInfinityQuestion();
  }

  return getNormalBloomQuestion(levelKey);
}

// =====================================================
// Normal Bloom (既存そのまま)
// =====================================================

function getNormalBloomQuestion(levelKey) {
  const levelData = bloomData[levelKey];
  const opSet = randomPick(levelData);
  const template = randomPick(opSet.templates);

  const range = (opSet.op === "mul" || opSet.op === "div")
    ? state.level.muldiv
    : state.level.addsub;

  // level1, level2 は A, C に人名。level3, level4 は A, C に数字
  let A, C;
  if (levelKey === 'level1' || levelKey === 'level2') {
    A = getRandomName();
    C = getRandomName();
  } else {
    A = randRange(range);
    C = randRange(range);
  }

  let B = randRange(range);
  let D = randRange(range);

  let answer;

  switch (opSet.op) {
    case "add":
      answer = B + D;
      break;

    case "sub":
      if (B < D) [B, D] = [D, B];
      answer = B - D;
      break;

    case "mul":
      answer = A * B;
      break;

    case "div":
      A = B * randRange(range); // 割り切れる形
      answer = A / B;
      break;
  }

  let text = template
    .replaceAll("{A}", A)
    .replaceAll("{B}", B)
    .replaceAll("{C}", C)
    .replaceAll("{D}", D);

  return {
    result: answer,
    questionText: text,
    formulaText: ""
  };
}

// =====================================================
// Level∞ : Scientific Laws Mode
// =====================================================

function pickDivisibleValues(q) {
  // 割り算系は割り切れる組を探す
  for (let i = 0; i < 50; i++) {
    const values = {};
    for (const key in q.vars) {
      values[key] = randRange(q.vars[key]);
    }

    const result = q.formula(values);

    if (Number.isInteger(result)) {
      return values;
    }
  }

  // 見つからなければ普通に返す
  const values = {};
  for (const key in q.vars) {
    values[key] = randRange(q.vars[key]);
  }
  return values;
}

function getInfinityQuestion() {
  const q = randomPick(infinityProblems);

  // 割り切れる組を優先
  const values = pickDivisibleValues(q);

  const text = q.template.replace(/\{(\w+)\}/g, (_, k) => values[k]);

  const answer = roundSmart(q.formula(values));

  return {
    result: answer,
    questionText: text,
    formulaText: ""
  };
}


// ============================
// Level∞ (Updated with Categories)
// ============================

function getInfinityQuestion() {
  // state.infinityCategory が設定されている場合、そのカテゴリーから問題を選択
  const category = state.infinityCategory || "all";
  
  let questionPool = [];
  
  // グループ指定の場合 (例: "group_forces")
  if (category.startsWith("group_")) {
    const groupKey = category.replace("group_", "");
    const groupInfo = window.infinityGroups ? window.infinityGroups[groupKey] : null;
    
    if (groupInfo && groupInfo.categories) {
      // グループ内のすべてのカテゴリーから問題を統合
      groupInfo.categories.forEach(cat => {
        if (window.infinityProblems[cat] && Array.isArray(window.infinityProblems[cat])) {
          questionPool = questionPool.concat(window.infinityProblems[cat]);
        }
      });
    }
  } else if (category === "all") {
    // すべてのカテゴリーの問題をマージ
    Object.keys(window.infinityProblems).forEach(key => {
      if (Array.isArray(window.infinityProblems[key])) {
        questionPool = questionPool.concat(window.infinityProblems[key]);
      }
    });
  } else if (window.infinityProblems[category]) {
    // 指定されたカテゴリーの問題を使用
    questionPool = window.infinityProblems[category];
  } else {
    // フォールバック：すべてを使用
    Object.keys(window.infinityProblems).forEach(key => {
      if (Array.isArray(window.infinityProblems[key])) {
        questionPool = questionPool.concat(window.infinityProblems[key]);
      }
    });
  }

  const q = randomPick(questionPool);

  // 整数結果を得る値を探す（最大200回試行）
  let values = {};
  for (let attempt = 0; attempt < 200; attempt++) {
    values = {};
    for (const key in q.vars) {
      const r = q.vars[key];
      const step = r.step || 1;
      const steps = Math.floor((r.max - r.min) / step) + 1;
      values[key] = Math.floor(Math.random() * steps) * step + r.min;
    }

    let answer = q.formula(values);
    
    // 整数結果なら採用
    if (Number.isInteger(answer)) {
      break;
    }
  }

  const text = q.template.replace(/\{(\w+)\}/g, (_, k) => values[k]);

  let answer = q.formula(values);

  // 整数か小数第一位
  answer = Number.isInteger(answer)
    ? answer
    : Math.round(answer * 10) / 10;

  return {
    result: answer,
    questionText: text,
    formulaText: ""
  };
}
