<script lang="ts">
  import Button from "../../../lib/components/Button.svelte";
  import Input from "../../../lib/components/Inputs.svelte";
  import { taskStore } from "$lib/stores/taskStore";
  import { fetchAPI } from "$lib/utils/fetchAPI";
  import { onMount } from "svelte";

  // State to manage tasks
  // let tasks: { text: string; id: number }[] = [];
  let newTask = "";
  let isEditing: number | null = null;
  let editedTask = "";
  export let title = "To-Do List";
  export let description ="Add tasks to your to-do list and manage them efficiently.";

  let isModalOpen = false;

  // Get user data from context
  let storedTasks: { text: string; id: number }[] = [];

  taskStore.subscribe((task) => {
    storedTasks = task;
  });

  const fetcTasks = async () => {
    try {
      const data: any = await fetchAPI(`/api/tasks`, "GET");
      if (data?.data?.tasks) {
        taskStore.set(data?.data?.tasks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Add a new task
  const addTask = async () => {
    if (newTask.trim()) {
      await fetchAPI(`/api/tasks`, "POST", { text: newTask });
      fetcTasks();
      newTask = "";
      closeModal();
    }
  };

  // Close Modal
  const closeModal = () => {
    isModalOpen = false;
  };

  // Open Modal
  const openModal = () => {
    isModalOpen = true;
  };

  // Delete a task
  const deleteTask = async (id: number) => {
    await fetchAPI(`/api/tasks`, "DELETE", { id });
    fetcTasks();
  };

  // Edit a task
  const startEdit = (id: number, currentText: string) => {
    isEditing = id;
    editedTask = currentText;
  };

  const saveEdit = async (id: number) => {
    const editedTaskData = { id, text: editedTask.trim() };
    await fetchAPI(`/api/tasks`, "PATCH", editedTaskData);
    fetcTasks();
    isEditing = null;
    editedTask = "";
  };

  const cancelEdit = () => {
    isEditing = null;
    editedTask = "";
  };

  const handleInputChange = (e: any) => {
    if (e.target.name === "editedTask") {
      editedTask = e.target.value;
    } else if (e.target.name === "newTask") {
      newTask = e.target.value;
    }
  };

  const viewDetails = (task: { text: string; id: number }) => {
    alert(`Task Details:\n\nID: ${task.id}\nText: ${task.text}`);
  };

  onMount(async () => {
    fetcTasks();
  });

</script>

<div class="p-6 bg-white shadow-md rounded-lg">
  <!-- Title Section -->
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-3xl font-extrabold text-gray-800">{title}</h2>
    <Button
      label="Add New"
      onClick={openModal}
      classes="bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  <p class="text-gray-600 mb-6">{description}</p>

  <!-- Task List -->
  <ul class="list-none">
    {#each storedTasks as task (task.id)}
      <li
        class="flex justify-between items-center bg-gray-100 p-4 rounded-md mb-2 shadow"
      >
        {#if isEditing === task.id}
          <!-- Editing Mode -->
          <div class="flex-1">
            <Input
              value={editedTask}
              placeholder="Enter task title here"
              onChange={handleInputChange}
              classes="bg-gray-100 border-gray-400"
              type="text"
              name="editedTask"
            />
          </div>
          <Button
            label="Save"
            type="button"
            onClick={() => saveEdit(task.id)}
            classes="bg-green-500 ml-2 text-white font-semibold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <Button
            label="Cancel"
            type="button"
            onClick={cancelEdit}
            classes="bg-gray-500 ml-2 text-white font-semibold rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        {:else}
          <!-- Normal Mode -->
          <span class="flex-1">{task.text}</span>
          <Button
            label="View Details"
            type="button"
            onClick={() => viewDetails(task)}
            classes="bg-blue-500 me-2 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Button
            label="Edit"
            type="button"
            onClick={() => startEdit(task.id, task.text)}
            classes="bg-yellow-500 me-2 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Button
            label="Delete"
            type="button"
            onClick={() => deleteTask(task.id)}
            classes="bg-red-500 me-2 text-white font-semibold rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        {/if}
      </li>
    {/each}
  </ul>
</div>

<!-- Modal -->
{#if isModalOpen}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h3 class="text-lg font-bold mb-4">Add New Task</h3>
      <form on:submit|preventDefault={addTask}>
        <div class="mb-4">
          <Input
            label="Task"
            value={newTask}
            placeholder="Enter task title here"
            onChange={handleInputChange}
            classes="bg-gray-100 border-gray-400"
            type="text"
            name="newTask"
          />
        </div>
        <div class="flex justify-end">
          <Button
            label="Cancel"
            type="submit"
            onClick={closeModal}
            classes="bg-gray-500 me-2 text-white font-semibold rounded-lg shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <Button
            label="Add Task"
            type="submit"
            onClick={() => {}}
            classes="bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </form>
    </div>
  </div>
{/if}
