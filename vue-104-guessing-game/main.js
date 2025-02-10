import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import * as d3 from "https://cdn.skypack.dev/d3@7";

const App = {
  data() {
    return {
      currentGuess: "",
      guesses: [],
      target: "CHART",
      badGuessMessage: "",
      hasWon: false,
      tileWidth: 50,
    };
  },
  methods: {
    makeGuess() {
      if (this.currentGuess.length > 5) {
        this.badGuessMessage = "Too long";
      } else if (this.currentGuess.length < 5) {
        this.badGuessMessage = "Too short";
      } else {
        this.badGuessMessage = "";
        this.guesses.push(this.currentGuess);
      }

      if (this.currentGuess.toUpperCase() === this.target) {
        this.hasWon = true;
      }

      this.currentGuess = "";
    },

    reset() {
      this.guesses = [];
      this.currentGuess = "";
      this.hasWon = false;
      this.badGuessMessage = "";
    },
  },
  computed: {
    totalGuess() {
      return this.guesses.length;
    },
    svgWidth() {
      return this.tileWidth * 5;
    },
    svgHeight() {
      return this.tileWidth * this.guesses.length;
    },

    xScale() {
      return d3.scaleLinear().domain([0, 5]).range([0, this.svgWidth]);
    },
    yScale() {
      return d3
        .scaleLinear()
        .domain([0, this.guesses.length])
        .range([0, this.svgHeight]);
    },

    grid() {
      let output = [];
      for (let guess of this.guesses) {
        let letterArray = [];
        let letters = guess.toUpperCase().split("");
        for (let i = 0; i < letters.length; i++) {
          let color = "lightgrey";
          let letter = letters[i];
          if (this.target[i] === letter) {
            color = "green";
          } else if (this.target.indexOf(letter) !== -1) {
            color = "orange";
          }
          letterArray.push({
            letter: letter,
            color: color,
          });
        }
        output.push(letterArray);
      }

      return output;
    },
  },
};

createApp(App).mount("#app");
