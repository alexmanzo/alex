<script>
  export let post
</script>

<!-- TODO: Add Tags! https://tailwindui.com/components/marketing/sections/blog-sections#component-dd3c64601fdbfd25f15758f61828ae01 -->
<a
  href={post.path}
  class="group block rounded-md shadow-lg border-2 border-transparent hover:shadow-2xl duration-500 transition-shadow p-3"
>
  <div>
    <p class="text-xl font-semibold text-gray-900">
      <span class="border-b-2 border-transparent group-hover:border-indigo-700 transition-colors duration-500 pb-1"
        >{post.metadata.title}</span
      >
    </p>
    <p class="mt-3 text-base text-gray-500">
      {post.metadata.description}
    </p>
  </div>
  <div class="text-sm text-gray-500 mt-4 pt-4">
    <time datetime="post.metadata.date">
      {post.metadata.date}
    </time>
    <span aria-hidden="true">&middot;</span>
    <span>{post.metadata.readingTime} read</span>
  </div>
</a>
