// infinityData/thermodynamics.js
// Level∞ 問題データ - 熱力学 (Thermodynamics)

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.thermodynamics = [
  {
    template: "How much heat is required to raise the temperature of {m} kg of a substance with specific heat {c} J/kg·K by {dT} K?",
    vars: {
      m: { min: 1, max: 10 },
      c: { min: 200, max: 1000, step: 100 },
      dT: { min: 10, max: 40, step: 10},
    },
    formula: (v) => v.m * v.c * v.dT
  },

  {
    template: "A heat of {Q} J is supplied to {m} kg of a substance with specific heat {c} J/kg·K. Find the temperature change.",
    vars: {
      Q: { min: 10000, max: 40000, step: 1000 },
      m: { min: 1, max: 10 },
      c: { min: 200, max: 1000, step: 100 }
    },
    formula: (v) => v.Q / (v.m * v.c)
  },

  {
    template: "How much heat is needed to change {m} kg of a substance with latent heat {L} J/kg?",
    vars: {
      m: { min: 1, max: 10 },
      L: { min: 100000, max: 400000, step: 10000 }
    },
    formula: (v) => v.m * v.L
  },

  {
    template: "A heat engine does {W} J of work while absorbing {Q} J of heat. Find the efficiency.",
    vars: {
      W: { min: 1000, max: 8000, step: 1000 },
      Q: { min: 9000, max: 20000, step: 1000 }
    },
    formula: (v) => v.W / v.Q
  },

  {
    template: "An ideal gas has pressure {P} Pa, volume {V} m³, and amount {n} mol. Find the temperature. (R = 8)",
    vars: {
      P: { min: 100000, max: 500000, step: 10000},
      V: { min: 1, max: 5 },
      n: { min: 1, max: 5 }
    },
    formula: (v) => (v.P * v.V) / (v.n * 8)
  },

  {
    template: "Find the internal energy of a monatomic ideal gas with {n} mol at temperature {T} K. (R = 8)",
    vars: {
      n: { min: 1, max: 5 },
      T: { min: 200, max: 600,step: 100 }
    },
    formula: (v) => 1.5 * v.n * 8 * v.T
  },

  {
    template: "A gas expands at constant pressure {P} Pa from {V1} m³ to {V2} m³. Find the work done.",
    vars: {
      P: { min: 100000, max: 400000, step: 10000},
      V1: { min: 1, max: 3 },
      V2: { min: 4, max: 7 }
    },
    formula: (v) => v.P * (v.V2 - v.V1)
  },

  {
    template: "A system's internal energy increases by {dU} J while doing {W} J of work. How much heat was supplied?",
    vars: {
      dU: { min: 1000, max: 8000, step: 1000 },
      W: { min: 1000, max: 8000, step: 1000 }
    },
    formula: (v) => v.dU + v.W
  },

  {
    template: "A system receives {Q} J of heat and does {W} J of work. Find the change in internal energy.",
    vars: {
      Q: { min: 2000, max: 12000, step: 1000 },
      W: { min: 1000, max: 8000, step: 1000 }
    },
    formula: (v) => v.Q - v.W
  },

  {
    template: "A system receives {Q} J of heat and its internal energy increases by {dU} J. Find the work done by the system.",
    vars: {
      Q: { min: 3000, max: 15000, step: 1000 },
      dU: { min: 1000, max: 9000 , step: 1000 }
    },
    formula: (v) => v.Q - v.dU
  },

  {
    template: "A system receives {Q} J of heat while {W} J of work is done on it. Find the change in internal energy.",
    vars: {
      Q: { min: 2000, max: 12000, step: 1000 },
      W: { min: 1000, max: 8000, step: 1000 }
    },
    formula: (v) => v.Q + v.W
  }
];
