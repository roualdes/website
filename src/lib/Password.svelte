<script>
  export let input="";
  export let password=""
</script>

{#if input === password}
  <slot/>
{:else}
  <div>
    <label>Password:</label>
    <input bind:value={input} type="password" />
  </div>
{/if}
