<script lang="ts">
  // export let title = "Profile";
  import Button from "../../../lib/components/Button.svelte";
  import { onMount, getContext } from "svelte";
  import { userStore } from "$lib/stores/userStore";
  // let storedUser: any = null;
  export let imageUrl = "https://via.placeholder.com/150"; // Replace with a real image URL

  const handlePrimaryClick = () => {};

  // Get user data from context
  let storedUser: any = null;

  userStore.subscribe((user) => {
    storedUser = user;
  });


</script>

<div class="p-8 bg-white shadow-lg rounded-lg max-w-full mx-auto">
  <!-- Profile Header -->
  <div class="flex items-center space-x-6 mb-6">
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img
      src={imageUrl}
      alt="Profile Picture"
      class="w-20 h-20 rounded-full border-2 border-blue-500"
    />
    <div>
      <h2 class="text-2xl font-bold text-gray-800">{storedUser?.name}</h2>
      <p class="text-gray-500">{storedUser?.email}</p>
    </div>
  </div>

  <!-- Profile Content -->
  <div>
    <h3 class="text-xl font-semibold text-gray-800 mb-2">About Me</h3>
    <p class="text-gray-600 leading-relaxed">{storedUser?.bio}</p>
  </div>

  <!-- Profile Actions -->
  <div class="mt-6 flex space-x-4">
    <Button
      label="Edit Profile"
      onClick={handlePrimaryClick}
      classes="bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
    <Button
      label="Delete Profile"
      onClick={handlePrimaryClick}
      classes="bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
    />
  </div>
</div>
