<script>
  import { onMount } from 'svelte';
  
  // Detect user's region or default to Malaysia
  let region = 'my';
  
  onMount(() => {
    // In a real app, we would detect the user's region or use their preferences
    // For now, we'll just redirect to the Malaysia region
    window.location.href = `/${region}`;
  });
</script>

<div class="flex items-center justify-center h-screen">
  <div class="text-center">
    <h1 class="text-3xl font-bold">Welcome to Fefet</h1>
    <p class="mt-4">Redirecting to your region...</p>
  </div>
</div>
