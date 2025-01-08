<script lang="ts">
  export let label: string;
  export let onClick: () => void = () => {};
  export let type: "button" | "submit" = "button";
  export let classes: string = "";
  export let animationClasses: string = "";
  export let loading: boolean = false;
</script>

<button
  {type}
  on:click={onClick}
  class={`px-4 py-2 rounded font-medium transition-all duration-300 transform ${classes} ${animationClasses}`}
>
  {#if loading}
    <!-- Spinner -->
    <svg
      class="animate-spin h-5 w-5 text-white mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  {/if}
  {label}
</button>
