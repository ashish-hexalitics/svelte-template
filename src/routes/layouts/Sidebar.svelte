<script>
  let navLinks = [
    { name: "Dashboard", href: "/layouts/dashboard" },
    { name: "Todo", href: "/layouts/todo" },
    { name: "Buttons", href: "/layouts/buttons" },
    { name: "inputs", href: "/layouts/inputs" },
    { name: "Tables", href: "/layouts/tables" },
    { name: "Settings", href: "/layouts/setting" },
  ];
</script>

<nav class="bg-gray-800 text-white w-64 p-4">
  <h2 class="text-lg font-bold mb-4">Navigation</h2>
  <ul>
    {#each navLinks as link}
      <li class="mb-2">
        <a
          href={link.href}
          class="block p-2 rounded hover:bg-gray-700 transition-colors"
        >
          {link.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>
