// infinityData/rotational.js
// Level∞ 問題データ - 力学 - 回転運動 (Rotational Motion)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

const rotational = [
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
];


window.infinityProblems.rotational = rotational;
