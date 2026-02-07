/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

/*
  Algebra Fundamentals - Solving for Variables
*/

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.solving_for_variables = [

  // ax = b → solve for a
  {
    template:
      "Solve for a: a{x} = {b}",
    vars: {
      x: { values: [2, 4, 5] },
      b: { values: [8, 20, 40] }
    },
    formula: (v) => v.b / v.x
  },

  // ax + b = c → solve for x
  {
    template:
      "Solve for x: {a}x + {b} = {c}",
    vars: {
      a: { values: [2, 3, 4] },
      b: { values: [2, 4, 6] },
      c: { values: [10, 14, 18] }
    },
    formula: (v) => (v.c - v.b) / v.a
  },

  // ax − b = c → solve for x
  {
    template:
      "Solve for x: {a}x − {b} = {c}",
    vars: {
      a: { values: [2, 3, 5] },
      b: { values: [2, 5] },
      c: { values: [5, 10, 15] }
    },
    formula: (v) => (v.c + v.b) / v.a
  },

  // x / a = b → solve for a
  {
    template:
      "Solve for a: x / a = {b}",
    vars: {
      b: { values: [2, 4, 5] },
      x: { values: [8, 20, 40] }
    },
    formula: (v) => v.x / v.b
  },

  // a(x + b) = c → solve for x
  {
    template:
      "Solve for x: {a}(x + {b}) = {c}",
    vars: {
      a: { values: [2, 3] },
      b: { values: [2, 4] },
      c: { values: [12, 18, 24] }
    },
    formula: (v) => (v.c / v.a) - v.b
  },

  // (x − a) / b = c → solve for x
  {
    template:
      "Solve for x: (x − {a}) / {b} = {c}",
    vars: {
      a: { values: [2, 4] },
      b: { values: [2, 3] },
      c: { values: [3, 5] }
    },
    formula: (v) => v.b * v.c + v.a
  },

  // y = ax → solve for a
  {
    template:
      "Solve for a: y = a{x}",
    vars: {
      x: { values: [2, 4, 5] },
      y: { values: [10, 20, 40] }
    },
    formula: (v) => v.y / v.x
  }

];
