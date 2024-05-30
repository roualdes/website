<script>
  import Katex from '$lib/Katex.svelte';
  
  export let direction = "le";
  export let hide_direction_picker = true;
</script>

<span
  style="border-bottom: 1px dotted;"
  on:click = {() => hide_direction_picker = !hide_direction_picker}>
  {#if direction === "le"}
    <Katex math = "\le" />
  {:else if direction === "eq"}
    <Katex math = "=" />
  {:else if direction === "ge"}
    <Katex math = "\ge" />
  {/if}
</span>
