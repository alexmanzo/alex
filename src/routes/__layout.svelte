<script lang="ts">
  import '../app.css'
  import Header from '$lib/components/Header.svelte'
</script>

<Header />
<main class="px-4 md:px-0 py-14 prose prose-lg prose-indigo mx-auto">
  <slot />
</main>
