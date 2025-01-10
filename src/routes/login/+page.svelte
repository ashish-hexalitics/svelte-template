<script lang="ts">
  import { fetchAPI } from "$lib/utils/fetchAPI";
  import { goto } from "$app/navigation";

  let email: string = "";
  let password: string = "";
  let errorMessage: string = "";

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        errorMessage = "Both fields are required.";
        return;
      }
      const data: any = await fetchAPI("/api/login", "POST", {
        email,
        password,
      });
      console.log(data)
      if (data?.data?.user) {
        errorMessage = "";
        goto("/layouts/dashboard");
      } else if(data?.error) {
        errorMessage = data?.error || "Login failed.";
      }
      // errorMessage = "";
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div
  class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700"
>
  <div class="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
    <!-- Logo -->
    <div class="flex justify-center mb-6">
      <div
        class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-md"
      >
        <span class="text-2xl font-bold text-white">L</span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="mb-6 text-3xl font-extrabold text-center text-gray-800">
      Welcome Back!
    </h2>
    <p class="text-sm text-center text-gray-500">
      Log in to access your account
    </p>

    <!-- Error Message -->
    {#if errorMessage}
      <div class="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg mb-2">
        {errorMessage}
      </div>
    {/if}

    <!-- Login Form -->
    <form on:submit|preventDefault={handleLogin} class="space-y-6">
      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email</label
        >
        <input
          type="email"
          id="email"
          bind:value={email}
          placeholder="Enter your email"
          class="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <!-- Password -->
      <div>
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <input
          type="password"
          id="password"
          bind:value={password}
          placeholder="Enter your password"
          class="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <!-- Login Button -->
      <button
        type="submit"
        class="w-full px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:from-blue-600 hover:to-indigo-600 focus:ring-4 focus:ring-blue-300"
      >
        Log In
      </button>
    </form>

    <!-- Divider -->
    <div class="my-6 text-center text-gray-400">or</div>

    <!-- Social Login -->
    <div class="flex space-x-4">
      <button
        class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          class="w-5 h-5 mr-2"
        />
        Login with Google
      </button>
      <button
        class="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/157818/facebook.svg"
          alt="Facebook"
          class="w-5 h-5 mr-2"
        />
        Login with Facebook
      </button>
    </div>

    <!-- Footer -->
    <p class="mt-6 text-sm text-center text-gray-500">
      Don't have an account?
      <a href="/register" class="font-medium text-blue-600 hover:underline"
        >Sign up</a
      >
    </p>
  </div>
</div>
