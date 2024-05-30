<script>
  export let type = "primary";
  export let hidden = false;
  function toggle() {
    hidden = !hidden;
  }
</script>

<div class="{'alert alert-dismissible alert-' + type}" role="alert" {hidden}>
  <slot/>
  <button type="button" class="btn-close" aria-label="Close" on:click={toggle}></button>
</div>
