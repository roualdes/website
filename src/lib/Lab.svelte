<script>
  import Layout from '$lib/Layout.svelte';
  import { makeID } from '$lib/makeID.js';
  import License from '$lib/License.svelte';

  import Scroller from "@sveltejs/svelte-scroller";

  let index = 0;
  let threshold = 0.25;
  export let query = "h2";
  export let contents = [];
  export let licensed = false;
  $: highlight = contents[index];
</script>

<Layout>
  <span slot="content">
    <Scroller bind:index bind:query bind:threshold>
      <div slot="background"></div>
      <div slot="foreground">
        <slot {index}/>
      </div>
    </Scroller>

    {#if licensed}<License />{/if}
  </span>

  <span slot="toc">
    <div class="toc">
      <small>
        {#if contents.length > 0}
          <strong>Contents</strong>
          {#each contents as c}
            {#if c === highlight}
              <p>
                <a href="{'#' + makeID(c)}" class="primary">{c}</a>
              </p>
            {:else}
              <p>
                <a href="{'#' + makeID(c)}" class="secondary">{c}</a>
              </p>
            {/if}
          {/each}
        {/if}
      </small>
    </div>
  </span>
</Layout>

<style>
  .toc p {
    margin: 0;
  }
  .toc a {
    text-decoration: none;
  }
</style>
