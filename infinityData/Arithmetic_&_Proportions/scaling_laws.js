// scaling_laws.js


if (!window.infinityProblems) {
    window.infinityProblems = {};
}

window.infinityProblems.scaling_laws = [

  {
    template:
      "Quantity A is directly proportional to quantity B. If B is multiplied by {{k}}, how many times does A become?",
    vars: {
      k: { values: [2, 3, 4, 5] }
    },
    formula: (v) => v.k
  },

  {
    template:
      "Quantity A is proportional to the square of quantity B. If B is multiplied by {{k}}, how many times does A become?",
    vars: {
      k: { values: [2, 3, 4] }
    },
    formula: (v) => v.k ** 2
  },

  {
    template:
      "Quantity A is proportional to the cube of quantity B. If B is multiplied by {{k}}, how many times does A become?",
    vars: {
      k: { values: [2, 3] }
    },
    formula: (v) => v.k ** 3
  },

  {
    template:
      "Quantity A is inversely proportional to quantity B. If B is multiplied by {{k}}, how many times does A become?",
    vars: {
      k: { values: [2, 3, 4] }
    },
    formula: (v) => 1 / v.k
  },

  {
    template:
      "Quantity A is inversely proportional to the square of quantity B. If B is multiplied by {{k}}, how many times does A become?",
    vars: {
      k: { values: [2, 3] }
    },
    formula: (v) => 1 / (v.k ** 2)
  }
];
