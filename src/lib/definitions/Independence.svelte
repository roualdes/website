<script>
    import Katex from '$lib/Katex.svelte';
</script>

<div>
    <p>
        Let <Katex math="A, B \subseteq S"/>. <Katex math="A"/> and <Katex math="B"/> are independent if and only if
        <Katex displayMode={true}
        math="P[A \cap B] = P[A] * P[B]"/>
        In other words, knowing <Katex math="A"/> does not affect the probability of <Katex math="B"/>, 
        and knowing <Katex math="B"/> does not affect the probability of <Katex math="A"/>.
    </p>
</div>