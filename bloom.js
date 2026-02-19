/*
 Cal. Eden: Next - Bloom Edition
© 2026 ふる. This file is part of this project.
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
/*============================
function roundSmart(n) {
  // 整数 or 小数第一位
  return Number.isInteger(n) ? n : Math.round(n * 10) / 10;
}
=============================*/

  // 答えの表示を整える（指数表記が適切な場合はそちらを採用）
  function formatAnswer(value) {
    if (value === 0) return "0";

    const abs = Math.abs(value);

    if (abs < 0.001 || abs >= 1000) {
      return value.toExponential(3);
    }

    return Math.round(value * 1000) / 1000;
  }


// =====================================================
// Infinityモード：カテゴリ別 正誤判定 & 表示ルール
// =====================================================
  function getAnswerRuleForCategory(category) {
    switch(category) {

      // -----------------------------
      // Arithmetic & Proportions
      // -----------------------------
      case "proportionality":
      case "inverse_proportionality":
      case "ratios":
      case "scaling_laws":
      case "unit_conversion":
        return {
          check: (input, correct) => {
            // 相対誤差 2%まで許容
            const tolerance = Math.max(Math.abs(correct) * 0.02, 1e-12);
            return Math.abs(input - correct) <= tolerance;
          },
          format: value => {
            // 整数なら整数表示、それ以外は小数2桁
            return Number.isInteger(value) ? value : (Math.round(value*100)/100);
          }
        };

      // -----------------------------
      // Algebra Fundamentals
      // -----------------------------
      case "linear_equations":
      case "solving_for_variables":
      case "systems_of_equations":
      case "rearranging_formulas":
        return {
          check: (input, correct) => Math.round(input) === correct,
          format: value => value
        };

      // -----------------------------
      // Forces & Motion
      // -----------------------------
      case "mechanics_linear":
      case "statics":
      case "rotational":
      case "machines":
        return {
          check: (input, correct) => Math.round(input) === correct,
          format: value => value
        };

      // -----------------------------
      // Electricity & Field
      // -----------------------------
      case "electromagnetism":
      case "circuits":
        return {
          check: (input, correct) => {
            const tolerance = Math.max(Math.abs(correct) * 0.03, 1e-12); // 3%相対誤差
            return Math.abs(input - correct) <= tolerance;
          },
          format: value => Number.isInteger(value) ? value : (Math.round(value*10)/10)
        };

      // -----------------------------
      // Energy & Heat
      // -----------------------------
      case "thermodynamics":
      case "combustion":
      case "heattransfer":
        return {
          check: (input, correct) => {
            const tolerance = Math.max(Math.abs(correct) * 0.02, 1e-12); // 2%相対誤差
            return Math.abs(input - correct) <= tolerance;
          },
          format: value => Number.isInteger(value) ? value : (Math.round(value*10)/10)
        };

      // -----------------------------
      // Fluid Mechanics
      // -----------------------------
      case "fluidmechanics":
        return {
          check: (input, correct) => {
            // 微小値のため絶対誤差 1e-6 で判定
            return Math.abs(input - correct) <= 1e-6;
          },
          format: value => value.toExponential(3) // 指数表記
        };

      // -----------------------------
      // デフォルト
      // -----------------------------
      default:
        return {
          check: (input, correct) => Math.abs(input - correct) <= Math.max(Math.abs(correct) * 0.05, 1e-12),
          format: value => formatAnswer(value)
        };
    }
  }


  /*========================================================
    checkAnswerUI() - Infinityモード対応版
  ========================================================*/
  function checkAnswerUI() {
    const raw = document.getElementById("answer").value;

    if (raw.trim() === "") {
      document.getElementById("result").textContent = "Please enter a number.";
      return;
    }

    const input = Number(raw);
    const correct = state.answer;

    let isCorrect, formatted;

    if (state.level.key === "infinity") {
      // Infinityモード用
      const category = state.infinityCategory || "all";
      const rule = getAnswerRuleForCategory(category);

      isCorrect = rule.check(input, correct);
      formatted = rule.format(correct);

    } else {
      // Level1〜4: 厳密一致
      isCorrect = input === correct;
      formatted = correct;
    }

    const resultEl = document.getElementById("result");
    resultEl.textContent = isCorrect
      ? "Correct!"
      : `Wrong! Answer is ${formatted}`;

    // セッション管理
    recordAnswer(isCorrect);
    updateSessionDisplay();

    state.isAnswered = true;
    state.waitingNext = true;

    stopTimer();
    speechSynthesis.cancel();
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

      if (Array.isArray(r.values)) {
        values[key] = randomPick(r.values);
      } else {
        const step = r.step || 1;
        const steps = Math.floor((r.max - r.min) / step) + 1;
        values[key] = Math.floor(Math.random() * steps) * step + r.min;
      }
    }

    if (typeof q.extraVars === "function") {
      const extra = q.extraVars(values);
      for (const k in extra) {
        values[k] = extra[k];
      }
    }

    let answer = q.formula(values);

    // 整数結果なら採用
    if (Number.isInteger(answer)) {
      break;
    }
  }

  const text = q.template.replace(/\{(\w+)\}/g, (_, k) => values[k]);

  let answer = q.formula(values);




  return {
    result: answer,
    questionText: text,
    formulaText: ""
  };
}
