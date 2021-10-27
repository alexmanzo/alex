<script context="module" lang="ts">
  import PostList from '$lib/posts/PostList.svelte'

  export const prerender = true
</script>

<svelte:head>
  <title>Alex Manzo</title>
</svelte:head>

<h1 class="text-5xl">Hi! I'm Alex.</h1>
<p>
  This site is a work in progress. In the interest of getting it "done", I started simple. More features and content
  will come with time!
</p>
<p>In the mean time, all current posts are available below!</p>
<PostList />
