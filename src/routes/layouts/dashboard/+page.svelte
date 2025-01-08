<script>
  export let title = "Dashboard";
</script>

<div class="p-6 bg-white shadow-md rounded-lg">
  <!-- Title Section -->
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-3xl font-extrabold text-gray-800">{title}</h2>
    <button
      class="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition duration-200"
    >
      Add New
    </button>
  </div>

  <!-- Stats Section -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    <!-- Card 1 -->
    <div class="p-4 bg-blue-100 rounded-lg shadow">
      <h3 class="text-lg font-bold text-blue-800">Total Users</h3>
      <p class="text-2xl font-extrabold text-blue-900 mt-2">1,234</p>
    </div>

    <!-- Card 2 -->
    <div class="p-4 bg-green-100 rounded-lg shadow">
      <h3 class="text-lg font-bold text-green-800">Monthly Revenue</h3>
      <p class="text-2xl font-extrabold text-green-900 mt-2">$12,345</p>
    </div>

    <!-- Card 3 -->
    <div class="p-4 bg-yellow-100 rounded-lg shadow">
      <h3 class="text-lg font-bold text-yellow-800">Active Sessions</h3>
      <p class="text-2xl font-extrabold text-yellow-900 mt-2">567</p>
    </div>
  </div>

  <!-- Recent Activity -->
  <div class="bg-gray-100 p-4 rounded-lg shadow">
    <h3 class="text-lg font-bold text-gray-800 mb-2">Recent Activity</h3>
    <ul class="divide-y divide-gray-300">
      <li class="py-2 flex items-center">
        <span class="flex-grow">John Doe logged in</span>
        <span class="text-sm text-gray-500">5 mins ago</span>
      </li>
      <li class="py-2 flex items-center">
        <span class="flex-grow">Jane Smith updated her profile</span>
        <span class="text-sm text-gray-500">10 mins ago</span>
      </li>
      <li class="py-2 flex items-center">
        <span class="flex-grow">New user registered</span>
        <span class="text-sm text-gray-500">30 mins ago</span>
      </li>
    </ul>
  </div>
</div>
