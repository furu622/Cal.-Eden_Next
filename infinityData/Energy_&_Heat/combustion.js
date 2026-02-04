// infinityData/combustion.js
// Level∞ 問題データ - 燃焼工学 (Combustion Engineering)

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.combustion = [
  {
    template: "Complete combustion of {n} moles of {fuel} requires {O2_required} moles of O₂. If {O2_actual} moles of O₂ is supplied, find the excess oxygen percentage.",
    vars: {
      fuel: { values: ["H₂", "CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"] },
      n: { min: 1, max: 5 },
      O2_actual: { min: 5, max: 30 }
    },
    extraVars: (v) => {
      const coefficients = {
        "H₂": 0.5,      // 2 H₂ + O₂ → 2 H₂O, 1 mol O₂ / 2 mol H₂ = 0.5
        "CH₄": 2,       // CH₄ + 2 O₂ → CO₂ + 2 H₂O
        "C₂H₆": 3.5,    // 2 C₂H₆ + 7 O₂ → 4 CO₂ + 6 H₂O, 7/2 = 3.5
        "C₃H₈": 5,      // C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O
        "C₄H₁₀": 6.5    // 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O, 13/2 = 6.5
      };
      return { O2_required: v.n * coefficients[v.fuel] };
    },
    formula: (v) => (v.O2_actual - v.O2_required) / v.O2_required * 100
  },

  // 水のモルを問う問題
  {
    template: "Complete combustion of {n} moles of {fuel} produces how many moles of H₂O?",
    vars: {
      fuel: { values: ["CH₄", "C₂H₆", "C₃H₈", "H₂", "C"] },
      n: { min: 1, max: 5 }
    },
    extraVars: (v) => {
      // 水の生成係数
      const h2o = {
        "CH₄": 2,   // CH4 → 2 H2O
        "C₂H₆": 6,  // C2H6 → 6 H2O
        "C₃H₈": 8,  // C3H8 → 8 H2O
        "H₂": 1,    // H2 → H2O
        "C": 0      // C → H2O は発生しない
      };
      return { H2O: v.n * h2o[v.fuel] };
    },
    formula: (v) => v.H2O
  },

  // 二酸化炭素のモルを問う問題
  {
    template: "Complete combustion of {n} moles of {fuel} produces how many moles of CO₂?",
    vars: {
      fuel: { values: ["CH₄", "C₂H₆", "C₃H₈", "H₂", "C"] },
      n: { min: 1, max: 5 }
    },
    extraVars: (v) => {
      // CO2 の生成係数
      const co2 = {
        "CH₄": 1,   // CH4 → 1 CO2
        "C₂H₆": 2,  // C2H6 → 2 CO2
        "C₃H₈": 3,  // C3H8 → 3 CO2
        "H₂": 0,    // H2 → CO2 は発生しない
        "C": 1      // C → 1 CO2
      };
      return { CO2: v.n * co2[v.fuel] };
    },
    formula: (v) => v.CO2
  },



  {
    template: "A burner produces {Q} MJ of heat and operates for {t} hours. Calculate the average power output in kW (1 MJ/h = 0.278 kW).",
    vars: {
      Q: { min: 50, max: 200 },
      t: { min: 2, max: 8 }
    },
    formula: (v) => (v.Q / v.t) * 0.278
  },

  {
    template: "The combustion efficiency of a boiler is {n}%. If the heat released is {Q} MJ, calculate the useful heat output.",
    vars: {
      n: { min: 80, max: 100 },
      Q: { min: 10, max: 100 }
    },
    formula: (v) => v.Q * v.n / 100
  },

  {
    template: "A fuel mixture contains {m1} kg of fuel A (HV = {HV1} MJ/kg) and {m2} kg of fuel B (HV = {HV2} MJ/kg). Calculate the total heat released.",
    vars: {
      m1: { min: 1, max: 5 },
      HV1: { min: 30, max: 50 },
      m2: { min: 1, max: 5 },
      HV2: { min: 20, max: 40 }
    },
    formula: (v) => v.m1 * v.HV1 + v.m2 * v.HV2
  },
];
