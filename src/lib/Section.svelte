<script>
  import { makeID } from '$lib/makeID.js';
  export let title="";
</script>

<h2 id="{makeID(title)}">{title}</h2>
