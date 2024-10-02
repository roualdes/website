<script>
    import Katex from '$lib/Katex.svelte';
</script>

<div>
    <p>A distribution is a set function that returns a number between 0 and 1 inclusive.
    <Katex displayMode = {true}
    math="p \in [0, 1]"/>
    For example:
    <Katex displayMode = {true}
    math="S = \lbrace A, B, C \rbrace"/>
    <Katex displayMode = {true}
    math="P[A] = 0.3"/>
    <Katex displayMode = {true}
    math="P[B] = 0.4"/>
    <Katex displayMode = {true}
    math="P[C] = 0.4"/>
    </p>
</div>