<script>

import * as d3 from "d3";

export default {
    props: ["width", "height", "chart"],

    data() {
        return {
            
        }
    },

    mounted() {
        const x = d3.scaleBand().domain(this.chart.map(d => d.name)).range([0, this.width])
        const y = d3.scaleLinear().domain([0, 20]).range([0, this.height])
        d3.select(this.$refs.bars)
            .selectAll("g.bar")
            .data(this.chart)
            .join(
                (enter) => {
                    enter = enter.append("g").attr("class", "bar");
                    const rect = enter
                        .append("rect")
                        .attr("x", (d) => x(d.name))
                        .attr("y", (d) => this.height - y(d.value))
                        .attr("width", x.bandwidth())
                        .attr("height", (d) => y(d.value))
                    return enter;
                }
            )
    }
}
</script>

<template>
    <svg :width="width" :height="height">
        <g class="bars" ref="bars"></g>
    </svg>
</template>