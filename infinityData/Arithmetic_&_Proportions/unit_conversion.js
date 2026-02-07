/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

// unit_conversion.js

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

window.infinityProblems.unit_conversion = [

  {
    template:
      "Convert {v} cm to mm.",
    vars: {
      v: { values: [2, 5, 12, 30] }
    },
    formula: (v) => v.v * 10
  },

  {
    template:
      "Convert {v} m to cm.",
    vars: {
      v: { values: [1, 2, 3, 5] }
    },
    formula: (v) => v.v * 100
  },

  {
    template:
      "Convert {v} km to m.",
    vars: {
      v: { values: [1, 2, 3, 5] }
    },
    formula: (v) => v.v * 1000
  },

  {
    template:
      "Convert {v} g to kg.",
    vars: {
      v: { values: [500, 800, 1200, 2500] }
    },
    formula: (v) => v.v / 1000
  },

  {
    template:
      "Convert {v} kg to g.",
    vars: {
      v: { values: [1, 2, 3, 5] }
    },
    formula: (v) => v.v * 1000
  },

  {
    template:
      "Convert {v} minutes to seconds.",
    vars: {
      v: { values: [1, 2, 5, 10] }
    },
    formula: (v) => v.v * 60
  },

  {
    template:
      "Convert {v} hours to minutes.",
    vars: {
      v: { values: [1, 2, 3, 5] }
    },
    formula: (v) => v.v * 60
  },

  {
    template:
      "Convert {v} m/s to km/h.",
    vars: {
      v: { values: [5, 10, 15] }
    },
    formula: (v) => v.v * 3.6
  },

  {
    template:
      "Convert {v} km/h to m/s.",
    vars: {
      v: { values: [18, 36, 72] }
    },
    formula: (v) => v.v / 3.6
  },

  {
    template:
      "A length is {k} times larger. How does the area change?",
    vars: {
      k: { values: [2, 3, 4] }
    },
    formula: (v) => v.k ** 2
  },

    {
    template:
      "Convert {v} L to cm^3.",
    vars: {
      v: { values: [1, 2, 5, 10] }
    },
    formula: (v) => v.v * 1000
  },

  {
    template:
      "Convert {v} cm^3 to L.",
    vars: {
      v: { values: [500, 1000, 2500, 5000] }
    },
    formula: (v) => v.v / 1000
  },

  {
    template:
      "Convert {v} m^3 to L.",
    vars: {
      v: { values: [1, 2, 3] }
    },
    formula: (v) => v.v * 1000
  },

  {
    template:
      "Convert {v} L to m^3.",
    vars: {
      v: { values: [500, 1000, 2000] }
    },
    formula: (v) => v.v / 1000
  },

    {
    template:
      "Convert {v} Wh to J.",
    vars: {
      v: { values: [1, 2, 5, 10] }
    },
    formula: (v) => v.v * 3600
  },

  {
    template:
      "Convert {v} J to Wh.",
    vars: {
      v: { values: [3600, 7200, 18000] }
    },
    formula: (v) => v.v / 3600
  },

  {
  template:
    "Convert {v} rpm to Hz.",
  vars: {
    v: { values: [60, 120, 300, 600] }
  },
  formula: (v) => v.v / 60
  },

  {
  template:
    "Convert {v} Hz to rpm.",
  vars: {
    v: { values: [1, 2, 5, 10] }
  },
  formula: (v) => v.v * 60
  },

  {
  template:
    "Convert {v} PS to watts.",
  vars: {
    v: { values: [1, 5, 10, 50] }
  },
  formula: (v) => v.v * 735.5
  },

  {
  template:
    "Convert {v} watts to PS.",
  vars: {
    v: { values: [735.5, 1471, 3677.5] }
  },
  formula: (v) => v.v / 735.5
  },

  {
  template:
    "Convert {v} hp to watts.",
  vars: {
    v: { values: [1, 5, 10] }
  },
  formula: (v) => v.v * 746
  }, 

  {
  template:
    "Convert torque {T} N·m at {n} rpm to power in kW. (Use P = τn / 9550)",
  vars: {
    T: { values: [10, 20, 40] },
    n: { values: [955, 1910] }
  },
  formula: (v) => (v.T * v.n) / 9550
  },

  {
  template:
    "Convert power {P} kW at {n} rpm to torque in N·m. (Use τ = 9550P / n)",
  vars: {
    P: { values: [1, 2, 4] },
    n: { values: [955, 1910] }
  },
  formula: (v) => (9550 * v.P) / v.n
  },

  {
  template:
    "Convert power {P} kW and torque {T} N·m to rotational speed in rpm. (Use n = 9550P / τ)",
  vars: {
    P: { values: [1, 2, 3] },
    T: { values: [10, 20, 30] }
  },
  formula: (v) => (9550 * v.P) / v.T
  },

  {
  template:
    "At constant torque, if rotational speed doubles, how does the power change?",
  vars: {},
  formula: () => 2
  },

  {
  template:
    "Convert {P} kW to metric horsepower (PS). (1 PS ≈ 0.736 kW)",
  vars: {
    P: { values: [1, 2, 5] }
  },
  formula: (v) => v.P / 0.736
  },

  {
  template:
    "Convert {H} metric horsepower (PS) to kW. (1 PS ≈ 0.736 kW)",
  vars: {
    H: { values: [10, 20, 50] }
  },
  formula: (v) => v.H * 0.736
  },

  {
  template:
    "Convert torque {T} N·m at {n} rpm to metric horsepower (PS). (Use P = τn / 7020)",
  vars: {
    T: { values: [10, 20] },
    n: { values: [1400, 2800] }
  },
  formula: (v) => (v.T * v.n) / 7020
  },


];
