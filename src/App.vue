<template>
  <div id="app">
    <Navbar />
    <h3 class="text-xl text-gray-600 ml-16 mt-10 font-medium">
      Home / <u><a href="#">Reports & Insights</a></u>
    </h3>
    <div class="grid grid-flow-col my-28 pl-4 pr-4">
      <div class="bg-white">
        <div class="shadow-lg ml-6">
          <div id="chart">
            <Chart />
            <apexchart
              type="radar"
              height="350"
              :options="chartOptions"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>
      <ContainerDashboard />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import ContainerDashboard from "./components/ContainerDashboard";
import Chart from "./components/Chart";

export default {
  name: "app",
  components: {
    Navbar,
    ContainerDashboard,
    Chart,
  },
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: auto;
  background: #e5e5e5;
}
</style>
