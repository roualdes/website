<script>
  import Smile from "$lib/Smile.svelte";
  export let id;
  export let rows = 1;
  export let placeholder = "";
  export let maxlength = 500;
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
    <textarea type="text"
              on:keyup
              class = "textarea"
              id="{id}" name="{id}" {rows} {placeholder} {maxlength} {value}/>
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

<style>
  textarea {
    resize: vertical;
  }
</style>
