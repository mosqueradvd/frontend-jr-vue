<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 dark:bg-gray-900"
      >
        <div
          class="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg dark:bg-gray-900"
        >
          <table
            class="min-w-full divide-y divide-gray-200 dark:border-gray-900"
          >
            <thead class="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-bold text-gray-600 tracking-wider dark:text-gray-400"
                >
                  Employee
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 text-left text-sm font-bold text-gray-600 tracking-wider dark:text-gray-400"
                >
                  Last login
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 text-left text-sm font-bold text-gray-600 tracking-wider dark:text-gray-400"
                >
                  Department
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-bold text-white-600 tracking-wider dark:text-gray-400"
                >
                  Status
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(users, i) in users.users" :key="i">
                <td
                  class="px-6 py-4 whitespace-nowrap text-white dark:bg-gray-900 dark:border-gray-900"
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://img.icons8.com/pastel-glyph/2x/user-male.png"
                        alt="user profile pic"
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ users.first_name }} {{ users.last_name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ users.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-4 py-4 whitespace-nowrap text-white dark:bg-gray-900"
                >
                  <div class="text-sm text-gray-900 dark:text-gray-400">
                    {{ users.sessions[0].slice(0, 10) }}
                  </div>
                </td>

                <td
                  class="px-4 py-4 whitespace-nowrap text-sm text-black-800 dark:bg-gray-900 dark:text-gray-400"
                >
                  {{ users.department }}
                </td>
                <td class="px-4 py-4 whitespace-nowrap dark:bg-gray-900">
                  <span
                    v-if="users.status"
                    class="px-2 inline-flex text-xs leading-5 font-semibold text-green-500"
                  >
                    Active
                  </span>
                  <span
                    v-else
                    class="px-2 inline-flex text-xs leading-5 font-semibold text-red-400"
                  >
                    Inactive
                  </span>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium dark:bg-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="text-sm text-gray-400 w-5 h-8 inline-block"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersDashboard",
  data() {
    return {
      users: [],
    };
  },

  async mounted() {
    // Users
    const userResponse = await fetch("/api/users");
    const data = await userResponse.json();
    this.users = data;
  },
};
</script>
