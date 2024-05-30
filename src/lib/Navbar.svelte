<script>
  import Menu from '$lib/Menu.svelte';
  export let sidebar = false;
</script>


<header>
  <nav>
    <ul>
      <li>
        <Menu bind:open={sidebar}/>
      </li>
      <li>
        <a class="secondary" href="/">Edward A. R<img src="/favicon.png" style="width: 0.7em; height: auto; display: inline; position: relative; "/>ualdes</a>
      </li>
    </ul>
  </nav>
</header>
