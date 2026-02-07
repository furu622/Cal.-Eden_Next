/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

/*
  Algebra Fundamentals - Systems of Equations
*/

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.systems_of_equations = [

  // x + y = c
  // x − y = d
  {
    template:
      "Solve the system:\n x + y = {c}\n x − y = {d}",
    vars: {
      c: { values: [6, 8, 10] },
      d: { values: [2, 4] }
    },
    formula: (v) => ({
      x: (v.c + v.d) / 2,
      y: (v.c - v.d) / 2
    })
  },

  // x + y = c
  // y = k
  {
    template:
      "Solve the system:\n x + y = {c}\n y = {k}",
    vars: {
      c: { values: [5, 7, 9] },
      k: { values: [2, 3, 4] }
    },
    formula: (v) => ({
      x: v.c - v.k,
      y: v.k
    })
  },

  // x + y = c
  // x = k
  {
    template:
      "Solve the system:\n x + y = {c}\n x = {k}",
    vars: {
      c: { values: [6, 8, 10] },
      k: { values: [2, 3, 4] }
    },
    formula: (v) => ({
      x: v.k,
      y: v.c - v.k
    })
  },

  // 2x + y = c
  // y = k
  {
    template:
      "Solve the system:\n 2x + y = {c}\n y = {k}",
    vars: {
      c: { values: [8, 10, 12] },
      k: { values: [2, 4] }
    },
    formula: (v) => ({
      x: (v.c - v.k) / 2,
      y: v.k
    })
  },

  // x + y = c
  // 2x − y = d
  {
    template:
      "Solve the system:\n x + y = {c}\n 2x − y = {d}",
    vars: {
      c: { values: [5, 7, 9] },
      d: { values: [1, 3, 5] }
    },
    formula: (v) => ({
      x: (v.c + v.d) / 3,
      y: v.c - (v.c + v.d) / 3
    })
  },

  // x − y = c
  // x + y = d
  {
    template:
      "Solve the system:\n x − y = {c}\n x + y = {d}",
    vars: {
      c: { values: [1, 3, 5] },
      d: { values: [7, 9, 11] }
    },
    formula: (v) => ({
      x: (v.c + v.d) / 2,
      y: (v.d - v.c) / 2
    })
  }

];
