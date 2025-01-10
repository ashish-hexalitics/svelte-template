<script lang="ts">
  import Table from "../../../lib/components/Table.svelte";
  import { fetchAPI } from "$lib/utils/fetchAPI";
  import { onMount } from "svelte";
  import { userListStore } from "$lib/stores/userStore";

  const columns: { key: string; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "email", label: "Email" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  let data: any[] = [];

  userListStore.subscribe((task) => {
    data = task;
  });

  const fetcUsers = async () => {
    try {
      const data: any = await fetchAPI(`/api/users`, "GET");
      console.log(data?.data)
      if (data?.data) {
        userListStore.set(data?.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  export let title = "Users";
  let isLoading = false;

  onMount(async () => {
    fetcUsers();
  });
</script>

<div class="p-6 bg-white shadow-md rounded-lg">
  <!-- Title Section -->
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-3xl font-extrabold text-gray-800">{title}</h2>
  </div>
  <Table {columns} {data} />
</div>
