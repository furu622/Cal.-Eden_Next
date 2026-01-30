// infinityData.js
// Level∞ 問題データ（カテゴリー別）

window.infinityProblems = {
  // ===== 力学 (Mechanics) =====
  mechanics: [
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

  ],


  // ===== 電磁気学 (Electromagnetism) =====
  electromagnetism: [
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
        c: { min: 20, max: 40, step: 5 }
      },
      formula: (v) => (v.P / 1000) * v.t * v.c
    },

    {
      template: "A {P} W appliance runs for {t} hours every day. Electricity costs {c} yen per kWh. Find the daily cost.",
      vars: {
        P: { min: 200, max: 1500, step: 100 },
        t: { min: 2, max: 12 },
        c: { min: 20, max: 40, step: 5 }
      },
      formula: (v) => (v.P / 1000) * v.t * v.c
    },

    {
      template: "A {P} W appliance runs for {t} hours every day. Electricity costs {c} yen per kWh. Find the monthly cost (30 days).",
      vars: {
        P: { min: 200, max: 1500, step: 100 },
        t: { min: 2, max: 12 },
        c: { min: 20, max: 40, step: 5 }
      },
      formula: (v) => (v.P / 1000) * v.t * 30 * v.c
    },

    {
      template: "An appliance consumes {E} kWh of energy. Electricity costs {c} yen per kWh. Find the total cost.",
      vars: {
        E: { min: 5, max: 50 },
        c: { min: 20, max: 40, step: 5 }
      },
      formula: (v) => v.E * v.c
    },

    {
      template: "An appliance costs {cost} yen to run for {t} hours. Electricity costs {c} yen per kWh. Find its power rating in watts.",
      vars: {
        cost: { min: 100, max: 1000, step: 50 },
        t: { min: 2, max: 10 },
        c: { min: 20, max: 40, step: 5 }
      },
      formula: (v) => (v.cost / (v.t * v.c)) * 1000
    },


  ],

  // ===== 熱力学 (Thermodynamics) =====
  thermodynamics: [
    {
      template: "A substance with mass {m} g has a specific heat capacity of {c} J/g°C. How much heat is needed to raise its temperature by {T} °C? (Q = m × c × ΔT)",
      vars: {
        m: { min: 100, max: 500 },
        c: { min: 1, max: 5 },
        T: { min: 10, max: 50 }
      },
      formula: (v) => v.m * v.c * v.ΔT
    },

    {
      template: "A gas expands at constant pressure. Initial volume is {V1} L and final volume is {V2} L. If initial temperature is {T1} K, find the final temperature using the ideal gas law.",
      vars: {
        V1: { min: 2, max: 10 },
        V2: { min: 12, max: 30 },
        T1: { min: 273, max: 373 }
      },
      formula: (v) => v.T1 * v.V2 / v.V1
    },

    {
      template: "The internal energy of a gas increases by {U} J. If the gas does work of {W} J, find the heat absorbed using the first law of thermodynamics (Q = ΔU + W).",
      vars: {
        U: { min: 100, max: 500 },
        W: { min: 50, max: 300 }
      },
      formula: (v) => v.U + v.W
    },

    {
      template: "Water with mass {m} kg at {T1} °C is mixed with water of mass {m2} kg at {T2} °C. Find the final equilibrium temperature (ignoring heat loss).",
      vars: {
        m: { min: 1, max: 3 },
        T1: { min: 20, max: 40, step: 5 },
        m2: { min: 1, max: 3 },
        T2: { min: 60, max: 80, step: 5 }
      },
      formula: (v) => (v.m * v.T1 + v.m2 * v.T2) / (v.m + v.m2)
    },

  ],

  // ===== 燃焼工学 (Combustion Engineering) =====
  combustion: [
    {
      template: "A fuel with calorific value of {HV} MJ/kg is burned with mass {m} kg. Calculate the total heat released.",
      vars: {
        HV: { min: 20, max: 50 },
        m: { min: 1, max: 10 }
      },
      formula: (v) => v.HV * v.m
    },

    {
        template: "Complete combustion of {n} moles of methane (CH₄) requires {O2_required} moles of O₂. If {O2_actual} moles of O₂ is supplied, find the excess oxygen percentage.",
        vars: {
          n: { min: 1, max: 5 },
          O2_actual: { min: 10, max: 60 }
        },
        extraVars: (v) => ({
          O2_required: v.n * 2
        }),
        formula: (v) => (v.O2_actual - v.O2_required) / v.O2_required * 100
    },

    {
      template: "A burner produces {Q} MJ of heat and operates for {t} hours. Calculate the average power output in kW (1 MJ/h = 0.278 kW).",
      vars: {
        Q: { min: 50, max: 200 },
        t: { min: 2, max: 8 }
      },
      formula: (v) => (v.Q / v.t) * 0.278
    },

    {
      template: "The combustion efficiency of a boiler is {n}%. If the heat released is {Q} MJ, calculate the useful heat output.",
      vars: {
        n: { min: 80, max: 100 },
        Q: { min: 10, max: 100 }
      },
      formula: (v) => v.Q * v.n / 100
    },

    {
      template: "A fuel mixture contains {m1} kg of fuel A (HV = {HV1} MJ/kg) and {m2} kg of fuel B (HV = {HV2} MJ/kg). Calculate the total heat released.",
      vars: {
        m1: { min: 1, max: 5 },
        HV1: { min: 30, max: 50 },
        m2: { min: 1, max: 5 },
        HV2: { min: 20, max: 40 }
      },
      formula: (v) => v.m1 * v.HV1 + v.m2 * v.HV2
    },


  ]
};
