// infinityData/mechanics.js
// Level∞ 問題データ - 力学 (Mechanics)
// このファイルは4つのカテゴリーのファイルを読み込んでマージします

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

// 4つのサブカテゴリーを統合
window.infinityProblems.mechanics = [
    ...mechanics_linear,
    ...statics,
    ...rotational,
    ...machines,
];
