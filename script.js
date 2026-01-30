/*
  Cal. Eden - Bloom Edition
  © 2026 ふる. All Rights Reserved.
  Unauthorized use, reproduction, or modification is prohibited.
*/

/*=================================================================*/

/* =========================================
   Bloom Mode JS 目次
========================================
1. 設定データ
2. 状態管理
3. UI操作
4. レベル選択
5. 問題生成
6. 回答処理
7. タイマー
8. 補助関数
9. Enter制御
10. セッション管理
======================================== */

/* 1. 設定データ */
const levels = {
  level1: { addsub: { min: 0, max: 10 },  muldiv: { min: 1, max: 10 },  time: 10000 },
  level2: { addsub: { min: 0, max: 50 },  muldiv: { min: 2, max: 20 },  time: 12500 },
  level3: { addsub: { min: 0, max: 100 }, muldiv: { min: 5, max: 30 },  time: 15000 },
  level4: { addsub: { min: 0, max: 500 }, muldiv: { min: 10, max: 50 }, time: 20000 },

  infinity: {
  key: "infinity",
  addsub: { min: 0, max: 500 },   // 使わないけどダミーでOK
  muldiv: { min: 10, max: 50 },
  time: 20000 },   // 使わないけど必要

};

/* 2. 状態管理 */
let showQuestionText = true;
let showFormula = true;

let state = {
  level: null,
  answer: null,
  isAnswered: false,
  timerId: null,
  countdownId: null,
  waitingNext: false // 正誤判定後、次の問題待ち
};

/* 3. UI操作 */
function showScreen(id) {
  ["gameMenu", "levelMenu", "quiz"].forEach(s =>
    document.getElementById(s).style.display = "none"
  );
  document.getElementById(id).style.display = "block";
}

function toggleQuestion() {
  showQuestionText = !showQuestionText;
  const q = document.getElementById("question");
  if (showQuestionText) q.textContent = q.dataset.original || q.textContent;
  else {
    q.dataset.original = q.textContent;
    q.textContent = "[English hidden]";
  }
}

/* 4. レベル選択 */
function selectLevel(key) {
  state.level = levels[key];
  state.level.key = key; // ← これがないと getBloomQuestion がエラーになる
  showScreen("quiz");
  prepareNextQuestion(); // 最初の問題生成
  startSession();
  document.getElementById("answer").focus(); // 入力欄にフォーカス
}

/* 5. 問題生成 */
function startBloom() {
  showScreen("levelMenu");
}

function generateQuestion() {
  return getBloomQuestion();
}

// 新設: 次の問題を準備する（読み上げ → タイマー開始）
function prepareNextQuestion() {
  const q = generateQuestion();
  state.answer = q.result;
  state.isAnswered = false;
  state.waitingNext = false;
  renderQuestion(q);

  stopTimer();

  const utter = new SpeechSynthesisUtterance(q.questionText);
  utter.lang = "en-US";

  utter.onend = () => {
    startTimer();
    document.getElementById("answer").focus();
  };

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function renderQuestion(q) {
  const qEl = document.getElementById("question");
  const fEl = document.getElementById("formula");

  qEl.dataset.original = q.questionText;
  fEl.dataset.original = q.formulaText;

  qEl.textContent = showQuestionText ? q.questionText : "[English hidden]";
  fEl.textContent = showFormula ? q.formulaText : "[Formula hidden]";

  qEl.style.display = "block";
  fEl.style.display = "block";

  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

/* 6. 回答処理 */
function checkAnswerUI() {
  const input = Number(document.getElementById("answer").value);
  const isCorrect = input === state.answer;

  const result = document.getElementById("result");
  result.textContent = isCorrect ? "Correct!" : `Wrong! Answer is ${state.answer}`;

  recordAnswer(isCorrect);
  updateSessionDisplay();

  state.isAnswered = true;
  state.waitingNext = true;

  stopTimer();
  speechSynthesis.cancel();
}

/* 7. タイマー */
function startTimer() {
  stopTimer();

  const circle = document.getElementById("progress");
  const total = state.level.time;
  const start = Date.now();

  const radius = circle.r.baseVal.value;
  const length = 2 * Math.PI * radius;
  circle.setAttribute("stroke-dasharray", length);

  state.countdownId = setInterval(() => {
    const elapsed = Date.now() - start;
    const ratio = Math.max(0, 1 - elapsed / total);
    circle.setAttribute("stroke-dashoffset", length * (1 - ratio));

    if (ratio > 0.5) circle.setAttribute("stroke", "#3a8b3a");
    else if (ratio > 0.25) circle.setAttribute("stroke", "#d88c42");
    else circle.setAttribute("stroke", "#b23a36");
  }, 50);

  state.timerId = setTimeout(() => {
    if (!state.isAnswered) prepareNextQuestion();
  }, total);
}

function stopTimer() {
  clearTimeout(state.timerId);
  clearInterval(state.countdownId);
}

/* 8. 補助関数 */
function speak(text) { 
  speechSynthesis.cancel(); 
  const u = new SpeechSynthesisUtterance(text); 
  u.lang = "en-US"; 
  speechSynthesis.speak(u); 
}

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/* 9. Enter制御 */
document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    if (!state.isAnswered) {
      checkAnswerUI(); // 回答送信
    } else if (state.isAnswered && state.waitingNext) {
      prepareNextQuestion(); // 次の問題読み上げ
    }
  }
});

/* 10. セッション管理 */
let elapsedTimerId = null;

function goMenu() {
  document.getElementById("gameMenu").style.display = "block";
  ["levelMenu","quiz"].forEach(id => document.getElementById(id).style.display="none");
  stopTimer();
  speechSynthesis.cancel();
}

function goLevel() {
  showScreen("levelMenu");
  stopTimer();
  speechSynthesis.cancel();
}

function toggleFormula() {
  showFormula = !showFormula;
  const f = document.getElementById("formula");
  f.textContent = showFormula ? f.dataset.original : "[Formula hidden]";
}

function updateSessionDisplay() {
  document.getElementById("correctCount").textContent = sessionState.correct;
  document.getElementById("totalCount").textContent = sessionState.total;

  if (sessionState.startTime) {
    const elapsedSec = Math.floor((Date.now() - sessionState.startTime)/1000);
    const minutes = Math.floor(elapsedSec/60);
    const seconds = elapsedSec % 60;
    document.getElementById("elapsedTime").textContent = `${minutes}:${seconds.toString().padStart(2,'0')}`;
  }
}

function startElapsedTimer() {
  if (elapsedTimerId) clearInterval(elapsedTimerId);
  elapsedTimerId = setInterval(updateSessionDisplay, 500);
}

function stopElapsedTimer() {
  if (elapsedTimerId) clearInterval(elapsedTimerId);
}

let sessionState = { correct: 0, total: 0, startTime: null };

function startSession() {
  sessionState.correct = 0;
  sessionState.total = 0;
  sessionState.startTime = Date.now();
  updateSessionDisplay();
  startElapsedTimer();
}

function recordAnswer(isCorrect) {
  sessionState.total++;
  if (isCorrect) sessionState.correct++;
}

function endSession() {
  stopElapsedTimer();
  if (!sessionState.startTime) { alert("セッションが開始されていません"); return; }
  const elapsedSec = Math.floor((Date.now() - sessionState.startTime)/1000);
  const minutes = Math.floor(elapsedSec/60);
  const seconds = elapsedSec % 60;
  alert(`正解率: ${sessionState.correct}/${sessionState.total}\nプレイ時間: ${minutes}分 ${seconds}秒`);
}



