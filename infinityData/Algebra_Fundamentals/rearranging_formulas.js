/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/


/*
  Algebra Fundamentals - Rearranging Formulas (with numbers)
*/

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.rearranging_formulas = [

  // a = b + c → solve for b
  {
    template:
      "Given a = b + c, find b when a = {a} and c = {c}.",
    vars: {
      a: { values: [8, 10, 12] },
      c: { values: [2, 3, 5] }
    },
    formula: (v) => v.a - v.c
  },

  // a = bc → solve for c
  {
    template:
      "Given a = bc, find c when a = {a} and b = {b}.",
    vars: {
      a: { values: [12, 18, 20] },
      b: { values: [2, 3, 4] }
    },
    formula: (v) => v.a / v.b
  },

  // v = s / t → solve for t
  {
    template:
      "Given v = s / t, find t when s = {s} and v = {v}.",
    vars: {
      s: { values: [20, 30, 40] },
      v: { values: [4, 5, 8] }
    },
    formula: (v) => v.s / v.v
  },

  // F = ma → solve for m
  {
    template:
      "Given F = ma, find m when F = {F} and a = {a}.",
    vars: {
      F: { values: [12, 20, 30] },
      a: { values: [2, 4, 5] }
    },
    formula: (v) => v.F / v.a
  },

  // P = IV → solve for I
  {
    template:
      "Given P = IV, find I when P = {P} and V = {V}.",
    vars: {
      P: { values: [12, 24, 36] },
      V: { values: [3, 4, 6] }
    },
    formula: (v) => v.P / v.V
  },

  // A = lw → solve for w
  {
    template:
      "Given A = lw, find w when A = {A} and l = {l}.",
    vars: {
      A: { values: [12, 20, 24] },
      l: { values: [3, 4, 6] }
    },
    formula: (v) => v.A / v.l
  }

];
