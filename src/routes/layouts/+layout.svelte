<script lang="ts">
    import Sidebar from "./Sidebar.svelte";
    import Header from "./Header.svelte";
    import Main from "./Main.svelte";
  </script>
  
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar />
  
    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <Header />
  
      <!-- Main Content -->
      <Main>
        <slot /> <!-- Render specific page content here -->
      </Main>
    </div>
  </div>
  