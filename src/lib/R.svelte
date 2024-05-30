<script>
  import hljs from 'highlight.js/lib/core';
  import r from 'highlight.js/lib/languages/r';
  hljs.registerLanguage('r', r);
  import 'highlight.js/styles/atom-one-light.css';

  $: highlightString = hljs.highlight( code, { language: 'r' }).value

  export let code;
  export let displayMode = false;
</script>

{#if displayMode}
  <pre>{@html highlightString}</pre>
{:else}
  <code>{@html highlightString}</code>
{/if}
