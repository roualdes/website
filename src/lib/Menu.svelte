<script>
  export let open = false;
</script>

<a class:open on:click={() => open = !open}>
  <svg class:open aria-hidden="true" focusable="false" role="img"
       viewBox="0 0 24 24" height="16px"
       fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
       stroke-linejoin="round">
    <line id="top" x1="3" y1="6" x2="21" y2="6"></line>
    <line id="middle" x1="3" y1="12" x2="21" y2="12"></line>
    <line id="bottom" x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
</a>

<style>
  svg {
    min-height: 24px;
    transition: transform 0.5s ease-in-out;
  }

  svg line {
    stroke: currentColor;
    stroke-width: 2;
    transition: transform 0.5s ease-in-out
  }


  .open svg {
    transform: scale(0.7)
  }

  .open #top {
    transform: translate(6px, 0px) rotate(45deg)
  }

  .open #middle {
    opacity: 0;
  }

  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg)
  }
</style>
