/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

// infinityData/proportionality.js
// Level∞ 問題データ - 正比例 (Direct Proportionality)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

window.infinityProblems.proportionality = [

    {
        template: "y is directly proportional to x. When x = {x1}, y = {y1}. Find y when x = {x2}.",
        vars: {
            x1: { min: 2, max: 10 },
            y1: { min: 4, max: 40 },
            x2: { min: 5, max: 20 }
        },
        formula: (v) => v.y1 * v.x2 / v.x1
    },

    {
        template: "y is directly proportional to x. Express y in terms of x when y = {y1} at x = {x1}. Then find y when x = {x2}.",
        vars: {
            x1: { min: 2, max: 8 },
            y1: { min: 6, max: 48 },
            x2: { min: 5, max: 20 }
        },
        formula: (v) => (v.y1 / v.x1) * v.x2
    },

    {
        template: "The cost is directly proportional to the weight. {w1} kg costs {c1} yen. Find the cost of {w2} kg.",
        vars: {
            w1: { min: 1, max: 5 },
            c1: { min: 200, max: 1000, step: 100 },
            w2: { min: 2, max: 10 }
        },
        formula: (v) => v.c1 * v.w2 / v.w1
    },

    {
        template: "Distance is directly proportional to time at constant speed. A car travels {d1} km in {t1} hours. How far will it travel in {t2} hours?",
        vars: {
            d1: { min: 40, max: 120, step: 10 },
            t1: { min: 1, max: 3 },
            t2: { min: 2, max: 6 }
        },
        formula: (v) => v.d1 * v.t2 / v.t1
    },

    {
        template: "Work done is directly proportional to time at constant power. A machine does {W1} J of work in {t1} seconds. How much work will it do in {t2} seconds?",
        vars: {
            W1: { min: 500, max: 2000, step: 100 },
            t1: { min: 5, max: 20 },
            t2: { min: 10, max: 60 }
        },
        formula: (v) => v.W1 * v.t2 / v.t1
    },

    {
        template: "A machine produces {P} W of power. How much work is done in {t} seconds?",
        vars: {
            P: { min: 100, max: 800, step: 100 },
            t: { min: 5, max: 60 }
        },
        formula: (v) => v.P * v.t
    },

    {
        template: "At constant speed, a cyclist travels {d1} km in {t1} hours. How long will it take to travel {d2} km?",
        vars: {
            d1: { min: 20, max: 100, step: 10 },
            t1: { min: 1, max: 4 },
            d2: { min: 40, max: 200, step: 20 }
        },
        formula: (v) => v.t1 * v.d2 / v.d1
    }

];
