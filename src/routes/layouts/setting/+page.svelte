<script>
  export let title = "Settings";
</script>

<div class="p-8 bg-gray-100 min-h-screen">
  <!-- Title Section -->
  <div class="p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 class="text-3xl font-extrabold text-gray-800">{title}</h2>
    <p class="text-gray-600 mt-2">Adjust your preferences and account settings below.</p>
  </div>

  <!-- Settings Categories -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Profile Settings -->
    <div class="p-6 bg-white shadow-md rounded-lg">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Profile Settings</h3>
      <div class="space-y-4">
        <div>
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="block text-gray-700 font-medium mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>

    <!-- Privacy Settings -->
    <div class="p-6 bg-white shadow-md rounded-lg">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Privacy Settings</h3>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="text-gray-700 font-medium">Enable Two-Factor Authentication</label>
          <input
            type="checkbox"
            class="h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div class="flex items-center justify-between">
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="text-gray-700 font-medium">Make Profile Private</label>
          <input
            type="checkbox"
            class="h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>

    <!-- Notification Settings -->
    <div class="p-6 bg-white shadow-md rounded-lg">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Notification Settings</h3>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="text-gray-700 font-medium">Email Notifications</label>
          <input
            type="checkbox"
            class="h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div class="flex items-center justify-between">
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="text-gray-700 font-medium">Push Notifications</label>
          <input
            type="checkbox"
            class="h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>

    <!-- Account Settings -->
    <div class="p-6 bg-white shadow-md rounded-lg">
      <h3 class="text-xl font-semibold text-gray-800 mb-4">Account Settings</h3>
      <div class="space-y-4">
        <div>
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="block text-gray-700 font-medium mb-1">Change Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="block text-gray-700 font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </div>
  </div>
</div>
