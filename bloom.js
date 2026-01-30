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
  return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
}

function roundSmart(n) {
  // 整数 or 小数第一位
  return Number.isInteger(n) ? n : Math.round(n * 10) / 10;
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

  let A = randRange(range);
  let B = randRange(range);
  let C = randRange(range);
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
// Level∞
// ============================

function getInfinityQuestion() {
  const q = randomPick(window.infinityProblems);

  const values = {};

  for (const key in q.vars) {
    const r = q.vars[key];
    values[key] = Math.floor(Math.random() * (r.max - r.min + 1)) + r.min;
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
