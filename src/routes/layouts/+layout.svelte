<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import { fetchAPI } from "$lib/utils/fetchAPI";
  import { onMount,setContext } from "svelte";
  import { userStore } from "$lib/stores/userStore"; 

  let user: any = null;
  let userId: string | null = null;
  setContext("user", user);

  const fetchUser = async () => {
    try {
      if (!userId) return;
      const data: any = await fetchAPI(`/api/users?id=${userId}`, "GET");
      if (data?.data?.user) {
        user = data.data.user;
        userStore.set(user);
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  onMount(async () => {
    try {
      const sessionData: any = await fetchAPI("/api/session", "GET");
      // console.log(sessionData?.data?.user?.userId)
      if (sessionData?.data?.user?.userId) {
        userId = sessionData?.data?.user?.userId
        await fetchUser();
      } else {
        console.error("No session found.");
      }
    } catch (error) {
      console.error("Failed to fetch session:", error);
    }
  });

  $: setContext("user", user);

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
      <slot />
      <!-- Render specific page content here -->
    </Main>
  </div>
</div>
