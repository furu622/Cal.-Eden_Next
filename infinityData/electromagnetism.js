// infinityData/electromagnetism.js
// Level∞ 問題データ - 電磁気学 (Electromagnetism)

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.electromagnetism = [
  {
    template: "A current of {I} A flows through a resistor of {R} Ω. Calculate the voltage using Ohm's law (V = I × R).",
    vars: {
      I: { min: 2, max: 10 },
      R: { min: 5, max: 50 }
    },
    formula: (v) => v.I * v.R
  },

  {
    template: "A voltage of {V} V is applied across a resistor of {R} Ω. Find the current using Ohm's law.",
    vars: {
      V: { min: 10, max: 100 },
      R: { min: 5, max: 50 }
    },
    formula: (v) => v.V / v.R
  },

  {
    template: "A wire with a resistance of {R} Ω carries a current of {I} A. Calculate the power dissipated (P = I² × R).",
    vars: {
      I: { min: 2, max: 8 },
      R: { min: 5, max: 30 }
    },
    formula: (v) => v.I * v.I * v.R
  },

  {
    template: "An electric charge of {q} C moves through a potential difference of {V} V. Calculate the work done.",
    vars: {
      q: { min: 2, max: 10 },
      V: { min: 10, max: 100 }
    },
    formula: (v) => v.q * v.V
  },

  {
    template: "A magnetic field of {B} T exerts a force on a current-carrying wire. If current is {I} A and length is {l} m, find the force (F = B × I × l).",
    vars: {
      B: { min: 1, max: 5 },
      I: { min: 2, max: 8 },
      l: { min: 5, max: 20 }
    },
    formula: (v) => v.B * v.I * v.l
  },

  {
    template: "A charge of {q} C moves at a velocity of {v} m/s perpendicular to a magnetic field of {B} T. Calculate the Lorentz force acting on it (F = q × v × B).",
    vars: {
      q: { min: 1, max: 5 },
      v: { min: 2, max: 10 },
      B: { min: 1, max: 5 }
    },
    formula: (v) => v.q * v.v * v.B
  },

  {
    template: "A particle experiences a Lorentz force of {F} N while moving at {v} m/s perpendicular to a magnetic field of {B} T. Find the charge q (F = q × v × B).",
    vars: {
      F: { min: 10, max: 100 },
      v: { min: 2, max: 10 },
      B: { min: 1, max: 5 }
    },
    formula: (v) => v.F / (v.v * v.B)
  },

  {
    template: "A charge of {q} C experiences a Lorentz force of {F} N in a magnetic field of {B} T. Find the velocity v (F = q × v × B).",
    vars: {
      q: { min: 1, max: 5 },
      F: { min: 10, max: 100 },
      B: { min: 1, max: 5 }
    },
    formula: (v) => v.F / (v.q * v.B)
  },

  {
    template: "A charge of {q} C moving at {v} m/s experiences a Lorentz force of {F} N. Find the magnetic field B (F = q × v × B).",
    vars: {
      q: { min: 1, max: 5 },
      v: { min: 2, max: 10 },
      F: { min: 10, max: 100 }
    },
    formula: (v) => v.F / (v.q * v.v)
  },

  {
    template: "A device operates at {P} W for {t} seconds. How much energy is used in joules?",
    vars: {
      P: { min: 100, max: 500 },
      t: { min: 10, max: 60 }
    },
    formula: (v) => v.P * v.t
  },

  {
    template: "A device operates at {P} W for {t} hours. How much energy is used in watt-hours (Wh)?",
    vars: {
      P: { min: 100, max: 500 },
      t: { min: 1, max: 5 }
    },
    formula: (v) => v.P * v.t
  },

  {
    template: "An appliance consumes {E} Wh of energy. Convert this to joules. (1 Wh = 3600 J)",
    vars: {
      E: { min: 50, max: 300 }
    },
    formula: (v) => v.E * 3600
  },

  {
    template: "An appliance consumes {E} kWh of energy. Convert this to joules.",
    vars: {
      E: { min: 1, max: 10 }
    },
    formula: (v) => v.E * 1000 * 3600
  },

  {
    template: "A machine uses {E} J of energy over {t} seconds. Find the power in watts.",
    vars: {
      E: { min: 1000, max: 10000 },
      t: { min: 10, max: 100 }
    },
    formula: (v) => v.E / v.t
  },

  {
    template: "An appliance with power {P} W runs for {t} hours. Electricity costs {c} yen per kWh. Find the cost in yen.",
    vars: {
      P: { min: 500, max: 2000, step: 100 },
      t: { min: 1, max: 10 },
      c: { min: 20, max: 40, step: 10 }
    },
    formula: (v) => (v.P / 1000) * v.t * v.c
  },

  {
    template: "A {P} W appliance runs for {t} hours every day. Electricity costs {c} yen per kWh. Find the daily cost.",
    vars: {
      P: { min: 200, max: 1500, step: 100 },
      t: { min: 2, max: 12 },
      c: { min: 20, max: 40, step: 10 }
    },
    formula: (v) => (v.P / 1000) * v.t * v.c
  },

  {
    template: "A {P} W appliance runs for {t} hours every day. Electricity costs {c} yen per kWh. Find the monthly cost (30 days).",
    vars: {
      P: { min: 200, max: 1500, step: 100 },
      t: { min: 2, max: 12 },
      c: { min: 20, max: 40, step: 10 }
    },
    formula: (v) => (v.P / 1000) * v.t * 30 * v.c
  },

  {
    template: "An appliance consumes {E} kWh of energy. Electricity costs {c} yen per kWh. Find the total cost.",
    vars: {
      E: { min: 5, max: 50 },
      c: { min: 20, max: 40, step: 10 }
    },
    formula: (v) => v.E * v.c
  },

  {
    template: "An appliance costs {cost} yen to run for {t} hours. Electricity costs {c} yen per kWh. Find its power rating in watts.",
    vars: {
      cost: { min: 100, max: 1000, step: 50 },
      t: { min: 2, max: 10 },
      c: { min: 20, max: 40, step: 10 }
    },
    formula: (v) => (v.cost / (v.t * v.c)) * 1000
  },
];
