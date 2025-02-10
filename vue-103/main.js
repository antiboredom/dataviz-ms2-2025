import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const App = {
  data() {
    return {
      rectW: 200,
      rectH: 300,
    };
  },
  methods: {},
};

createApp(App).mount("#app");
