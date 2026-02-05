/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

// infinityData/ratios.js
// Level∞ 問題データ - 比・割合 (Ratios & Percentages)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

window.infinityProblems.ratios = [

    // --- Basic Ratios ---

    {
        template: "The ratio of A to B is {a}:{b}. If A = {A} units, find B.",
        vars: {
            a: { min: 1, max: 5 },
            b: { min: 2, max: 8 },
            A: { min: 10, max: 50, step: 5 }
        },
        formula: (v) => v.A * v.b / v.a
    },

    {
        template: "The ratio of boys to girls is {b}:{g}. If there are {total} students in total, find the number of boys.",
        vars: {
            b: { min: 2, max: 5 },
            g: { min: 3, max: 6 },
            total: { min: 20, max: 60, step: 5 }
        },
        formula: (v) => v.total * v.b / (v.b + v.g)
    },

    {
        template: "The ratio of red balls to blue balls is {r}:{b}. Find the fraction of red balls.",
        vars: {
            r: { min: 1, max: 5 },
            b: { min: 2, max: 6 }
        },
        formula: (v) => v.r / (v.r + v.b)
    },

    // --- Percentages ---

    {
        template: "{p}% of a number is {x}. Find the original number.",
        vars: {
            p: { min: 10, max: 80, step: 10 },
            x: { min: 20, max: 200, step: 20 }
        },
        formula: (v) => v.x * 100 / v.p
    },

    {
        template: "A price of {P} yen is increased by {r}%. Find the new price.",
        vars: {
            P: { min: 500, max: 5000, step: 500 },
            r: { min: 5, max: 30, step: 5 }
        },
        formula: (v) => v.P * (1 + v.r / 100)
    },

    {
        template: "A price of {P} yen is discounted by {r}%. Find the discounted price.",
        vars: {
            P: { min: 500, max: 5000, step: 500 },
            r: { min: 5, max: 50, step: 5 }
        },
        formula: (v) => v.P * (1 - v.r / 100)
    },

    // --- Mixing & Concentration ---

    {
        template: "A solution contains {p}% salt. How much salt (g) is in {m} g of solution?",
        vars: {
            p: { min: 5, max: 30, step: 5 },
            m: { min: 100, max: 500, step: 50 }
        },
        formula: (v) => v.m * v.p / 100
    },

    {
        template: "{m1} g of a {p1}% solution is mixed with {m2} g of a {p2}% solution. Find the percentage concentration of the mixture.",
        vars: {
            m1: { min: 100, max: 400, step: 50 },
            p1: { min: 5, max: 20, step: 5 },
            m2: { min: 100, max: 400, step: 50 },
            p2: { min: 20, max: 40, step: 5 }
        },
        formula: (v) => ((v.m1 * v.p1 + v.m2 * v.p2) / (v.m1 + v.m2))
    },

    // --- Sharing & Division ---

    {
        template: "{T} yen is divided between A and B in the ratio {a}:{b}. Find A's share.",
        vars: {
            T: { min: 600, max: 3000, step: 300 },
            a: { min: 1, max: 4 },
            b: { min: 2, max: 6 }
        },
        formula: (v) => v.T * v.a / (v.a + v.b)
    },

    {
        template: "{T} yen is divided among A, B, and C in the ratio {a}:{b}:{c}. Find C's share.",
        vars: {
            T: { min: 900, max: 4500, step: 300 },
            a: { min: 1, max: 3 },
            b: { min: 2, max: 4 },
            c: { min: 3, max: 5 }
        },
        formula: (v) => v.T * v.c / (v.a + v.b + v.c)
    }

];
