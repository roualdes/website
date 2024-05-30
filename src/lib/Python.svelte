<script>
  import hljs from 'highlight.js/lib/core';
  import python from 'highlight.js/lib/languages/python';
  hljs.registerLanguage('python', python);
  import 'highlight.js/styles/a11y-light.css';

  $: highlightString = hljs.highlight( code, { language: 'python' }).value

  export let code;
  export let displayMode = false;
</script>

{#if displayMode}
  <pre>{@html highlightString}</pre>
{:else}
  <code>{@html highlightString}</code>
{/if}
