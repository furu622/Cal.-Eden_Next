// infinityData/statics.js
// Level∞ 問題データ - 力学 - 静力学 (Statics)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

const statics = [
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
];
