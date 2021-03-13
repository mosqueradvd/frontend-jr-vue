<template>
  <div id="app">
    <Navbar />
    <ContainerDashboard />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import ContainerDashboard from "./components/ContainerDashboard";

export default {
  name: "app",
  components: {
    Navbar,
    ContainerDashboard,
  },
  //async mounted() {
  // Reports
  //const reportResponse = await fetch('/api/reports')
  //const reports = await reportResponse.json()
  //}
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
</style>
