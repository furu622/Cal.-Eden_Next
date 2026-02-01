// infinityData/electromagnetism.js
// Level∞ 問題データ - 電磁気学 (Electromagnetism) 物理スケール最適化版

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

window.infinityProblems.electromagnetism = [

    // --- Work & Lorentz ---
    {
        template: "An electric charge of {q} C moves through a potential difference of {V} V. Calculate the work done.",
        vars: { q: { min: 2, max: 10 }, V: { min: 10, max: 100 } },
        formula: (v) => v.q * v.V
    },

    {
        template: "A magnetic field of {B} T exerts a force on a current-carrying wire. If current is {I} A and length is {l} m, find the force (F = B × I × l).",
        vars: { B: { min: 1, max: 5 }, I: { min: 2, max: 8 }, l: { min: 5, max: 20 } },
        formula: (v) => v.B * v.I * v.l
    },

    {
        template: "A charge of {q} C moves at a velocity of {v} m/s perpendicular to a magnetic field of {B} T. Calculate the Lorentz force (F = q × v × B).",
        vars: { q: { min: 1, max: 5 }, v: { min: 2, max: 10 }, B: { min: 1, max: 5 } },
        formula: (v) => v.q * v.v * v.B
    },

    // --- Coulomb Force (μC) ---
    {
        template: "Two charges {q1} μC and {q2} μC are separated by {r} m. Find the electric force. (k = 9×10^9)",
        vars: { q1: { min: 1, max: 9 }, q2: { min: 1, max: 9 }, r: { min: 1, max: 5 } },
        formula: (v) => 9e9 * (v.q1 * 1e-6) * (v.q2 * 1e-6) / (v.r * v.r)
    },

    {
        template: "Two charges {q1} μC and {q2} μC exert a force of {F} N. Find the distance. (k = 9×10^9)",
        vars: { q1: { min: 1, max: 9 }, q2: { min: 1, max: 9 }, F: { min: 0.01, max: 0.09, step: 0.01 } },
        formula: (v) => Math.sqrt(9e9 * (v.q1 * 1e-6) * (v.q2 * 1e-6) / v.F)
    },

    // --- Electric Field (μC) ---
    {
        template: "Find the electric field at {r} m from a charge of {q} μC. (k = 9×10^9)",
        vars: { q: { min: 1, max: 9 }, r: { min: 1, max: 5 } },
        formula: (v) => 9e9 * (v.q * 1e-6) / (v.r * v.r)
    },

    {
        template: "An electric field of {E} N/C is produced by a charge {q} μC. Find the distance. (k = 9×10^9)",
        vars: { E: { min: 2000, max: 18000, step: 1000 }, q: { min: 1, max: 9 } },
        formula: (v) => Math.sqrt(9e9 * (v.q * 1e-6) / v.E)
    },

    {
        template: "An electric field of {E} N/C is measured at {r} m. Find the charge producing it (μC). (k = 9×10^9)",
        vars: { E: { min: 2000, max: 18000, step: 1000 }, r: { min: 1, max: 5 } },
        formula: (v) => (v.E * v.r * v.r) / 9e9 * 1e6
    },

    // --- Electric Potential (μC) ---
    {
        template: "Find the electric potential at {r} m from a charge of {q} μC. (k = 9×10^9)",
        vars: { q: { min: 1, max: 9 }, r: { min: 1, max: 5 } },
        formula: (v) => 9e9 * (v.q * 1e-6) / v.r
    },

    {
        template: "The electric potential is {V} V due to a charge {q} μC. Find the distance. (k = 9×10^9)",
        vars: { V: { min: 2000, max: 18000, step: 1000 }, q: { min: 1, max: 9 } },
        formula: (v) => 9e9 * (v.q * 1e-6) / v.V
    },

    {
        template: "The electric potential at {r} m is {V} V. Find the charge (μC). (k = 9×10^9)",
        vars: { r: { min: 1, max: 5 }, V: { min: 2000, max: 18000, step: 1000 } },
        formula: (v) => (v.V * v.r) / 9e9 * 1e6
    },

    // --- Force in Electric Field ---
    {
        template: "A charge of {q} C is placed in an electric field of {E} N/C. Find the force on it.",
        vars: { q: { min: 1, max: 5 }, E: { min: 10, max: 100 } },
        formula: (v) => v.q * v.E
    },

    // --- Capacitor ---
    {
        template: "A capacitor holds {Q} C of charge at a voltage of {V} V. Find the capacitance.",
        vars: { Q: { min: 1, max: 10 }, V: { min: 10, max: 100 } },
        formula: (v) => v.Q / v.V
    },

    {
        template: "A capacitor of {C} F holds charge {Q} C. Find the voltage.",
        vars: { C: { min: 1, max: 5 }, Q: { min: 1, max: 10 } },
        formula: (v) => v.Q / v.C
    },

    {
        template: "Find the energy stored in a capacitor of {C} F charged to {V} V.",
        vars: { C: { min: 1, max: 5 }, V: { min: 10, max: 50 } },
        formula: (v) => 0.5 * v.C * v.V * v.V
    },

    // --- Ohm's Law ---
    {
        template: "A voltage of {V} V is applied across a resistor and a current of {I} A flows. Find the resistance.",
        vars: { V: { min: 10, max: 100, step: 10 }, I: { min: 1, max: 10 } },
        formula: (v) => v.V / v.I
    },

    {
        template: "A resistor has a resistance of {R} Ω and a current of {I} A flows. Find the voltage.",
        vars: { R: { min: 2, max: 20, step: 2 }, I: { min: 1, max: 10 } },
        formula: (v) => v.R * v.I
    },

    {
        template: "A resistor has a resistance of {R} Ω with a voltage of {V} V applied. Find the current.",
        vars: { R: { min: 2, max: 20, step: 2 }, V: { min: 10, max: 100, step: 10 } },
        formula: (v) => v.V / v.R
    },


    // --- Electric Power ---
    {
        template: "A device operates at {V} V with a current of {I} A. Find the power consumed.",
        vars: { V: { min: 10, max: 100, step: 10 }, I: { min: 1, max: 10 } },
        formula: (v) => v.V * v.I
    },

    {
        template: "A device consumes {P} W of power at a voltage of {V} V. Find the current.",
        vars: { P: { min: 100, max: 1000, step: 100 }, V: { min: 10, max: 100, step: 10 } },
        formula: (v) => v.P / v.V
    },

    {
        template: "A device consumes {P} W with a current of {I} A. Find the voltage.",
        vars: { P: { min: 100, max: 1000, step: 100 }, I: { min: 1, max: 10 } },
        formula: (v) => v.P / v.I
    },


    // --- Current from Charge Flow ---
    {
        template: "A charge of {Q} C passes through a conductor in {t} s. Find the current.",
        vars: { Q: { min: 10, max: 100, step: 10 }, t: { min: 1, max: 10 } },
        formula: (v) => v.Q / v.t
    },

    {
        template: "A current of {I} A flows for {t} s. Find the total charge passed.",
        vars: { I: { min: 1, max: 10 }, t: { min: 1, max: 10 } },
        formula: (v) => v.I * v.t
    },

    {
        template: "A current of {I} A flows when {Q} C of charge passes. Find the time taken.",
        vars: { I: { min: 1, max: 10 }, Q: { min: 10, max: 100, step: 10 } },
        formula: (v) => v.Q / v.I
    },


    // --- Electric Field in a Uniform Field ---
    {
        template: "A potential difference of {V} V is applied across two plates separated by {d} m. Find the electric field strength.",
        vars: { V: { min: 100, max: 500, step: 50 }, d: { min: 1, max: 5 } },
        formula: (v) => v.V / v.d
    },

    {
        template: "An electric field of {E} N/C exists between two plates separated by {d} m. Find the voltage applied.",
        vars: { E: { min: 50, max: 300, step: 50 }, d: { min: 1, max: 5 } },
        formula: (v) => v.E * v.d
    },

    {
        template: "An electric field of {E} N/C is produced by a voltage of {V} V. Find the plate separation.",
        vars: { E: { min: 50, max: 300, step: 50 }, V: { min: 100, max: 500, step: 50 } },
        formula: (v) => v.V / v.E
    },


    // --- Magnetic Flux ---
    {
        template: "A magnetic field of {B} T passes perpendicularly through an area of {A} m². Find the magnetic flux.",
        vars: { B: { min: 1, max: 5 }, A: { min: 1, max: 10 } },
        formula: (v) => v.B * v.A
    },

    {
        template: "A magnetic flux of {phi} Wb passes through an area of {A} m². Find the magnetic field strength.",
        vars: { phi: { min: 1, max: 20 }, A: { min: 1, max: 10 } },
        formula: (v) => v.phi / v.A
    },

    {
        template: "A magnetic flux of {phi} Wb is produced by a magnetic field of {B} T. Find the area.",
        vars: { phi: { min: 1, max: 20 }, B: { min: 1, max: 5 } },
        formula: (v) => v.phi / v.B
    },

    // --- Three-Phase Power ---

    {
        template: "A three-phase system has a line voltage of {V} V and line current of {I} A. Find the power. (P = √3 V I)",
        vars: {
            V: { min: 100, max: 400, step: 100 },
            I: { values: [5.77, 11.55, 17.32] }
        },
        formula: (v) => Math.round(Math.sqrt(3) * v.V * v.I)
        },
        {
        template: "A three-phase system delivers {P} W at a line voltage of {V} V. Find the line current. (P = √3 V I)",
        vars: {
            P: { min: 1000, max: 6000, step: 1000 },
            V: { min: 100, max: 400, step: 100 }
        },
        formula: (v) => v.P / (Math.sqrt(3) * v.V)
        },
        {
        template: "A three-phase system delivers {P} W with a line current of {I} A. Find the line voltage. (P = √3 V I)",
        vars: {
            P: { min: 1000, max: 6000, step: 1000 },
            I: { values: [5.77, 11.55, 17.32] }
        },
        formula: (v) => Math.round(v.P / (Math.sqrt(3) * v.I))
        },


];
