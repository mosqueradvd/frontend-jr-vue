<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl text-gray-600">Employees</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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