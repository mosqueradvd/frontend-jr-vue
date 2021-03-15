<template>
  <div>
    <main>
      <div
        class="flex bg-white items-center h-screen ml-8 mr-8 shadow-lg flex-col rounded-lg dark:bg-gray-900"
      >
        <header class="bg-white dark:bg-gray-900">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 pl-10">
            <h1 class="text-2xl font-medium text-gray-500">
              Why do you create a startup?
            </h1>
            <h2 class="text-xl text-gray-400">Trends</h2>
          </div>
        </header>
        <div id="chart">
          <apexchart
            type="pie"
            width="380"
            :options="chartOptions"
            :series="series"
          ></apexchart>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Chart",

  data() {
    return {
      series: [],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        colors: ["#E289F2", "#ACB9FF", "#855CF8", "#503795"],
        labels: [],
        legend: {
          position: "bottom",
          fontSize: "19px",
          fontFamily: "Helvetica, Arial",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "top",
                fontSize: "20px",
              },
            },
          },
        ],
      },
    };
  },

  async mounted() {
    //Reports
    const reportResponse = await fetch("/api/reports");
    const reports = await reportResponse.json();

    for (let i = 0; i < reports.reports.length; i++) {
      this.series.push(reports.reports[i].total);
      this.chartOptions.labels.push(reports.reports[i].category);
    }
  },
};
</script>