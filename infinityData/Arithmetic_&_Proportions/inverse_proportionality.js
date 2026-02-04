// infinityData/inverse_proportionality.js
// Level∞ 問題データ - 反比例 (Inverse Proportionality)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

window.infinityProblems.inverse_proportionality = [

    {
        template: "y is inversely proportional to x. If y = {y1} when x = {x1}, find y when x = {x2}.",
        vars: {
            x1: { min: 2, max: 8 },
            y1: { min: 12, max: 96 },
            x2: { min: 4, max: 20 }
        },
        formula: (v) => v.y1 * v.x1 / v.x2
    },

    {
        template: "y is inversely proportional to x. If x doubles, how does y change?",
        vars: {
            x1: { values: [2, 3, 4] }
        },
        formula: (v) => 1 / 2
    },

    {
        template: "y is inversely proportional to x. If x becomes {k} times larger, how does y change?",
        vars: {
            k: { values: [2, 3, 4, 5] }
        },
        formula: (v) => 1 / v.k
    },

    {
        template: "y is inversely proportional to x. When x = {x1}, y = {y1}. Find the constant of proportionality.",
        vars: {
            x1: { min: 2, max: 10 },
            y1: { min: 10, max: 100 }
        },
        formula: (v) => v.x1 * v.y1
    },

    {
        template: "The time taken to complete a job is inversely proportional to the number of workers. If {w1} workers take {t1} hours, how long will {w2} workers take?",
        vars: {
            w1: { min: 2, max: 8 },
            t1: { min: 4, max: 20 },
            w2: { min: 4, max: 16 }
        },
        formula: (v) => v.t1 * v.w1 / v.w2
    },

    {
        template: "The time to finish a task is inversely proportional to the working speed. If the speed increases from {s1} to {s2}, how does the time change?",
        vars: {
            s1: { values: [1, 2, 3] },
            s2: { values: [2, 4, 6] }
        },
        formula: (v) => v.s1 / v.s2
    },

    {
        template: "Gas pressure is inversely proportional to volume (Boyle's law). If the pressure is {P1} kPa at volume {V1} L, find the pressure at volume {V2} L.",
        vars: {
            P1: { min: 100, max: 300 },
            V1: { min: 2, max: 10 },
            V2: { min: 4, max: 20 }
        },
        formula: (v) => v.P1 * v.V1 / v.V2
    },

    {
        template: "The intensity of light is inversely proportional to the square of the distance. If the intensity is {I1} units at distance {d1} m, find the intensity at distance {d2} m.",
        vars: {
            I1: { min: 100, max: 400 },
            d1: { min: 1, max: 4 },
            d2: { min: 2, max: 8 }
        },
        formula: (v) => v.I1 * (v.d1 * v.d1) / (v.d2 * v.d2)
    },

    {
        template: "The time taken to travel a fixed distance is inversely proportional to the speed. If the speed is {v1} km/h, the time is {t1} hours. Find the time when the speed is {v2} km/h.",
        vars: {
            v1: { min: 30, max: 60 },
            t1: { min: 2, max: 6 },
            v2: { min: 60, max: 120 }
        },
        formula: (v) => v.t1 * v.v1 / v.v2
    },

    {
        template: "The number of days needed to finish a job is inversely proportional to the number of machines used. If {m1} machines take {d1} days, how many days will {m2} machines take?",
        vars: {
            m1: { min: 2, max: 6 },
            d1: { min: 10, max: 30 },
            m2: { min: 3, max: 12 }
        },
        formula: (v) => v.d1 * v.m1 / v.m2
    },

];
