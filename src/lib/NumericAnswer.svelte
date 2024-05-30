<script>
  import Smile from "$lib/Smile.svelte";
  export let id;
  export let rows = 1;
  export let placeholder = "";
  export let min = "";
  export let max = "";
  export let step = "";
  export let title = "";
  export let correct = false;
  export let submiton = "";
  export let value = "";
</script>

<div class="field">
  <label for={id}>
    <p>
      <strong>{title}. </strong>
      <slot/>
    </p>
  </label>
  <div class="control">
    <input type="number"
              on:input
              id="{id}" name="{id}" {rows} {placeholder} {min} {max} {step} {value}/>
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
