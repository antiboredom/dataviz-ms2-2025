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
  methods: {
    stepEnterHandler(event) {
      console.log(event);
    },
  },
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
    <div class="step s1">
      <div v-if="currentStep == 0">ONE</div>
    </div>
    <div class="step s2">
      <Transition name="bounce">
        <div v-if="currentStep == 1">Two</div>
      </Transition>
    </div>
    <div class="step s3">Third</div>
  </main>
</template>

<style scoped>
.step {
  height: 100vh;
  padding: 30px;
  font-size: 100px;
}
.s1 {
  background-color: yellow;
}
.s2 {
  background-color: pink;
}
.s3 {
  background-color: lightblue;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100vw);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 1.5s;
  position: absolute;
}
.bounce-leave-active {
  animation: bounce-in 1.5s reverse;
  position: absolute;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
