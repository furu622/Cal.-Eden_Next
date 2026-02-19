/*
  Cal. Eden: Next - Bloom Edition
  © 2026 ふる. This file is part of this project.
*/

// infinityData/fluidmechanics.js
// Level∞ 問題データ - 流体力学 (Fluid Mechanics)

if (!window.infinityProblems) {
  window.infinityProblems = {};
}

window.infinityProblems.fluidmechanics = [
  {
    template: "A pipe with area {A1} m² carries water at velocity {v1} m/s. It then narrows to area {A2} m². Find the velocity in the narrower pipe.",
    vars: {
      v1: { min: 1, max: 5 },
      A1: { min: 2, max: 5 },
      A2: { min: 1, max: 4 }
    },
    formula: (v) => v.v1 * (v.A1 / v.A2) // Continuity equation: A1 * v1 = A2 * v2
  },

  {
    template: "Water flows in a pipe of area {A} m² at velocity {v} m/s. Find the volumetric flow rate Q (m³/s).",
    vars: {
      A: { min: 1, max: 5 },
      v: { min: 1, max: 5 }
    },
    formula: (v) => v.A * v.v
  },

  {
    template: "Water flows at velocity {v1} m/s through area {A1} m². In another section, velocity is {v2} m/s. Find the area in that section (m²).",
    vars: {
      A1: { min: 1, max: 5 },
      v1: { min: 1, max: 5 },
      v2: { min: 1, max: 5 }
    },
    formula: (v) => (v.A1 * v.v1) / v.v2
  },

  {
    template: "A circular pipe of radius {r1} m has water velocity {v1} m/s. It narrows to radius {r2} m. Find the new velocity (π = 3).",
    vars: {
      r1: { min: 1, max: 3 },
      r2: { min: 1, max: 3 },
      v1: { min: 1, max: 5 }
    },
    formula: (v) => v.v1 * ((v.r1 * v.r1) / (v.r2 * v.r2))
  },

  {
    template: "A fluid of density {rho1} kg/m³ flows through area {A1} m² at velocity {v1} m/s. In another section, density becomes {rho2} kg/m³ and area is {A2} m². Find the velocity there (m/s).",
    vars: {
      rho1: { min: 1, max: 5 },
      rho2: { min: 1, max: 5 },
      A1: { min: 1, max: 5 },
      A2: { min: 1, max: 5 },
      v1: { min: 1, max: 5 }
    },
    formula: (v) => (v.rho1 * v.A1 * v.v1) / (v.rho2 * v.A2)
  },


  // ① 水平管・速度変化型
  {
    template: "Water flows in a horizontal pipe. Pressure is {P1} kPa and velocity is {v1} m/s. In another section velocity is {v2} m/s. Find the pressure there (kPa).",
    vars: {
      P1: { min: 100, max: 300, step: 10 },
      v1: { min: 1, max: 5 },
      v2: { min: 1, max: 5 }
    },
    formula: (v) =>
      v.P1 + 0.5 * (v.v1*v.v1 - v.v2*v.v2)  // Bernoulli's equation for horizontal flow: P1 + 0.5*ρ*v1² = P2 + 0.5*ρ*v2² (ρ cancels out)
  },

  // ② 高さ変化型（速度一定）
  {
    template: "Water flows upward by {h} m in a pipe. Initial pressure is {P1} kPa. Find the pressure at the higher point (g = 10 m/s²).",
    vars: {
      P1: { min: 100, max: 300, step: 10 },
      h: { min: 1, max: 10 }
    },
    formula: (v) =>
      v.P1 - 10 * v.h  // Bernoulli's equation for vertical flow with constant velocity: P1 + ρ*g*h1 = P2 + ρ*g*h2 (velocity terms cancel out, and h2 - h1 = h)
  },

  // ③ トリチェリの定理
  {
    template: "Water flows out from a tank at height {h} m. Find the exit velocity (m/s, g = 10 m/s²).",
    vars: {
      h: { min: 1, max: 10 }
    },
    formula: (v) =>
      Math.sqrt(20 * v.h)  // Torricelli's theorem: v = √(2*g*h) = √(20*h)
  },

  // ④ 圧力 → 速度変換型
  {
    template: "Water under pressure {P} kPa discharges into atmosphere. Find the velocity (m/s).",
    vars: {
      P: { min: 100, max: 300, step: 10 }
    },
    formula: (v) =>
      Math.sqrt(2 * v.P)  // From Bernoulli's equation: P = 0.5*ρ*v² → v = √(2*P/ρ). Assuming ρ = 1000 kg/m³, v = √(2*P/1000) = √(0.002*P) = √(2*P)
  },

  // ⑤ フルベルヌーイ型
  {
    template: "At point 1: pressure {P1} kPa, velocity {v1} m/s, height 0 m. At point 2: velocity {v2} m/s, height {h} m. Find pressure at point 2 (kPa).",
    vars: {
      P1: { min: 100, max: 300, step: 10 },
      v1: { min: 1, max: 5 },
      v2: { min: 1, max: 5 },
      h: { min: 1, max: 5 }
    },
    formula: (v) =>
      v.P1
      + 0.5 * (v.v1*v.v1 - v.v2*v.v2)
      - 10 * v.h  // Bernoulli's equation: P1 + 0.5*ρ*v1² + ρ*g*h1 = P2 + 0.5*ρ*v2² + ρ*g*h2 (h1 = 0, so h2 - h1 = h)
  },

  // 運動量保存

  {
    template: "A water jet (ρ = {rho} kg/m³) with area {A} m² and velocity {v} m/s strikes a flat plate and comes to rest. Find the force exerted on the plate (N).",
    vars: {
      rho: { min: 950, max: 1050 },
      A: { min: 0.005, max: 0.02 },
      v: { min: 2, max: 8 }
    },
    formula: (v) => {
      const mdot = v.rho * v.A * v.v;
      return mdot * v.v; // F = ṁ (v - 0)
    }
  },

  {
    template: "Water (ρ = {rho} kg/m³) flows in a straight pipe with area {A} m². The velocity decreases from {v1} m/s to {v2} m/s. Find the force required to cause this change (N).",
    vars: {
      rho: { min: 950, max: 1050 },
      A: { min: 0.01, max: 0.05 },
      v1: { min: 4, max: 10 },
      v2: { min: 1, max: 3 }
    },
    formula: (v) => {
      const mdot = v.rho * v.A * v.v1;
      return mdot * (v.v2 - v.v1);
    }
  },

  {
    template: "A water jet (ρ = {rho} kg/m³) with area {A} m² and velocity {v} m/s hits a vertical wall and reverses direction with the same speed. Find the force exerted on the wall (N).",
    vars: {
      rho: { min: 950, max: 1050 },
      A: { min: 0.005, max: 0.02 },
      v: { min: 2, max: 8 }
    },
    formula: (v) => {
      const mdot = v.rho * v.A * v.v;
      return mdot * (2 * v.v); // Δv = -v - v = -2v
    }
  },

  {
    template: "Water (ρ = {rho} kg/m³) flows through a horizontal pipe. At section 1, area A1 = {A1} m², velocity v1 = {v1} m/s, and pressure P1 = {P1} kPa. The pipe narrows to area A2 = {A2} m². Neglect gravity and friction. Find the force exerted by the fluid on the pipe (N).",
    vars: {
      rho: { min: 950, max: 1050 },
      v1: { min: 2, max: 6 },
      A1: { min: 0.03, max: 0.08 },
      A2: { min: 0.01, max: 0.04 },
      P1: { min: 150, max: 300 }
    },
    formula: (v) => {
      const P1 = v.P1 * 1000; // kPa → Pa
      const v2 = v.v1 * (v.A1 / v.A2); // continuity
      const mdot = v.rho * v.A1 * v.v1;
      const P2 = P1 + 0.5 * v.rho * (v.v1**2 - v2**2); // Bernoulli
      const momentum = mdot * (v2 - v.v1);
      const pressureForce = P1 * v.A1 - P2 * v.A2;
      return pressureForce - momentum; // Force exerted by fluid on pipe
    }
  },

  {
    template: "Water (ρ = {rho} kg/m³) flows steadily through a 90° elbow. Inlet: A = {A} m², velocity = {v} m/s, pressure = {P} kPa. The outlet has the same area and speed but is turned 90°. Neglect gravity and losses. Find the magnitude of the force exerted by the fluid on the elbow (N).",
    vars: {
      rho: { min: 950, max: 1050 },
      v: { min: 2, max: 8 },
      A: { min: 0.02, max: 0.06 },
      P: { min: 150, max: 300 }
    },
    formula: (v) => {
      const P = v.P * 1000;
      const mdot = v.rho * v.A * v.v;
      const Fx = mdot * (-v.v) + P * v.A;
      const Fy = mdot * (v.v) - P * v.A;
      return Math.sqrt(Fx**2 + Fy**2);
    }
  },

  // ⑥ 流れのレイノルズ数・ストローハル数
  {
    template: "Water flows in a pipe of diameter {D} m with velocity {v} m/s. The kinematic viscosity is {nu} m²/s. Find the Reynolds number.",
    vars: {
      D: { min: 0.01, max: 0.1 },
      v: { min: 0.5, max: 5 },
      nu: { min: 0.0000008, max: 0.0000012 }
    },
    formula: (v) => {
      return v.v * v.D / v.nu;
    }
  },

  {
    template: "Oil flows in a pipe of diameter {D} m at velocity {v} m/s. The kinematic viscosity is {nu} m²/s. Find the Reynolds number.",
    vars: {
      D: { min: 0.02, max: 0.1 },
      v: { min: 0.2, max: 2 },
      nu: { min: 0.00001, max: 0.0001 }
    },
    formula: (v) => {
      return v.v * v.D / v.nu;
    }
  },


  {
    template: "Air flows past a cylinder of diameter {D} m at velocity {v} m/s. The vortex shedding frequency is {f} Hz. Find the Strouhal number.",
    vars: {
      D: { min: 0.02, max: 0.2 },
      v: { min: 5, max: 30 },
      f: { min: 5, max: 50 }
    },
    formula: (v) => {
      return v.f * v.D / v.v;
    }
  },

  // ⑦ 粘性流体の問題
  {
    template: "A fluid has dynamic viscosity μ = {mu} Pa·s and density ρ = {rho} kg/m³. Find the kinematic viscosity ν (m²/s).",
    vars: {
      mu: { min: 0.0005, max: 0.01 },
      rho: { min: 800, max: 1200 }
    },
    formula: (v) => {
      return v.mu / v.rho;
    }
  },

  {
    template: "A fluid has dynamic viscosity μ = {mu} mPa·s and density ρ = {rho} kg/m³. Find the kinematic viscosity ν (m²/s).",
    vars: {
      mu: { min: 0.5, max: 10 },
      rho: { min: 800, max: 1200 }
    },
    formula: (v) => {
      const mu_SI = v.mu * 0.001; // mPa·s → Pa·s
      return mu_SI / v.rho;
    }
  },

  // 動粘度からレイノルズ数
  {
    template: "A fluid with dynamic viscosity μ = {mu} Pa·s and density ρ = {rho} kg/m³ flows in a pipe of diameter {D} m at velocity {v} m/s. Find the Reynolds number.",
    vars: {
      mu: { min: 0.0008, max: 0.005 },
      rho: { min: 900, max: 1100 },
      D: { min: 0.02, max: 0.1 },
      v: { min: 0.5, max: 5 }
    },
    formula: (v) => {
      const nu = v.mu / v.rho;
      return v.v * v.D / nu;
    }
  },

  // Darcy-Weisbachの式による圧力損失
  {
    template: "Water flows in a pipe (D = {D} m, L = {L} m) at velocity {v} m/s. Density is {rho} kg/m³. The Darcy friction factor is f = {f}. Find the pressure loss (Pa).",
    vars: {
      D: { min: 0.02, max: 0.1 },
      L: { min: 5, max: 30 },
      v: { min: 1, max: 5 },
      rho: { min: 950, max: 1050 },
      f: { min: 0.01, max: 0.04 }
    },
    formula: (v) => {
      return v.f * (v.L / v.D) * 0.5 * v.rho * v.v**2;
    }
  },

  {
    template: "Water flows in a pipe (D = {D} m, L = {L} m) at velocity {v} m/s. Density is {rho} kg/m³ and dynamic viscosity is {mu} Pa·s. Assume laminar flow. Find the pressure loss (Pa).",
    vars: {
      D: { min: 0.02, max: 0.05 },
      L: { min: 5, max: 20 },
      v: { min: 0.2, max: 1 },
      rho: { min: 950, max: 1050 },
      mu: { min: 0.001, max: 0.003 }
    },
    formula: (v) => {
      const Re = v.rho * v.v * v.D / v.mu;
      const f = 64 / Re;
      return f * (v.L / v.D) * 0.5 * v.rho * v.v**2;
    }
  }


];
