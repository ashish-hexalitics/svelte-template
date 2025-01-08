<script>
  export let title = "Default Title";
</script>

<div class="p-6 bg-gray-100 flex-1">
  <slot>
    <p class="text-gray-600">
      Add your dynamic routed content here.
    </p>
  </slot>
</div>
