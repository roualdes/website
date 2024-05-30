<script>
  export let title="";
  export let url = "";
  export let doi = "";
  export let year = "";
  export let author = "";
  export let source = "";
</script>

<span>
  {author} {title} {source} ({year}) <a href="{url}">DOI: {doi}</a>
</span>
