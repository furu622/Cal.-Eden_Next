// infinityData/machines.js
// Level∞ 問題データ - 力学 - 機械 (Machines)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

const machines = [

    // --- Motor power, torque, speed conversions ---

    {
        template: "A motor delivers {P} kW at {N} rpm. Estimate the torque in N·m. (Use an engineering approximation: 9550 ≈ 10000 for easy mental math)",
        vars: {
            P: { min: 2, max: 20, step: 2 },
            N: { min: 500, max: 2000, step: 500 }
        },
        formula: (v) => (10000 * v.P) / v.N
    },


    {
        template: "A motor produces {T} N·m torque at {N} rpm. Estimate the power in kW. (Use an engineering approximation: 9550 ≈ 10000 for easy mental math)",

        vars: {
            T: { min: 20, max: 200, step: 20 },
            N: { min: 500, max: 2000, step: 500 }
        },
        formula: (v) => (v.T * v.N) / 10000
    },


    {
        template: "A motor delivers {P} kW with torque {T} N·m. Estimate the rotational speed in rpm. (Use an engineering approximation: 9550 ≈ 10000 for easy mental math)",

        vars: {
            P: { min: 2, max: 20, step: 2 },
            T: { min: 20, max: 200, step: 20 }
        },
        formula: (v) => (10000 * v.P) / v.T
    },


    {
        template: "A motor runs at constant power. If the rotational speed becomes {k} times larger, by what factor does the torque change?",
        vars: {
            k: { min: 2, max: 5 }
        },
        formula: (v) => 1 / v.k
    },

    {
        template: "A motor runs at constant power. If the torque becomes {k} times larger, by what factor does the rotational speed change?",
        vars: {
            k: { min: 2, max: 5 }
        },
        formula: (v) => 1 / v.k
    },

    {
        template: "A motor runs at constant power. If the rotational speed is reduced to 1/{k}, by what factor does the torque change?",
        vars: {
            k: { min: 2, max: 5 }
        },
        formula: (v) => v.k
    },

    // --- Gear ratio (teeth) ---

    {
        template: "Gear A has {z1} teeth and rotates at {N} rpm. Gear B has {z2} teeth. Estimate B's speed in rpm.",
        vars: {
            z1: { min: 10, max: 40, step: 10 },
            z2: { min: 20, max: 80, step: 20 },
            N: { min: 600, max: 1800, step: 600 }
        },
        formula: (v) => (v.N * v.z1) / v.z2
    },

    // --- Gear: find driving speed ---

    {
        template: "Gear A has {z1} teeth and Gear B has {z2} teeth. If B rotates at {N2} rpm, estimate A's speed in rpm.",
        vars: {
            z1: { min: 10, max: 40, step: 10 },
            z2: { min: 20, max: 80, step: 20 },
            N2: { min: 300, max: 900, step: 300 }
        },
        formula: (v) => (v.N2 * v.z2) / v.z1
    },

    // --- Gear: find teeth count ---

    {
        template: "Gear A rotates at {N1} rpm and drives Gear B at {N2} rpm. If A has {z1} teeth, estimate the number of teeth on B.",
        vars: {
            N1: { min: 600, max: 1800, step: 600 },
            N2: { min: 300, max: 900, step: 300 },
            z1: { min: 10, max: 40, step: 10 }
        },
        formula: (v) => (v.z1 * v.N1) / v.N2
    },


    // --- Pulley diameter ratio ---

    {
        template: "Pulley A diameter is {D1} mm and rotates at {N} rpm. Pulley B diameter is {D2} mm. Estimate B's speed in rpm.",
        vars: {
            D1: { min: 100, max: 300, step: 100 },
            D2: { min: 200, max: 600, step: 200 },
            N: { min: 600, max: 1800, step: 600 }
        },
        formula: (v) => (v.N * v.D1) / v.D2
    },

    // --- Pulley: find driving speed ---

    {
        template: "Pulley A diameter {D1} mm drives Pulley B diameter {D2} mm. If B rotates at {N2} rpm, estimate A's speed.",
        vars: {
            D1: { min: 100, max: 300, step: 100 },
            D2: { min: 200, max: 600, step: 200 },
            N2: { min: 300, max: 900, step: 300 }
        },
        formula: (v) => (v.N2 * v.D2) / v.D1
    },

    // --- Pulley: find diameter ---

    {
        template: "Pulley A rotates at {N1} rpm and drives Pulley B at {N2} rpm. If A diameter is {D1} mm, estimate B's diameter.",
        vars: {
            N1: { min: 600, max: 1800, step: 600 },
            N2: { min: 300, max: 900, step: 300 },
            D1: { min: 100, max: 300, step: 100 }
        },
        formula: (v) => (v.D1 * v.N1) / v.N2
    },


    // --- Drum linear speed (rotation → linear) ---

    {
        template: "A drum of radius {r} m rotates at {N} rpm. Estimate the lifting speed in m/s. (Use π≈3)",
        vars: {
            r: { min: 1, max: 3, step: 1 },
            N: { min: 30, max: 90, step: 30 }
        },
        formula: (v) => (2 * 3 * v.r * v.N) / 60
    },

    // --- Drum: find rpm from lifting speed ---

    {
        template: "A drum of radius {r} m lifts at {v} m/s. Estimate the rotational speed in rpm. (Use π≈3)",
        vars: {
            r: { min: 1, max: 3, step: 1 },
            v: { min: 1, max: 3, step: 1 }
        },
        formula: (v) => (60 * v.v) / (2 * 3 * v.r)
    },


    // --- Required torque to lift load ---

    {
        template: "A drum of radius {r} m lifts a load of {W} N. Estimate the required torque in N·m.",
        vars: {
            r: { min: 1, max: 3, step: 1 },
            W: { min: 200, max: 600, step: 200 }
        },
        formula: (v) => v.W * v.r
    },

    // --- Load from torque (already gave reverse earlier, this is pair) ---

    {
        template: "A drum lifts {W} N using radius {r} m. Estimate required torque in N·m.",
        vars: {
            W: { min: 200, max: 600, step: 200 },
            r: { min: 1, max: 3, step: 1 }
        },
        formula: (v) => v.W * v.r
    },


    // --- Power needed to lift load ---

    {
        template: "A load of {W} N is lifted at {v} m/s. Estimate the required power in kW.",
        vars: {
            W: { min: 200, max: 600, step: 200 },
            v: { min: 1, max: 3, step: 1 }
        },
        formula: (v) => (v.W * v.v) / 1000
    },

    // --- Find lifting speed from power ---

    {
        template: "A motor provides {P} kW to lift a {W} N load. Estimate the lifting speed in m/s.",
        vars: {
            P: { min: 1, max: 5, step: 1 },
            W: { min: 200, max: 600, step: 200 }
        },
        formula: (v) => (v.P * 1000) / v.W
    },

    // --- Find load from power and speed ---

    {
        template: "A motor provides {P} kW and lifts at {v} m/s. Estimate the load in N.",
        vars: {
            P: { min: 1, max: 5, step: 1 },
            v: { min: 1, max: 3, step: 1 }
        },
        formula: (v) => (v.P * 1000) / v.v
    },


    // --- From motor rpm to lifting speed through drum ---

    {
        template: "A motor rotates a drum of radius {r} m at {N} rpm. Estimate the lifting speed in m/s. (Use π≈3)",
        vars: {
            r: { min: 1, max: 2, step: 1 },
            N: { min: 60, max: 180, step: 60 }
        },
        formula: (v) => (2 * 3 * v.r * v.N) / 60
    },

    // --- From torque to lifted load ---

    {
        template: "A drum of radius {r} m is driven with torque {T} N·m. Estimate the maximum load it can lift in N.",
        vars: {
            r: { min: 1, max: 3, step: 1 },
            T: { min: 200, max: 600, step: 200 }
        },
        formula: (v) => v.T / v.r
    },

    // --- Gear + drum combination (very mechanical) ---

    {
        template: "A motor at {N} rpm drives a gear with {z1} teeth connected to a gear with {z2} teeth attached to a drum of radius {r} m. Estimate the lifting speed in m/s. (Use π≈3)",
        vars: {
            N: { min: 600, max: 1200, step: 600 },
            z1: { min: 10, max: 30, step: 10 },
            z2: { min: 30, max: 90, step: 30 },
            r: { min: 1, max: 2, step: 1 }
        },
        formula: (v) => ((v.N * v.z1 / v.z2) * 2 * 3 * v.r) / 60
    },


];


window.infinityProblems.machines = machines;
