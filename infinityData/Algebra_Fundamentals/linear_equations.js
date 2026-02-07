/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

/*
  Algebra Fundamentals - Linear Equations
*/

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.linear_equations = [

  // ax = b
  {
    template:
      "Solve for x: {a}x = {b}",
    vars: {
      a: { values: [2, 3, 4, 5] },
      b: { values: [8, 9, 12, 20] }
    },
    formula: (v) => v.b / v.a
  },

  // x / a = b
  {
    template:
      "Solve for x: x / {a} = {b}",
    vars: {
      a: { values: [2, 3, 4] },
      b: { values: [3, 5, 6] }
    },
    formula: (v) => v.a * v.b
  },

  // x + a = b
  {
    template:
      "Solve for x: x + {a} = {b}",
    vars: {
      a: { values: [2, 5, 7] },
      b: { values: [10, 12, 15] }
    },
    formula: (v) => v.b - v.a
  },

  // x − a = b
  {
    template:
      "Solve for x: x − {a} = {b}",
    vars: {
      a: { values: [2, 4, 6] },
      b: { values: [3, 5, 7] }
    },
    formula: (v) => v.b + v.a
  },

  // ax + b = c
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

  // ax − b = c
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

];
