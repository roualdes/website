<script>
  import Smile from "$lib/Smile.svelte";
  export let id = "";
  export let title = "";
  export let value = "";
  export let options = [""];
  export let correct = false;
  export let solution = "";
  export let submiton = "";
</script>


<div class="field">
  <label for={id}>
    <p>
      <strong>{title}. </strong>
      <slot/>
    </p>
  </label>
  <div class="control select is-fullwidth">
      <select on:input {id} name="{id}" >
        {#if submiton !== "" && !correct}
          <option selected>{solution}</option>
        {:else}
          {#each options as option}
            {#if option === value}
              <option selected value = {value}>{option}</option>
            {:else}
              <option>{option}</option>
            {/if}
          {/each}
        {/if}
      </select>
  </div>
  {#if correct}
    <label class="label">
      <span class="label-text-alt">
        <small>submit on {submiton}</small>
      </span>
      <span class="label-text-alt"><Smile color = {correct ? "success" : "fail"}/></span>
    </label>
  {/if}
</div>
