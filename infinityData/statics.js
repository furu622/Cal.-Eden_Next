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

    {
        template: "Two forces act on a lever in the same direction. Forces {F1} N at {r1} m and {F2} N at {r2} m. Find the total torque about the pivot.",
        vars: {
            F1: { min: 10, max: 50 },
            r1: { min: 1, max: 6 },
            F2: { min: 10, max: 50 },
            r2: { min: 1, max: 6 }
        },
        formula: (v) => v.F1 * v.r1 + v.F2 * v.r2
    },

    {
        template: "Two forces act in opposite directions on a lever. {F1} N at {r1} m and {F2} N at {r2} m. Find the net torque.",
        vars: {
            F1: { min: 20, max: 80 },
            r1: { min: 1, max: 6 },
            F2: { min: 10, max: 50 },
            r2: { min: 1, max: 6 }
        },
        formula: (v) => v.F1 * v.r1 - v.F2 * v.r2
    },

    {
        template: "A uniform rod of length {L} m has a weight of {W} N acting at its center. Find the torque about one end.",
        vars: {
            L: { min: 2, max: 10 },
            W: { min: 20, max: 100, step: 10 }
        },
        formula: (v) => v.W * (v.L / 2)
    },

    {
        template: "A beam is supported at one end. A weight of {W} N is placed {r} m from the support. Find the reaction torque at the support.",
        vars: {
            W: { min: 20, max: 100, step: 10 },
            r: { min: 1, max: 8 }
        },
        formula: (v) => v.W * v.r
    },

    {
        template: "A weight of {W} N is placed on a beam of length {L} m. At what distance from the pivot should it be placed to produce a torque of {T} N·m?",
        vars: {
            W: { min: 10, max: 50 },
            L: { min: 2, max: 10 },
            T: { min: 20, max: 200, step: 20 }
        },
        formula: (v) => v.T / v.W
    },

    {
        template: "A beam is in equilibrium. A force of {F} N acts at {r} m. What force is needed at 1 m on the opposite side to balance it?",
        vars: {
            F: { min: 20, max: 80 },
            r: { min: 2, max: 6 }
        },
        formula: (v) => v.F * v.r
    },

    {
        template: "Two weights {W1} N and {W2} N are placed at distances {r1} m and {r2} m from the pivot on opposite sides. Find the net torque.",
        vars: {
            W1: { min: 20, max: 80 },
            r1: { min: 1, max: 6 },
            W2: { min: 20, max: 80 },
            r2: { min: 1, max: 6 }
        },
        formula: (v) => v.W1 * v.r1 - v.W2 * v.r2
    },

        {
        template: "A beam of length {L} m is supported at both ends. A weight of {W} N is placed {x} m from the left support. Find the reaction force at the right support.",
        vars: {
            L: { min: 4, max: 10, step: 2 },
            W: { min: 20, max: 100, step: 10 },
            x: { min: 1, max: 8 }
        },
        formula: (v) => (v.W * v.x) / v.L
    },

    {
        template: "A beam of length {L} m is supported at both ends. A weight of {W} N is placed {x} m from the left support. Find the reaction force at the left support.",
        vars: {
            L: { min: 4, max: 10, step: 2 },
            W: { min: 20, max: 100, step: 10 },
            x: { min: 1, max: 8 }
        },
        formula: (v) => v.W - (v.W * v.x) / v.L
    },

    {
        template: "A beam of length {L} m has two weights: {W1} N at {x1} m and {W2} N at {x2} m from the left support. Find the reaction at the right support.",
        vars: {
            L: { min: 6, max: 12, step: 2 },
            W1: { min: 20, max: 80, step: 10 },
            x1: { min: 1, max: 5 },
            W2: { min: 20, max: 80, step: 10 },
            x2: { min: 6, max: 10 }
        },
        formula: (v) => (v.W1 * v.x1 + v.W2 * v.x2) / v.L
    },

    {
        template: "A beam is supported at both ends. A weight of {W} N is placed at an unknown position. If the reaction at the right support is {R} N and the beam length is {L} m, find the position of the weight from the left support.",
        vars: {
            W: { min: 40, max: 100, step: 10 },
            R: { min: 10, max: 60, step: 10 },
            L: { min: 4, max: 10, step: 2 }
        },
        formula: (v) => (v.R * v.L) / v.W
    },

    {
        template: "A beam of length {L} m is supported at both ends. The reaction forces at the supports are {R1} N and {R2} N. Find the weight placed on the beam.",
        vars: {
            R1: { min: 20, max: 80, step: 10 },
            R2: { min: 20, max: 80, step: 10 },
            L: { min: 4, max: 10, step: 2 }
        },
        formula: (v) => v.R1 + v.R2
    },

    {
        template: "A beam of length {L} m is supported at both ends. A weight is placed such that the reactions at both supports are equal. Where is the weight placed?",
        vars: {
            L: { min: 4, max: 12, step: 2 }
        },
        formula: (v) => v.L / 2
    },


];

window.infinityProblems.statics = statics;
