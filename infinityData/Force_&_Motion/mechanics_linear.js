// infinityData/mechanics_linear.js
// Level∞ 問題データ - 力学 - 直線運動 (Linear Motion)

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

const mechanics_linear = [
    {
        template: "A force acts on a mass of {m} kg producing an acceleration of {a} m/s². Find the force.",
        vars: {
            m: { min: 2, max: 12 },
            a: { min: 2, max: 10 }
        },
        formula: (v) => v.m * v.a
    },

    {
        template: "A force of {F} N acts on a {m} kg mass. Find the acceleration.",
        vars: {
            F: { min: 20, max: 120 },
            m: { min: 2, max: 12 }
        },
        formula: (v) => v.F / v.m
    },

    {
        template: "An object with mass {m} kg moves at a velocity of {v} m/s. Calculate its kinetic energy.",
        vars: {
            m: { min: 1, max: 10 },
            v: { min: 5, max: 20 }
        },
        formula: (v) => 0.5 * v.m * v.v * v.v
    },

    {
        template: "An object is lifted to a height of {h} m with a mass of {m} kg. Find the gravitational potential energy. (g = 10 m/s²)",
        vars: {
            m: { min: 1, max: 10 },
            h: { min: 2, max: 20 }
        },
        formula: (v) => v.m * 10 * v.h
    },

    {
        template: "A force of {F} N is applied over a distance of {d} m. Calculate the work done.",
        vars: {
            F: { min: 10, max: 50 },
            d: { min: 2, max: 15 }
        },
        formula: (v) => v.F * v.d
    },

    {
        template: "A body starts from rest and accelerates at {a} m/s² for {t} seconds. Find the final velocity.",
        vars: {
            a: { min: 2, max: 10 },
            t: { min: 2, max: 10 }
        },
        formula: (v) => v.a * v.t
    },

    {
        template: "A body starts from rest and accelerates at {a} m/s² for {t} seconds. Find the distance traveled.",
        vars: {
            a: { min: 2, max: 6 },
            t: { min: 2, max: 6 }
        },
        formula: (v) => 0.5 * v.a * v.t * v.t
    },

    {
        template: "A body starts from rest and moves with an acceleration of {a} m/s² over a distance of {x} m. Find the final velocity.",
        vars: {
            a: { min: 2, max: 8 },
            x: { min: 4, max: 20 }
        },
        formula: (v) => Math.sqrt(2 * v.a * v.x)
    },

    {
        template: "A body has an initial velocity of {u} m/s and accelerates at {a} m/s² for {t} seconds. Find the final velocity.",
        vars: {
            u: { min: 2, max: 12 },
            a: { min: 2, max: 6 },
            t: { min: 2, max: 6 }
        },
        formula: (v) => v.u + v.a * v.t
    },

    {
        template: "A body with an initial velocity of {u} m/s accelerates at {a} m/s² for {t} seconds. Find the distance traveled.",
        vars: {
            u: { min: 2, max: 10 },
            a: { min: 2, max: 6 },
            t: { min: 2, max: 6 }
        },
        formula: (v) => v.u * v.t + 0.5 * v.a * v.t * v.t
    },


    {
        template: "A body with an initial velocity of {u} m/s accelerates at {a} m/s² over a distance of {x} m. Find the final velocity.",
        vars: {
            u: { min: 2, max: 10 },
            a: { min: 2, max: 6 },
            x: { min: 4, max: 20 }
        },
        formula: (v) => Math.sqrt(v.u * v.u + 2 * v.a * v.x)
    },

    {
        template: "A body moving at {u} m/s decelerates at {a} m/s² until it stops. Find the time taken to stop.",
        vars: {
            u: { min: 4, max: 20 },
            a: { min: 2, max: 6 }
        },
        formula: (v) => v.u / v.a
    },

    {
        template: "A body moving at {u} m/s decelerates uniformly at {a} m/s² until it stops. Find the stopping distance.",
        vars: {
            u: { min: 4, max: 20 },
            a: { min: 2, max: 6 }
        },
        formula: (v) => (v.u * v.u) / (2 * v.a)
    },

    {
        template: "An object is thrown vertically upward with an initial velocity of {u} m/s. Find the maximum height reached. (g = 10 m/s²)",
        vars: {
            u: { min: 10, max: 30 }
        },
        formula: (v) => (v.u * v.u) / (2 * 10)
    },

    {
        template: "An object of mass {m} kg moves at {v} m/s. Find its momentum.",
        vars: {
            m: { min: 2, max: 12 },
            v: { min: 2, max: 15 }
        },
        formula: (v) => v.m * v.v
    },

    {
        template: "A body travels {d} m in {t} seconds. Find the average velocity.",
        vars: {
            d: { min: 20, max: 120 },
            t: { min: 2, max: 12 }
        },
        formula: (v) => v.d / v.t
    },

    {
        template: "An object falls freely for {t} seconds. Find its velocity. (g = 10 m/s²)",
        vars: {
            t: { min: 2, max: 8 }
        },
        formula: (v) => 10 * v.t
    },


];

window.infinityProblems.mechanics_linear = mechanics_linear;

