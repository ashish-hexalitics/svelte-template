<script lang="ts">
  import Table from "../../../lib/components/Table.svelte";

  const columns: { key: string; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "email", label: "Email" },
  ];

  const data: any[] =  [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Sam Wilson', email: 'sam@example.com' }
  ];

  export let title = "Tables Component Example";
  let isLoading = false;
</script>

<div class="p-6 bg-white shadow-md rounded-lg">
  <!-- Title Section -->
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-3xl font-extrabold text-gray-800">{title}</h2>
  </div>
  <Table
    {columns}
    {data}
    />
</div>
