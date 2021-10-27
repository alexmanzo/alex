<script>
  import PostTeaser from './PostTeaser.svelte'
  import globToArray from '$lib/helpers/globToArray'
  const modules = import.meta.globEager('../../routes/thoughts/**/*.svx')
  const posts = globToArray(modules)
</script>

<div class="relative mt-20">
  {#each posts as post}
    <!-- <PostTeaser {post} /> -->
    <article
      class="py-8 before:border-l-2 before:border-t-2 before:w-2/5 before:h-60 before:border-indigo-50 before:absolute before:top-0 before:-left-10 after:border-r-2 after:border-b-2 after:w-2/5 after:h-60 after:border-indigo-50 after:absolute after:bottom-0 after:-right-10"
    >
      <div
        class="absolute left-0 -top-5 block text-xs text-center text-indigo-600 font-semibold tracking-wide uppercase"
      >
        <time datetime={post.metadata.date}>
          {post.metadata.date}
        </time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.metadata.readingTime} read</span>
      </div>
      <svelte:component this={post.default} />
    </article>
  {/each}
</div>
