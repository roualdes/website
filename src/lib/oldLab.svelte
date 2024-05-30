<script>
  import Scroller from "@sveltejs/svelte-scroller";
  let index = 0;
  export let query = "h2";  
  export let contents = [];
  $: highlight = contents[index];
</script>

<!-- TODO provide some sturcutre of questions -->
<!-- maybe each question is a new svelte object with specified type -->
<!-- and a common name such that we can provide a target to the specific ID of each question -->

<!-- TODO want TOC to hide when viewport too small -->


<Scroller bind:index bind:query>
  <div slot="background"></div>
  <div slot="foreground">
    <div class="row content">
      <div class="d-none d-lg-block col-md-1 col-xl-2"></div>
      <div class="col-12 col-md-8 col-xl-7">
        <slot {index}></slot>
      </div>
      <div class="d-none d-md-block col-md-3 offset-md-8 offset-lg-9 fixed-top toc">
        <small>
          <strong>Contents</strong>
          {#if contents}
            {#each contents as c}
              {#if c === highlight}
                <p>
                  <a href="#" class="primary">{c}</a> <!-- TODO replace href="#" with some specific id -->
                </p>
              {:else}
                <p>
                  <a href="#" class="secondary">{c}</a>
                </p>
              {/if}
            {/each}
          {/if}
        </small>
      </div>
    </div>
  </div>
</Scroller>

<style>
  .content {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
  .toc p {
    margin: 0;
  }
  .toc a {
    text-decoration: none;
  }
</style>
