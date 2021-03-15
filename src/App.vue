<template>
  <div id="app" class="bg-gray-300 dark:bg-gray-800">
    <Navbar />
    <h3
      class="text-xl text-gray-600 ml-16 mt-10 font-medium dark:text-gray-200"
    >
      Home / <u><a href="#">Reports & Insights</a></u>
    </h3>

    <div class="grid grid-flow-col my-28 pl-4 pr-4">
      <div>
        <div>
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
import Chart from "./components/Chart";
import Navbar from "./components/Navbar";
import ContainerDashboard from "./components/ContainerDashboard";

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
}

.light-mode {
  --bg-background-primary: #e5e5e5;
  --bg-background-secondary: #eaeaea;
  --bg-background-ternary: white;
}

.dark-mode {
  --bg-background-primary: #0e0e0e;
  --bg-background-secondary: #151515;
  --bg-background-ternary: #292929;
}
</style>
