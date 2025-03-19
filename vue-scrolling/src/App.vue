<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

// instantiate the scrollama
import scrollama from "scrollama";
const scroller = scrollama();

export default {
  data() {
    return {
      count: 0,
      currentStep: null,
      currentProgress: null,
      currentElement: null,
    };
  },
  methods: {},
  mounted() {
    scroller
      .setup({
        step: ".step",
        progress: true,
        debug: false,
        offset: 0.5,
      })
      .onStepProgress((response) => {
        this.currentStep = response.index;
        this.currentProgress = response.progress;
        this.currentDirection = response.direction;
        this.currentElement = response.element;
        // console.log(response);
      });
  },
};
</script>

<template>
  <main>
    <div class="boxes">
      <div class="step" :class="{ active: currentStep == 0 }">
        <p>First</p>
        {{ currentStep == 0 ? currentProgress * 100 : 0 }}%
      </div>
      <div class="step" :class="{ active: currentStep == 1 }">
        <p>First</p>
        {{ currentStep == 1 ? currentProgress * 100 : 0 }}%
      </div>
      <div class="step" :class="{ active: currentStep == 2 }">
        <p>First</p>
        {{ currentStep == 2 ? currentProgress * 100 : 0 }}%
      </div>
    </div>
    <div class="sticky">
      <div v-if="currentStep == 0">The first step!</div>
      <div v-if="currentStep == 1">The second step!</div>
      <div v-if="currentStep == 2">The third step!</div>
    </div>
  </main>

  <div class="bg">current step {{ currentStep }}</div>
</template>

<style scoped>
.step {
  height: 40vh;
  margin-top: 300px;
  border: 1px solid red;
  background-color: yellow;
  transition: 1s all;
  font-size: 30px;
}
.sticky {
  position: sticky;
  height: 40vh;
  top: 330px;
  left: 0px;
  flex: 1;
  background-color: #eee;
  padding: 20px;
}
.boxes {
  position: relative;
  max-width: 500px;
  flex: 1;
  padding: 20px;
}
main {
  display: flex;
  margin: auto;
  margin-bottom: 100vh;
  max-width: 900px;
  z-index: 1;
  position: relative;
}

.bg {
  z-index: 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.active {
  background-color: red;
}
</style>
