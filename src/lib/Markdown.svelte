<script>
  import { Marked } from 'marked';
  
  import markedKatex from 'marked-katex-extension';

  import { markedHighlight } from "marked-highlight";
  import hljs from 'highlight.js/lib/core';
  import 'highlight.js/styles/a11y-light.css';

  import julia from 'highlight.js/lib/languages/julia';
  hljs.registerLanguage('julia', julia);

  import DOMPurify from 'isomorphic-dompurify';
  
  export let source;
  export let language;

  const mark = new Marked(
    markedHighlight({
      highlight(code, l) {
        return hljs.highlight(code, { language: language }).value;
      }
    }));

    mark.use(markedKatex({throwOnError: false}));

  $: mdString = DOMPurify.sanitize(mark.parse(source));
</script>


{@html mdString}
