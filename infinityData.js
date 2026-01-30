// infinityData.js
// Level∞ 問題データ

window.infinityProblems = [

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
  }

];
