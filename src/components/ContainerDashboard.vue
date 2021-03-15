<template>
  <div class="shadow-lg rounded-xl dark:bg-gray-900">
    <header class="bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <h1 class="text-2xl text-gray-600 dark:text-gray-400">Employees</h1>
      </div>
    </header>
    <main>
      <div
        class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white rounded-lg dark:bg-gray-900"
      >
        <div class="px-4 py-6 sm:px-0">
          <UsersDashboard />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UsersDashboard from "./UsersDashboard";

export default {
  name: "ContainerDashboard",
  components: {
    UsersDashboard,
  },
};
</script>