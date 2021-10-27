<script lang="ts">
  import type { NavLinkType } from '$lib/types/navlink.type'
  const navItems: NavLinkType[] = [
    { label: 'Thoughts', path: '/thoughts', isMobileMenu: false },
    { label: 'Contact', path: '/contact', isMobileMenu: false },
  ]
  import NavLink from '$lib/components/nav/NavLink.svelte'
  let mobileNavOpen = false
</script>

<header>
  <nav class="bg-white shadow">
    <!-- Overall Menu Container-->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16">
        <!-- Tablet/Desktop -->
        <div class="flex justify-between w-full">
          <a href="/" class="flex-shrink-0 flex items-center font-mono text-3xl text-indigo-900">&gt; alex</a>
          <!-- <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            {#each navItems as item}
              <NavLink linkProps={item} />
            {/each}
          </div> -->
        </div>

        <!-- Mobile -->
        <!-- <div class="-mr-2 flex items-center sm:hidden"> -->
        <!-- Mobile menu button -->
        <!-- <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded={mobileNavOpen}
            on:click={() => (mobileNavOpen = !mobileNavOpen)}
          >
            <span class="sr-only">{mobileNavOpen ? 'Close main menu' : 'Open main menu'}</span>
            <svg
              class="h-6 w-6"
              class:hidden={mobileNavOpen}
              class:block={!mobileNavOpen}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              class:hidden={!mobileNavOpen}
              class:block={mobileNavOpen}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>-->
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <!-- <div class:hidden={!mobileNavOpen} class="sm:hidden" id="mobile-menu">
      <div class="pt-2 pb-3 space-y-1">
        {#each navItems as item}
          <NavLink linkProps={{ label: item.label, path: item.path, isMobileMenu: true }} />
        {/each}
      </div>
    </div> -->
  </nav>
</header>
