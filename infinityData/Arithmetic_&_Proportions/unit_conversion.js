// unit_conversion.js

if (!window.infinityProblems) {
    window.infinityProblems = {};
}

window.infinityProblems.unit_conversion = [

  {
    template:
      "Convert {{v}} cm to mm.",
    vars: {
      v: { values: [2, 5, 12, 30] }
    },
    formula: (v) => v.v * 10
  },

  {
    template:
      "Convert {{v}} m to cm.",
    vars: {
      v: { values: [1, 2, 3, 5] }
    },
    formula: (v) => v.v * 100
  },

  {
    template:
      "Convert {{v}} km to m.",
    vars: {
      v: { values: [1, 2, 3, 5] }
    },
    formula: (v) => v.v * 1000
  },

  {
    template:
      "Convert {{v}} g to kg.",
    vars: {
      v: { values: [500, 800, 1200, 2500] }
    },
    formula: (v) => v.v / 1000
  },

  {
    template:
      "Convert {{v}} kg to g.",
    vars: {
      v: { values: [1, 2, 3, 5] }
    },
    formula: (v) => v.v * 1000
  },

  {
    template:
      "Convert {{v}} minutes to seconds.",
    vars: {
      v: { values: [1, 2, 5, 10] }
    },
    formula: (v) => v.v * 60
  },

  {
    template:
      "Convert {{v}} hours to minutes.",
    vars: {
      v: { values: [1, 2, 3, 5] }
    },
    formula: (v) => v.v * 60
  },

  {
    template:
      "Convert {{v}} m/s to km/h.",
    vars: {
      v: { values: [5, 10, 15] }
    },
    formula: (v) => v.v * 3.6
  },

  {
    template:
      "Convert {{v}} km/h to m/s.",
    vars: {
      v: { values: [18, 36, 72] }
    },
    formula: (v) => v.v / 3.6
  },

  {
    template:
      "A length is {{k}} times larger. How does the area change?",
    vars: {
      k: { values: [2, 3, 4] }
    },
    formula: (v) => v.k ** 2
  }

];
