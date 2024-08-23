<script>
    import Katex from '$lib/Katex.svelte';
    import Scrubbable from '$lib/Scrubbable.svelte';

    import jstat from "jstat";
    const { jStat} = jstat;

    import * as Plot from '@observablehq/plot';

    let density;

    let a = 1,
    a_opts = {
        lower: 1,
        upper: 10,
        digits: 0,
        speed: "fast",
      };

    let b = 15,
    b_opts = {
        lower: 11,
        upper: 20,
        digits: 0,
        speed: "fast",
      };

    $: { 
        
        let outcomes = jStat.seq(a, b, b - a + 1);
        let data = outcomes.map(o => {
            return {
                x: o,
                fx: 1/(b - a + 1)
            }
        });

        density?.firstChild?.remove();
        density?.append(Plot.plot(
            {
                width: 450,
                height: 350,
                x: {domain: outcomes, label: "Outcomes", ticks: b - a},
                y: {label: "Density", ticks: 10, tickFormat: d => d.toFixed(2)},
                marks: [
                    Plot.dot(data, {x: "x", y: "fx", fill: "black"})
                ]
            }
        ));
    }

</script>

<div>
    <p>A density function estimates the probability of outcomes.
        For example, the Uniform Distribution's density function is 
        <Katex displayMode = {true}
        math={"f(x | a, b) = \\frac{1}{b - a + 1}"}/>
        In the plot below, the density of each outcome changes depending on
        <Katex math="a"/>
        <Scrubbable bind:x={a} {...a_opts}/> and
        <Katex math="b"/>
        <Scrubbable bind:x={b} {...b_opts}/>.
        </p>

        <div bind:this={density}
        style="position: relative; width: 450px; height: 350px;">
    </div>
</div>