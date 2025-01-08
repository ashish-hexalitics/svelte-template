<script lang="ts">
    export let label: string = "Upload File";
    export let onFileChange: (file: File | null) => void = (file) => {};
    export let acceptedFormats: string = "*";
    export let classes: string = "";
  
    let selectedFile: File | null = null;
  
    const handleFileChange = (e: Event): void => {
      const target = e.target as HTMLInputElement;
      selectedFile = target.files?.[0] || null;
      if (selectedFile) {
        onFileChange(selectedFile);
      } else {
        onFileChange(null); // Clear the file if no file is selected
      }
    };
  </script>
  
  <div class={`space-y-2 ${classes}`}>
    {#if label}
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <label class="block text-sm font-medium text-gray-700">{label}</label>
    {/if}
    <div
      class="relative flex items-center justify-between p-2 bg-gray-100 border border-gray-300 rounded-lg"
    >
      <input
        type="file"
        accept={acceptedFormats}
        on:change={handleFileChange}
        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <span class="text-sm text-gray-500">
        {selectedFile ? selectedFile.name : "No file selected"}
      </span>
      <button
        type="button"
        class="px-3 py-1 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Browse
      </button>
    </div>
  </div>
  