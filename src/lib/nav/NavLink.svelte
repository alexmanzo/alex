<script lang="ts">
  import { page } from '$app/stores'
  import type { NavLinkType } from '../../types/navlink.type'

  export let linkProps: NavLinkType
  $: isCurrentPath = $page.path === linkProps.path
</script>

{#if linkProps.isMobileMenu}
  <a
    href={linkProps.path}
    class:bg-indigo-50={isCurrentPath}
    class:border-indigo-700={isCurrentPath}
    class:text-indigo-900={isCurrentPath}
    class:border-transparent={!isCurrentPath}
    class:text-gray-500={!isCurrentPath}
    class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium">{linkProps.label}</a
  >
{:else}
  <a
    href={linkProps.path}
    class:border-indigo-700={isCurrentPath}
    class:text-gray-900={isCurrentPath}
    class:border-transparent={!isCurrentPath}
    class:text-gray-500={!isCurrentPath}
    class="border-indigo-700 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:border-gray-300 hover:text-gray-700"
  >
    {linkProps.label}
  </a>
{/if}
