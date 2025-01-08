<script>
  import Input from "../../../lib/components/Inputs.svelte";
  import FileUploader from "../../../lib/components/FileUploader.svelte";

  export let title = "Input Component Example";

  let username = "";
  let email = "";
  let password = "";
  let file = null;
  let color = "#000000";

  let uploadedFile = null;

  const handleFileUpload = (file) => {
    uploadedFile = file;
    console.log("Uploaded File:", file);
  };

  const handleInputChange = (e, field) => {
    console.log(`${field} Value:`, e.target.value);
  };
</script>

<div class="p-6 bg-white shadow-md rounded-lg space-y-8">
  <!-- Title -->
  <h2
    class="text-3xl font-extrabold text-gray-800 border-b-2 pb-2 border-gray-200"
  >
    {title}
  </h2>

  <!-- Input Fields -->
  <div class="space-y-4">
    <!-- Username Input -->
    <Input
      label="Username"
      value={username}
      placeholder="Enter your username"
      onChange={(e) => handleInputChange(e, "Username")}
      classes="border-blue-500"
      type="text"
    />

    <!-- Email Input -->
    <Input
      label="Email"
      value={email}
      placeholder="Enter your email"
      onChange={(e) => handleInputChange(e, "Email")}
      classes="bg-gray-100 border-gray-400"
      type="email"
    />

    <!-- Password Input -->
    <Input
      label="Password"
      value={password}
      placeholder="Enter your password"
      onChange={(e) => handleInputChange(e, "Password")}
      classes="bg-gray-100 border-gray-400"
      type="password"
    />

    <!-- File Upload -->

    <!-- Color Picker -->
    <Input
      label="Pick a Color"
      value={color}
      onChange={(e) => (color = e.target.value)}
      classes="bg-gray-100 border-gray-400"
      type="color"
    />
  </div>
  <div class="space-y-8">
    <h2
      class="text-3xl font-extrabold text-gray-800 border-b-2 pb-2 border-gray-200"
    >
      File Upload Example
    </h2>
    <!-- File Upload -->
    <Input
      label="Upload File"
      value={file}
      placeholder="Select a file"
      onChange={(e) => (file = e.target.files[0])}
      classes="bg-gray-100 border-gray-400"
      animationClasses="hover:border-green-600"
      type="file"
    />
    <FileUploader
      label="Upload your Document"
      onFileChange={handleFileUpload}
      acceptedFormats=".pdf,.docx,.txt"
      classes="max-w-lg"
    />
  </div>
</div>
