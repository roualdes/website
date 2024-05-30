<script>
  import hljs from 'highlight.js/lib/core';
  import stan from 'highlight.js/lib/languages/stan';
  hljs.registerLanguage('stan', stan);
  import 'highlight.js/styles/atom-one-light.css';

  $: highlightString = hljs.highlight( code, { language: 'stan' }).value

  export let code;
  export let displayMode = false;
</script>

{#if displayMode}
<pre>{@html highlightString}</pre>
{:else}
  <code>{@html highlightString}</code>
{/if}
