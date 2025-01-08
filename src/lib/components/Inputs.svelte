<script lang="ts">
  export let label: string = "";
  export let value: string = "";
  export let name: string = ""; 
  export let placeholder: string = "Enter text";
  export let type: string = "text"; // Default to text input
  export let classes: string = ""; // Custom classes for styling
  export let onChange: (e: Event) => void = () => {}; // Input handler
  export let animationClasses: string = ""; // Animation-specific classes
</script>

<div class="flex flex-col space-y-2">
  <!-- Label -->
  {#if label}
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label class="text-sm font-medium text-gray-700">{label}</label>
  {/if}

  <!-- Input Field -->
  <input
    type={type}
    bind:value={value}
    placeholder={placeholder}
    name={name}
    on:input={onChange}
    class={`rounded border shadow-sm p-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300 ${classes} ${animationClasses}`}
  />
</div>
