import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const App = {
  data() {
    return {
      name: "",
      message: "Go away",
    };
  },
  methods: {
    updateMessage() {
      if (this.name == "Karl") {
        this.message = "Welcome";
      }
    },
  },
};

createApp(App).mount("#app");
