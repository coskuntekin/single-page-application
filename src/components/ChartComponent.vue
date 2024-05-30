<template>
  <div aria-label="Simularge chart" ref="chart"></div>
</template>

<script setup>
import Plotly from "plotly.js-dist-min";
import { onMounted, ref, watch } from "vue";
const props = defineProps({
  operations: Array,
});

const chart = ref(null);
function renderChart() {
  const data = [
    {
      x: props.operations.map((op, index) => index + 1),
      y: props.operations.map((op) => op.y),
      type: "scatter",
    },
  ];
  const layout = {
    title: "Line and Scatter Plot",
    xaxis: { range: [0, 100], title: "Operation Number" },
    yaxis: { range: [0, 100], title: "Addition Result" },
  };
  Plotly.newPlot(chart.value, data, layout);
}

watch(props.operations, (newVal) => {
  if (newVal) {
    renderChart();
  }
});

onMounted(() => {
  renderChart();
});
</script>
