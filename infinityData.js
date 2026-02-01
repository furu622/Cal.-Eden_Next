// infinityData.js
// Level∞ 問題データ統合ファイル
// 各カテゴリーの問題は infinityData/ フォルダの個別ファイルで定義

// 読み込み順序：
// 1. infinityData/mechanics.js
// 2. infinityData/electromagnetism.js
// 3. infinityData/thermodynamics.js
// 4. infinityData/combustion.js
// 5. infinityData/heattransfer.js
// 6. このファイル

// 統計情報の表示と検証
if (window.infinityProblems) {
  const categories = Object.keys(window.infinityProblems);
  const totalProblems = categories.reduce((sum, cat) => {
    return sum + (Array.isArray(window.infinityProblems[cat]) ? window.infinityProblems[cat].length : 0);
  }, 0);

  console.log("✓ Infinity Problems loaded successfully");
  console.log("  Categories:", categories.join(", "));
  console.log("  Total problems:", totalProblems);
  
  // カテゴリー別の問題数
  categories.forEach(cat => {
    if (Array.isArray(window.infinityProblems[cat])) {
      console.log(`  - ${cat}: ${window.infinityProblems[cat].length} problems`);
    }
  });
} else {
  console.error("✗ infinityProblems not found!");
}
