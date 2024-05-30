<script>
  import Katex from '$lib/Katex.svelte';
  export let x;
  export let lower = 0;
  export let upper = 1;
  export let speed = "slow";
  export let digits = 2;
  // TODO add a11y support: https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
  // TODO add double click to enter

  function clip(x, lower, upper) {
    if (x >= upper) {
      x = upper;
    }
    if (x <= lower) {
      x = lower;
    }
    return x;
  }

  function touchdrag(e) {
    if (e.targetTouches.length !== 1) return;
    let initialposition = e.targetTouches[0].clientX;
    let denom = { slow: 250, medium: 50, fast: 10 };
    let initialvalue = x;
    let decimals = Math.pow(10, digits);

    if (e.cancelable) e.preventDefault();

    function touchListener(e) {
      if (e.targetTouches.length !== 1) return;
      if (e.cancelable) e.preventDefault();

      let diff = Math.ceil(e.targetTouches[0].clientX - initialposition);
      let delta =
          Math.sign(diff) * Math.pow(Math.abs(diff) / denom[speed], 1.6);
      x =
        Math.round(
          clip(initialvalue + delta, lower, upper) * decimals
        ) / decimals;
    }

    document.addEventListener("touchmove", touchListener, {
      passive: false
    });

    document.ontouchend = (e) => {
      document.removeEventListener("touchmove", touchListener);
    };

    document.ontouchcancel = (e) => {
      document.removeEventListener("touchmove", touchListener);
    };
  }

  function mousedrag(e) {
    let initialposition = e.clientX;
    let denom = { slow: 250, medium: 50, fast: 10 };
    let initialvalue = x;
    let decimals = Math.pow(10, digits);

    e.preventDefault();

    function mouseListener(e) {
      if (e.which === 1) {
        let diff = Math.ceil(e.clientX - initialposition);
        let delta =
            Math.sign(diff) *
            Math.pow(Math.abs(diff) / denom[speed], 1.6);
        x =
          Math.round(
            clip(initialvalue + delta, lower, upper) * decimals
          ) / decimals;
      }
    }

    document.addEventListener("mousemove", mouseListener, {
      passive: false
    });

    document.onmouseup = (e) => {
      document.removeEventListener("mousemove", mouseListener);
    };

    document.onblur = (e) => {
      document.removeEventListener("mousemove", mouseListener);
    };
  }
</script>

<span
  class="unhighlightable"
  style="touch-action: pan-x;"
  on:touchstart={(e) => touchdrag(e)}
  on:mousedown={(e) => mousedrag(e)}
  >
  <span style="border-bottom: 1px dotted;"><Katex math = "\, {String(x)} \," /></span>
</span>
