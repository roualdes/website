<script>
  export let open = false;
  import { slide } from 'svelte/transition';
</script>

{#if open}
  <aside transition:slide|global data-visible={open}>
    <nav>
      <ul>
        <li><a href="/lecturenotes">lecture notes</a></li>
      </ul>
    </nav>
  </aside>
{/if}

<style>
  aside[data-visible="false"] {
    display: none !important;
  }
</style>
