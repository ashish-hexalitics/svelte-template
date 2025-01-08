<script>
  import Button from "../../../components/Button.svelte";

  export let title = "Buttons Component Example";
  let isLoading = false;

  const simulateAsyncTask = async () => {
    isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay
    isLoading = false;
    alert("Task Completed!");
  };
  const handlePrimaryClick = () => {};
  const handleSecondaryClick = () => {};
  const handleDangerClick = () => {};
  const handleScaleClick = () => {};
</script>

<div class="p-6 bg-white shadow-md rounded-lg">
  <!-- Title Section -->
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-3xl font-extrabold text-gray-800">{title}</h2>
  </div>

  <!-- Button Showcase -->
  <div class="space-y-4">
    <!-- Standard Buttons -->

    <Button
      label="Primary Button"
      onClick={handlePrimaryClick}
      classes="bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <Button
      label="Secondary Button"
      onClick={handleSecondaryClick}
      classes="bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
    />
    <Button
      label="Danger Button"
      onClick={handleDangerClick}
      classes="bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
    />
    <Button
      label="Success Button"
      onClick={handleDangerClick}
      classes="bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
    />

    <!-- Animated Buttons -->
    <Button
      label="Scaling Button"
      onClick={handleScaleClick}
      classes="bg-purple-500 text-white"
      animationClasses="hover:scale-110 hover:shadow-lg"
    />
    <!-- Loader Button -->
    <Button
      label="Submit with Loader"
      loading={isLoading}
      onClick={simulateAsyncTask}
      classes="bg-blue-500 flex text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
</div>
