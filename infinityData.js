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
  }

];
