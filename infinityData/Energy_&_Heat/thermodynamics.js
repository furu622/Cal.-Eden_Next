/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

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
  },

  {
    template: "An ideal gas expands isothermally at temperature {T} K. If {n} mol expands from volume V to 2V, find the work done. (R = 8, ln2 = 0.7)",
    vars: {
      n: { min: 1, max: 5 },
      T: { min: 200, max: 500, step: 100 }
    },
    formula: (v) => v.n * 8 * v.T * 0.7   // W = nRT ln(Vf/Vi) = nRT ln(2) = nRT * 0.7
  },

  {
    template: "A heat engine completes a full cycle and absorbs {Q} J of heat. How much work is done? ",
    vars: {
      Q: { min: 2000, max: 15000, step: 1000 }
    },
    formula: (v) => v.Q  // For a full cycle, the net work done is equal to the heat absorbed (since ΔU = 0 for a full cycle)
  },

  {
    template: "A Carnot engine operates between {Th} K and {Tc} K. Find its efficiency.",
    vars: {
      Th: { min: 400, max: 800, step: 100 },
      Tc: { min: 100, max: 300, step: 100 }
    },
    formula: (v) => 1 - (v.Tc / v.Th)  // Efficiency of Carnot engine: η = 1 - (Tc/Th)
  },

  {
    template: "An ideal gas at temperature {T} K and amount {n} mol completes a cycle with total absorbed heat {Q} J. Find the net work done.",
    vars: {
      T: { min: 200, max: 600, step: 100 },
      n: { min: 1, max: 5 },
      Q: { min: 2000, max: 10000, step: 1000 }
    },
    formula: (v) => v.Q   // For a complete cycle, the net work done is equal to the total absorbed heat (since ΔU = 0 for a full cycle)
  },

  {
    template: "A gas undergoes an adiabatic process and does {W} J of work. Find the change in internal energy.",
    vars: {
      W: { min: 1000, max: 8000, step: 1000 }
    },
    formula: (v) => -v.W   // For an adiabatic process, ΔU = -W (since Q = 0)
  },

  {
    template: "During an adiabatic process, the internal energy decreases by {dU} J. Find the work done by the gas.",
    vars: {
      dU: { min: 1000, max: 8000, step: 1000 }
    },
    formula: (v) => v.dU   // For an adiabatic process, W = -ΔU (since Q = 0)
  },

  {
    template: "A monatomic ideal gas (γ = 5/3) is compressed adiabatically from volume V to V/8. If initial temperature is {T1} K, find the final temperature.",
    vars: {
      T1: { min: 200, max: 500, step: 100 }
    },
    formula: (v) => v.T1 * 4   // For adiabatic compression, T2 = T1 * (V1/V2)^(γ-1) = T1 * (8)^(2/3) = T1 * 4
  },

  {
    template: "An Otto cycle engine has compression ratio {r}. For a monatomic gas (γ = 5/3), find the efficiency.",
    vars: {
      r: { values: [8, 27, 64] }
    },
    formula: (v) => {
      const root = Math.cbrt(v.r);
      const power = root * root;  // r^(2/3)
      return 1 - 1 / power;   // Efficiency of Otto cycle: η = 1 - 1/r^(γ-1) = 1 - 1/r^(2/3)
    }
  },



];
