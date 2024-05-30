<script>
 import DirectionPicker from '$lib/lecturenotes/DirectionPicker.svelte';
 import DirectionSymbol from '$lib/lecturenotes/DirectionSymbol.svelte';

 import Lab from '$lib/Lab.svelte';
 import Section from '$lib/Section.svelte';
 import Definition from '$lib/Definition.svelte';
 import Katex from '$lib/Katex.svelte';
 import RefWikipedia from '$lib/RefWikipedia.svelte';

 import Scrubbable from '$lib/Scrubbable.svelte';

 import jstat from "jstat";
 const { jStat } = jstat;

 import * as Plot from '@observablehq/plot';

 export let contents = ["Introduction",
                        "Density function",
                        "Examples",
                        "Calculator",
                        "References"];

 let licensed = true;

 let density,
     calculator;

 let a = 2,
     a_opts = {
         lower: 1.1,
         upper: 50,
         digits: 1,
         speed: "fast",
     };

 let b = 2,
     b_opts = {
         lower: 1.1,
         upper: 50,
         digits: 1,
         speed: "fast",
     };

 let x = 0.5,
     direction = "le",
     hide_direction_picker = true,
     prob;

 let x_opts = {
     lower: 0,
     upper: 1,
     digits: 2,
     speed: "medium"
 };

 function outcomesPredicate(o, d, x) {
     if (d === "eq") {
         return o === x;
     }

     if (d === "le") {
         return o <= x;
     }

     if (d === "ge") {
         return o >= x;
     }
 }

 function calculateProbability(o, d, a, b) {
     let prob;
     if (d === "eq") {
         prob = jStat.beta.pdf(o, a, b);
     }

     if (d === "le") {
         prob = jStat.beta.cdf(o, a, b);
     }

     if (d === "ge") {
         prob = 1 - jStat.beta.cdf(o, a, b);
     }

     return String(Math.round(prob * 100) / 100);
 }

 $: {

     let outcomes = jStat.seq(0, 1, 201);

     let data = outcomes.map(o => {
         return {
             x: o,
             fx: jStat.beta.pdf(o, a, b)
         }
     });

     density?.firstChild?.remove();
     density?.append(Plot.plot(
         {
             width: 600,
             height: 350,
             x: {label: "Outcomes"},
             y: {label: "Density"},
             marks: [
                 Plot.line(data, {x: "x", y: "fx"})
             ]
         }
     ));

     let shade = outcomes
         .filter(o => outcomesPredicate(o, direction, x))
         .map(o => {
             return {
                 x: o,
                 fx: jStat.beta.pdf(o, a, b)
             }
         });

     prob = calculateProbability(x, direction, a, b);

     calculator?.firstChild?.remove();
     calculator?.append(Plot.plot(
         {
             width: 600,
             height: 350,
             x: {label: "Outcomes"},
             y: {label: "Density"},
             marks: [
                 Plot.line(data, {x: "x", y: "fx"}),
                 Plot.ruleX(shade, {x: "x", y: "fx", })
             ]
         }
     ));
 }
</script>

<Lab bind:contents {licensed}>
    <h1>Beta Distribution</h1>

    <Section title = {contents[0]}/>
    <p>
        TBA
    </p>

    <Section title = {contents[1]}/>

    <p>
        The density function for the Beta distribution is

        <Katex displayMode = {true}
               math={"f(x | a, b) = \\Beta(a, b)^{-1} x^{a-1}(1 - x)^{b-1}"}/>
    </p>


    <p>
        Consider the density function for the Binomial distribution formed by summing

        <Katex math="a = "/> <Scrubbable bind:x = {a} {...a_opts}/>

        independent Bernoulli random variables, each with probability

        <Katex math="b = "/> <Scrubbable bind:x = {b} {...b_opts}/>

        of observing a <Katex math="1"/>.
    </p>

    <div bind:this={density}
         style="position: relative; width: 600px; heigth: 350px;">
    </div>

    <p>
        Specific to the plot above, the density function is
        <Katex displayMode = {true}
               math="f(x | a = {a}, b = {b}) = {a} {b}" />

    </p>

    <p>
        The Beta distribution has expectation {Math.round(100 * a / (a + b)) / 100} and mode {Math.round(100 * (a - 1) / (a + b - 2)) / 100}.
    </p>

    <Section title = {contents[2]} />


    <Section title = {contents[3]}/>

    <p>
        <Katex math = "X \sim "/>Beta(
        <Katex math = "a = "/> <Scrubbable bind:x = {a} {...a_opts} />,
        <Katex math = "b = "/> <Scrubbable bind:x = {b} {...b_opts} />).

        <Katex math = {"\\mathbb{P}[X "} />
        <DirectionSymbol bind:direction
                         bind:hide_direction_picker />
        <Scrubbable bind:x = {x} {...x_opts} />
        <Katex math = "] = {prob}" />.
    </p>

    <DirectionPicker bind:direction
                     bind:hidden = {hide_direction_picker} />

    <div bind:this={calculator}
         style="position: relative; width: 600px; heigth: 350px;">
    </div>

    <Section title = {contents[4]}/>
    <RefWikipedia
        page = "Binomial distribution"
        date = "02/10/2023"
        url = "https://en.wikipedia.org/wiki/Binomial_distribution"
    />
</Lab>
