<script lang="ts">
  export let columns: { key: string; label: string }[] = [];
  export let data: any[] = [];
  export let enableSorting: boolean = false;
  export let enableSearch: boolean = false;

  let searchQuery: string = "";
  let sortKey: string | null = null;

  // Filtered data based on the search query
  $: filteredData = searchQuery
    ? data.filter((row) =>
        Object.values(row)
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : data;
</script>

<div class="container mx-auto py-4  rounded-lg">
  <!-- Search Bar -->
  {#if enableSearch}
    <input
      type="text"
      bind:value={searchQuery}
      class="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      placeholder="Search..."
      aria-label="Search through table data"
    />
  {/if}

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full overflow-hidden">
      <thead class="bg-blue-100">
        <tr class="shadow-sm">
          {#each columns as { key, label }}
            <th
              class="p-4 text-left text-sm font-semibold text-blue-800 cursor-pointer"
              on:click={() => enableSorting && (sortKey = key)}
              title={enableSorting ? `Sort by ${label}` : ""}
            >
              {label}
              {#if enableSorting && sortKey === key}
                <span class="text-blue-500">▲</span>
              {/if}
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#if filteredData && filteredData.length > 0}
          {#each filteredData as row}
            <tr class="hover:bg-gray-50 even:bg-yellow-50">
              {#each columns as { key }}
                <td class="p-4 text-sm font-medium text-gray-600 border-t">{row[key] || "-"}</td>
              {/each}
            </tr>
          {/each}
        {:else}
          <tr>
            <td
              colspan={columns.length}
              class="p-4 text-center text-sm text-gray-500 border-t"
            >
              No data available
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>
