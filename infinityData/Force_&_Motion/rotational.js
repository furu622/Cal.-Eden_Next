/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

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

    {
        template: "If the torque is doubled and the moment of inertia is halved, by what factor does the angular acceleration change?",
        formula: () => 4
    },

    {
        template: "If both the torque and the moment of inertia become {k} times larger, by what factor does the angular acceleration change?",
        vars: { k: { min: 2, max: 5 } },
        formula: () => 1
    },

    {
        template: "A solid disk and a ring have the same mass and radius. How many times larger is the ring's moment of inertia than the disk's?",
        formula: () => 2
    },

    {
        template: "If the radius of a rotating object is tripled while mass stays the same, by what factor does its moment of inertia change?",
        formula: () => 9
    },

    {
        template: "If mass is doubled and radius is doubled, by what factor does the moment of inertia change?",
        formula: () => 8
    },

    {
        template: "If angular acceleration becomes {k} times larger while moment of inertia stays the same, by what factor did the torque change?",
        vars: { k: { min: 2, max: 5 } },
        formula: (v) => v.k
    },

    {
        template: "If torque stays the same and moment of inertia becomes {k} times larger, by what factor does angular acceleration change?",
        vars: { k: { min: 2, max: 5 } },
        formula: (v) => 1 / v.k
    },

    {
        template: "A ring's radius is doubled. By what factor does its moment of inertia change?",
        formula: () => 4
    },
    
    {
        template: "A disk's mass is tripled while radius stays the same. By what factor does its moment of inertia change?",
        formula: () => 3
    },

];


window.infinityProblems.rotational = rotational;
