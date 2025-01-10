<script lang="ts">
  import Button from "../../lib/components/Button.svelte";
  import { fetchAPI } from "$lib/utils/fetchAPI";

  const handleLogout = async () => {
    await fetchAPI("/logout", "POST");
    window.location.reload();
  };
</script>

<div class="bg-white shadow p-4 flex justify-between items-center">
  <!-- <h1 class="text-xl font-bold">Dashboard</h1> -->
  <input
    type="text"
    placeholder="Search..."
    class="px-4 py-2 border rounded-md focus:ring-blue-500 focus:outline-none"
  />
  <div class="flex items-center space-x-4">

    <a href="/layouts/profile">
      <div class="flex items-center">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img
          src={"https://via.placeholder.com/100"}
          alt="Profile Picture"
          class="w-10 h-10 rounded-full border-2 border-blue-500"
        />
        <div></div>
      </div></a
    >
    <Button
      label={"Logout"}
      onClick={handleLogout}
      classes="bg-red-500 text-white rounded-md hover:bg-red-600"
    />
  </div>
</div>
