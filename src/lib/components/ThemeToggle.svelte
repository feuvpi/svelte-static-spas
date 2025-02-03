<script lang="ts">
    import { theme } from '$lib/theme';
  </script>
  
  <button
    class="p-2 rounded-sm transition-colors duration-300"
    style="background-color: var(--bg-accent);"
    on:click={() => theme.toggle()}
  >
    {#if $theme === 'dark'}
      🌙
    {:else}
      ☀️
    {/if}
  </button>