// infinityData/heattransfer.js
// Level∞ 問題データ - 伝熱工学 (Heat Transfer Engineering)

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.heattransfer = [
  {
    template: "Heat flows through a wall with thermal conductivity {k} W/m·K, area {A} m², thickness {L} m, and temperature difference {dT} K for {t} s. Find the heat transferred.",
    vars: {
      k: { min: 100, max: 400, step: 100 },
      A: { min: 1, max: 5 },
      L: { min: 1, max: 5 },
      dT: { min: 20, max: 100, step: 20 },
      t: { min: 10, max: 60, step: 10 }
    },
    formula: (v) => (v.k * v.A * v.dT / v.L) * v.t
  },

  {
    template: "An object loses heat to air with heat transfer coefficient {h} W/m²·K, surface area {A} m², temperature difference {dT} K for {t} s. Find the heat lost.",
    vars: {
      h: { min: 10, max: 100, step: 10 },
      A: { min: 1, max: 5 },
      dT: { min: 10, max: 60, step: 10 },
      t: { min: 10, max: 60, step: 10 }
    },
    formula: (v) => v.h * v.A * v.dT * v.t
  },

  {
    template: "A surface with area {A} m² radiates heat to surroundings. Its temperature is {T} K and surroundings are at {T0} K. Find the heat radiated in {t} s. (σ = 5.67e-8)",
    vars: {
      A: { min: 1, max: 5 },
      T: { min: 400, max: 800, step: 100 },
      T0: { min: 200, max: 300, step: 50 },
      t: { min: 10, max: 60, step: 10 }
    },
    formula: (v) => 5.67e-8 * v.A * (Math.pow(v.T,4) - Math.pow(v.T0,4)) * v.t
  },

  {
    template: "Heat {Q} J passes through a wall with conductivity {k} W/m·K, area {A} m², thickness {L} m in {t} s. Find the temperature difference.",
    vars: {
      Q: { min: 10000, max: 40000, step: 10000 },
      k: { min: 100, max: 400, step: 100 },
      A: { min: 1, max: 5 },
      L: { min: 1, max: 5 },
      t: { min: 10, max: 60, step: 10 }
    },
    formula: (v) => (v.Q * v.L) / (v.k * v.A * v.t)
  },

  {
    template: "An object loses {Q} J of heat through convection from area {A} m² with temperature difference {dT} K in {t} s. Find the heat transfer coefficient.",
    vars: {
      Q: { min: 10000, max: 40000, step: 10000 },
      A: { min: 1, max: 5 },
      dT: { min: 10, max: 60, step: 10 },
      t: { min: 10, max: 60, step: 10 }
    },
    formula: (v) => v.Q / (v.A * v.dT * v.t)
  },
];
