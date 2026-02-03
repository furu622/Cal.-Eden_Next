// infinityData/combustion.js
// Level∞ 問題データ - 燃焼工学 (Combustion Engineering)

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.combustion = [
  {
    template: "A fuel with calorific value of {HV} MJ/kg is burned with mass {m} kg. Calculate the total heat released.",
    vars: {
      HV: { min: 20, max: 50 },
      m: { min: 1, max: 10 }
    },
    formula: (v) => v.HV * v.m
  },

  {
    template: "Complete combustion of {n} moles of methane (CH₄) requires {O2_required} moles of O₂. If {O2_actual} moles of O₂ is supplied, find the excess oxygen percentage.",
    vars: {
      n: { min: 1, max: 5 },
      O2_actual: { min: 10, max: 60 }
    },
    extraVars: (v) => ({
      O2_required: v.n * 2
    }),
    formula: (v) => (v.O2_actual - v.O2_required) / v.O2_required * 100
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
