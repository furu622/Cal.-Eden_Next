// infinityData/circuits.js
// Level∞ 問題データ - 回路・電力 (Circuits / Electricity)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

window.infinityProblems.circuits = [
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

    {
        template: "Two resistors of {R1} Ω and {R2} Ω are connected in series. Find the equivalent resistance.",
        vars: {
            R1: { min: 5, max: 50, step: 5 },
            R2: { min: 5, max: 50, step: 5 }
        },
        formula: (v) => v.R1 + v.R2
    },

    {
        template: "Two resistors of {R1} Ω and {R2} Ω are connected in parallel. Find the equivalent resistance.",
        vars: {
            R1: { values: [10, 20, 30, 40] },
            R2: { values: [10, 20, 30, 40] }
        },
        formula: (v) => (v.R1 * v.R2) / (v.R1 + v.R2)
    },

    {
        template: "Two resistors of {R1} Ω and {R2} Ω are connected in series to a {V} V source. Find the current.",
        vars: {
            R1: { min: 5, max: 30, step: 5 },
            R2: { min: 5, max: 30, step: 5 },
            V: { min: 20, max: 100, step: 10 }
        },
        formula: (v) => v.V / (v.R1 + v.R2)
    },

    {
        template: "Two resistors of {R1} Ω and {R2} Ω are connected in series to a {V} V source. Find the current.",
        vars: {
            R1: { min: 5, max: 30, step: 5 },
            R2: { min: 5, max: 30, step: 5 },
            V: { min: 20, max: 100, step: 10 }
        },
        formula: (v) => v.V / (v.R1 + v.R2)
    },

    {
        template: "Two resistors of {R1} Ω and {R2} Ω are connected in parallel to a {V} V source. Find the total current.",
        vars: {
            R1: { values: [10, 20, 30, 40] },
            R2: { values: [10, 20, 30, 40] },
            V: { min: 20, max: 100, step: 10 }
        },
        formula: (v) => v.V / ((v.R1 * v.R2) / (v.R1 + v.R2))
    },

    {
        template: "Two resistors of {R1} Ω and {R2} Ω are in series across {V} V. Find the voltage across R2.",
        vars: {
            R1: { min: 5, max: 30, step: 5 },
            R2: { min: 5, max: 30, step: 5 },
            V: { min: 20, max: 100, step: 10 }
        },
        formula: (v) => v.V * v.R2 / (v.R1 + v.R2)
    },

    {
        template: "R1 = {R1} Ω and R2 = {R2} Ω are connected in series. This combination is connected in parallel with R3 = {R3} Ω. Find the equivalent resistance.",
        vars: {
            R1: { values: [10, 20, 30] },
            R2: { values: [10, 20, 30] },
            R3: { values: [10, 20, 30] }
        },
        formula: (v) => ((v.R1 + v.R2) * v.R3) / (v.R1 + v.R2 + v.R3)
    },

    {
        template: "R1 = {R1} Ω and R2 = {R2} Ω are connected in parallel. This combination is connected in series with R3 = {R3} Ω. Find the equivalent resistance.",
        vars: {
            R1: { values: [10, 20, 30] },
            R2: { values: [10, 20, 30] },
            R3: { values: [10, 20, 30] }
        },
        formula: (v) => ((v.R1 * v.R2) / (v.R1 + v.R2)) + v.R3
    },

    {
        template: "R1 = {R1} Ω and R2 = {R2} Ω are in series across a {V} V source. Find the current flowing.",
        vars: {
            R1: { values: [10, 20, 30] },
            R2: { values: [10, 20, 30] },
            V: { values: [40, 60, 80] }
        },
        formula: (v) => v.V / (v.R1 + v.R2)
    },

    {
        template: "R1 = {R1} Ω and R2 = {R2} Ω are connected in parallel across a {V} V source. Find the total current.",
        vars: {
            R1: { values: [10, 20, 30] },
            R2: { values: [10, 20, 30] },
            V: { values: [40, 60, 80] }
        },
        formula: (v) => v.V / ((v.R1 * v.R2) / (v.R1 + v.R2))
    },

    {
        template: "R1 = {R1} Ω and R2 = {R2} Ω are in series across {V} V. Find the voltage across R2.",
        vars: {
            R1: { values: [10, 20, 30] },
            R2: { values: [10, 20, 30] },
            V: { values: [60, 90] }
        },
        formula: (v) => v.V * v.R2 / (v.R1 + v.R2)
    },

    {
        template: "R1 = {R1} Ω and R2 = {R2} Ω are in parallel with a total current of {I} A. Find the current through R1.",
        vars: {
            R1: { values: [10, 20, 30] },
            R2: { values: [10, 20, 30] },
            I: { values: [6, 9, 12] }
        },
        formula: (v) => v.I * v.R2 / (v.R1 + v.R2)
    },


];