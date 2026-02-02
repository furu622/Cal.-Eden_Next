// infinityData/machines.js
// Level∞ 問題データ - 力学 - 機械 (Machines)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

const machines = [
    {
        template: "A motor delivers {P} kW at {N} rpm. Find the torque in N·m. (T = 9550P/N)",
        vars: {
            P: { min: 2, max: 20, step: 2 },
            N: { min: 500, max: 2000, step: 500 }
        },
        formula: (v) => (9550 * v.P) / v.N
    },

    {
        template: "A motor produces a torque of {T} N·m at {N} rpm. Find the power in kW. (P = TN/9550)",
        vars: {
            T: { min: 10, max: 200, step: 10 },
            N: { min: 500, max: 2000, step: 500 }
        },
        formula: (v) => (v.T * v.N) / 9550
    },

    {
        template: "A motor delivers {P} kW with torque {T} N·m. Find the rotational speed in rpm.",
        vars: {
            P: { min: 2, max: 20, step: 2 },
            T: { min: 20, max: 200, step: 20 }
        },
        formula: (v) => (9550 * v.P) / v.T
    },
];


window.infinityProblems.machines = machines;
