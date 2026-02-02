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
// infinityData.js
// Level∞ 問題データ統合・表示（カテゴリ再編対応）

window.infinityCategoryTree = {
  "Forces & Motion": [
    "mechanics_linear",
    "statics",
    "rotational",
    "machines"
  ],
  "Electricity & Fields": [
    "electromagnetism",
    "circuits"
  ],
  "Energy & Heat": [
    "thermodynamics",
    "combustion",
    "heattransfer"
  ]
};


const CATEGORY_MAP = {
  mechanics_linear: "Forces & Motion",
  statics: "Forces & Motion",
  rotational: "Forces & Motion",
  machines: "Forces & Motion",

  electromagnetism: "Electricity & Field",
  circuits: "Electricity & Field",
  
  thermodynamics: "Energy & Heat",
  combustion: "Energy & Heat",
  heattransfer: "Energy & Heat",
};

function countProblems(data) {
  if (Array.isArray(data)) return data.length;

  if (typeof data === "object") {
    return Object.values(data).reduce((sum, arr) => sum + arr.length, 0);
  }

  return 0;
}

if (window.infinityProblems) {

  console.log("✓ Infinity Problems loaded successfully\n");

  const grouped = {};

  // グルーピング
  Object.keys(window.infinityProblems).forEach(key => {
    const groupName = CATEGORY_MAP[key] || key;

    if (!grouped[groupName]) {
      grouped[groupName] = {};
    }

    grouped[groupName][key] = window.infinityProblems[key];
  });

  let grandTotal = 0;

  // 表示
  Object.keys(grouped).forEach(group => {
    console.log(`■ ${group}`);

    let groupTotal = 0;

    Object.keys(grouped[group]).forEach(cat => {
      const data = grouped[group][cat];
      const total = countProblems(data);

      groupTotal += total;

      // トピック詳細
      if (Array.isArray(data)) {
        console.log(`   ${cat}: ${total}`);
      } else {
        Object.keys(data).forEach(sub => {
          console.log(`   ${sub}: ${data[sub].length}`);
        });
      }
    });

    console.log(`   Total: ${groupTotal}\n`);
    grandTotal += groupTotal;
  });

  console.log(`★ Grand Total Problems: ${grandTotal}`);

} else {
  console.error("✗ infinityProblems not found!");
}
