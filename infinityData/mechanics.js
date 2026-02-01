// infinityData/mechanics.js
// Level∞ 問題データ - 力学 (Mechanics)

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.mechanics = [
  {
    template: "A force acts on a mass of {m} kg producing an acceleration of {a} m/s². Find the force.",
    vars: {
      m: { min: 2, max: 12 },
      a: { min: 2, max: 10 }
    },
    formula: (v) => v.m * v.a
  },

  {
    template: "A force of {F} N acts on a {m} kg mass. Find the acceleration.",
    vars: {
      F: { min: 20, max: 120 },
      m: { min: 2, max: 12 }
    },
    formula: (v) => v.F / v.m
  },

  {
    template: "An object with mass {m} kg moves at a velocity of {v} m/s. Calculate its kinetic energy.",
    vars: {
      m: { min: 1, max: 10 },
      v: { min: 5, max: 20 }
    },
    formula: (v) => 0.5 * v.m * v.v * v.v
  },

  {
    template: "An object is lifted to a height of {h} m with a mass of {m} kg. Find the gravitational potential energy. (g = 10 m/s²)",
    vars: {
      m: { min: 1, max: 10 },
      h: { min: 2, max: 20 }
    },
    formula: (v) => v.m * 10 * v.h
  },

  {
    template: "A force of {F} N is applied over a distance of {d} m. Calculate the work done.",
    vars: {
      F: { min: 10, max: 50 },
      d: { min: 2, max: 15 }
    },
    formula: (v) => v.F * v.d
  },

  {
    template: "A force of {F} N is applied perpendicular to a lever at a distance of {r} m from the pivot. Find the torque.",
    vars: {
      F: { min: 10, max: 80 },
      r: { min: 1, max: 10 }
    },
    formula: (v) => v.F * v.r
  },

  {
    template: "A lever is in equilibrium. A force of {F1} N acts at {r1} m from the pivot. If another force acts at {r2} m on the opposite side, find the required force.",
    vars: {
      F1: { min: 10, max: 80 },
      r1: { min: 1, max: 8 },
      r2: { min: 1, max: 8 }
    },
    formula: (v) => (v.F1 * v.r1) / v.r2
  },

  {
    template: "A mass of {m} kg is placed {r} m from a pivot. Calculate the moment due to its weight. (g = 10 m/s²)",
    vars: {
      m: { min: 1, max: 10 },
      r: { min: 1, max: 10 }
    },
    formula: (v) => v.m * 10 * v.r
  },

  {
    template: "Two masses are balanced on a lever. A mass of {m1} kg is placed {r1} m from the pivot. If another mass is placed {r2} m on the other side, find its mass. (g = 10 m/s²)",
    vars: {
      m1: { min: 1, max: 10 },
      r1: { min: 1, max: 8 },
      r2: { min: 1, max: 8 }
    },
    formula: (v) => (v.m1 * v.r1) / v.r2
  },

  {
    template: "A force of {F} N is applied at an angle of 90° to a lever arm of {r} m. Find the torque.",
    vars: {
      F: { min: 10, max: 80 },
      r: { min: 1, max: 10 }
    },
    formula: (v) => v.F * v.r
  },

  {
    template: "If the applied torque becomes {k} times larger while the moment of inertia stays the same, by what factor does the angular acceleration change?",
    vars: {
      k: { min: 2, max: 5 }
    },
    formula: (v) => v.k
  },

  {
    template: "A disk's radius is multiplied by {k}. By what factor does its moment of inertia change?",
    vars: {
      k: { min: 2, max: 4 }
    },
    formula: (v) => v.k * v.k
  },

  {
    template: "A motor delivers {P} kW at {N} rpm. Find the torque in N·m. (T = 9550P/N)",
    vars: {
      P: { min: 2, max: 20, step: 2 },
      N: { min: 500, max: 2000, step: 500 }
    },
    formula: (v) => (9550 * v.P) / v.N
  },

  {
    template: "A motor produces a torque of {T} N·m at {N} rpm. Find the power in kW. (P = TN/9550)",
    vars: {
      T: { min: 10, max: 200, step: 10 },
      N: { min: 500, max: 2000, step: 500 }
    },
    formula: (v) => (v.T * v.N) / 9550
  },

  {
    template: "A motor delivers {P} kW with torque {T} N·m. Find the rotational speed in rpm.",
    vars: {
      P: { min: 2, max: 20, step: 2 },
      T: { min: 20, max: 200, step: 20 }
    },
    formula: (v) => (9550 * v.P) / v.T
  },
];
