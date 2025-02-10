import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const App = {
  data() {
    return {
      message: "hello class.",
      total: 0,
    };
  },
  methods: {
    increment() {
      this.total += 1;
      this.message += "!!";
    },
  },
};

createApp(App).mount("#app");
