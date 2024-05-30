<script>
  import Alert from '$lib/Alert.svelte';
  export let direction = "le";
  export let hidden = true;
</script>

<Alert type = "light" bind:hidden>
  <fieldset>
    <label for="le">
      <input type="radio" id="le" value="le"
             checked = {direction === "le"}
             on:change = {() => direction = "le"}>
      less than or equal
    </label>
    <label for="eq">
      <input type="radio" id="eq" value="eq"
             checked = {direction === "eq"}
             on:change = {() => direction = "eq"}>
      equal
    </label>
    <label for="ge">
      <input type="radio" id="ge" value="ge"
             checked = {direction === "ge"}
             on:change = {() => direction = "ge"}>
      greater than or equal
    </label>
  </fieldset>
</Alert>
