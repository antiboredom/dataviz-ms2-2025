<script>

import Hello from "./Hello.vue";
import BarChart from "./BarChart.vue"

export default {
  data() {
    return {
      message: "hi",
      names: [
        "Leo",
        "Karl",
        "Engels",
        "Sam"
      ],
      chart1: [
        {value: 10, name: "first thing"},
        {value: 20, name: "second thing"},
        {value: 5, name: "third thing"},
        {value: 13, name: "fourth thing"}
      ],
      chart2: [
        {value: 1, name: "first thing"},
        {value: 2, name: "second thing"},
        {value: 3, name: "third thing"},
        {value: 4, name: "fourth thing"}
      ]
    }
  },
  components: {
    Hello,
    BarChart,
  }
}

</script>

<template>

  <BarChart width="500" height="500" :chart="chart1"/>

  <BarChart width="500" height="500" :chart="chart2"/>

  <h1>{{ message }}</h1>

  <input type="text" v-model="message">

  <!-- <Hello name="Sam"/>
  <Hello name="Mati"/>
  <Hello :name="message"/> -->

  <Hello v-for="name in names" :name="name"/>


</template>

<style>
  h1 {
    color: red;
  }
</style>