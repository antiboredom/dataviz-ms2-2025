<script>
import scrollama from "scrollama";
import * as d3 from "d3";
const scroller = scrollama();

const chart1 = [
  { value: 10, group: "first thing" },
  { value: 20, group: "second thing" },
  { value: 5, group: "third thing" },
  { value: 13, group: "fourth thing" },
];

const chart2 = [
  { value: 1, group: "first thing" },
  { value: 2, group: "second thing" },
  { value: 3, group: "third thing" },
  { value: 4, group: "fourth thing" },
];

const chart3 = [
  { value: 20, group: "first thing" },
  { value: 50, group: "second thing" },
  { value: 30, group: "third thing" },
  { value: 22, group: "fourth thing" },
];

const margin = { top: 30, right: 30, bottom: 70, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

export default {
  data() {
    return {
      count: 0,
      currentStep: null,
      currentProgress: null,
      currentElement: null,
      bars: null,
      width: 400,
      height: 400,
    };
  },
  methods: {
    update(chartdata) {
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(
          chartdata.map(function (d) {
            return d.group;
          }),
        )
        .padding(0.2);

      const y = d3.scaleLinear().domain([0, 20]).range([height, 0]);
      const u = d3.select(this.$refs.bars).selectAll("rect").data(chartdata);

      u.enter()
        .append("rect")
        .merge(u)
        .transition()
        .duration(1000)
        .attr("x", function (d) {
          return x(d.group);
        })
        .attr("y", function (d) {
          return y(d.value);
        })
        .attr("width", x.bandwidth())
        .attr("height", function (d) {
          return height - y(d.value);
        })
        .attr("fill", "#69b3a2");
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

        if (response.index == 0) {
          this.update(chart1);
        } else if (response.index == 1) {
          this.update(chart2);
        } else {
          this.update(chart3);
        }
      });

    this.update(chart1);
  },
};
</script>

<template>
  <header>This is the top</header>
  <main>
    <div class="d3-holder">
      <svg :width="width" :height="height">
        <g class="bars" ref="bars"></g>
      </svg>
    </div>
    <div class="step s1">first</div>
    <div class="step s2">second</div>
    <div class="step s3">Third</div>
  </main>
</template>

<style scoped>
main {
}
.step {
  height: 100vh;
}
.d3-holder {
  position: fixed;
}
</style>
