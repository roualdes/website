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

 let lambda = 1.5,
     lambda_opts = {
         lower: 0.1,
         upper: 25,
         digits: 1,
         speed: "medium",
     };

 let x = 1,
     direction = "le",
     hide_direction_picker = true,
     prob;

 let x_opts = {
     lower: 0,
     upper: 25,
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

 function calculateProbability(o, d, lambda) {
     let prob;
     if (d === "eq") {
         prob = 0
     }

     if (d === "le") {
         prob = jStat.exponential.cdf(o, lambda);
     }

     if (d === "ge") {
         prob = 1 - jStat.exponential.cdf(o, lambda);
     }

     return String(Math.round(prob * 100) / 100);
 }

 $: {

     let m = jStat.exponential.mean(lambda);
     let s = Math.sqrt(jStat.exponential.variance(lambda));

     let outcomes = jStat.seq(0, m + 5 * s, 201);
     let data = outcomes.map(o => {
         return {
             x: o,
             fx: jStat.exponential.pdf(o, lambda)
         }
     });

     density?.firstChild?.remove();
     density?.append(Plot.plot(
         {
             width: 600,
             height: 350,
             x: {domain: [0, m + 5 * s], label: "Outcomes"},
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
                 fx: jStat.exponential.pdf(o, lambda)
             }
         });

     prob = calculateProbability(x, direction, lambda);

     calculator?.firstChild?.remove();
     calculator?.append(Plot.plot(
         {
             width: 600,
             height: 350,
             x: {domain: [0, m + 5 * s], label: "Outcomes"},
             y: {label: "Density"},
             marks: [
                 Plot.line(data, {x: "x", y: "fx"}),
                 Plot.areaY(shade, {x: "x", y: "fx", fillOpacity: 1, fill: "black"})
             ]
         }
     ));
 }
</script>

<Lab bind:contents {licensed}>
    <h1>Exponential Distribution</h1>

    <Section title = {contents[0]}/>
    <p>
        TBA
    </p>

    <Section title = {contents[1]}/>

    <p>
        The density function for the Exponential distribution is

        <Katex displayMode = {true}
               math={"f(x | \\lambda ) = \\lambda e^{-\\lambda  x}"}/>
    </p>


    <p>
        The density function for the Poisson distribution depends on the rate parameter
        <Katex math="\lambda = "/> <Scrubbable bind:x = {lambda} {...lambda_opts}/>.
    </p>

    <div bind:this={density}
         style="position: relative; width: 600px; heigth: 350px;">
    </div>

    <p>
        Specific to the plot above, the density function is
        <Katex displayMode = {true}
               math="f(x | \lambda = {lambda}) = {lambda} e^ {'{'} -{lambda} x {'}'}" />

    </p>

    <Section title = {contents[2]}/>

    <ol>
        <li>
            In a mechanical engineering workshop, ball bearings are used
            in various machinery. The lifetime, <Katex math = "T"/> (in hours), of a
            specific type of ball bearing is known to follow an
            Exponential distribution with a mean lifetime of 5,000 hours.

            <ol type = "a">
                <li>
                    What is the probability that one randomly selected ball
                    bearing will last more than 6,000 hours?
                </li>

                <li>
                    What is the probability that one randomly selected ball
                    bearing will last less than 2,500 hours?
                </li>
            </ol>
        </li>

        <li>
            A major manufacturer of capacitors claims that their latest model, the UltraCap 3000, has an average lifetime of 5,000 hours before it fails. This lifetime is exponentially distributed. Capacitors that fail prematurely can cause significant issues in electrical circuits, so understanding their reliability is crucial.

            <ol type = "a">
                <li>
                    What is the probability that the UltraCap 3000 will last
                    more than 7,000 hours before failing?
                </li>

                <li>
                    If an electrical engineer installs three UltraCap 3000
                    capacitors in parallel in a circuit (assuming they operate
                    independently), what is the probability that at least one
                    will fail within 3,000 hours?
                </li>

                <li>
                    On average, how long will it take for 10% of these capacitors to fail?
                </li>
            </ol>
        </li>

        <li>
            Civil engineers are tasked with ensuring that bridges are safe
            and functional for the duration of their expected lifetimes. An
            old city bridge is being inspected, and it is known from past
            data that the time (in years) until a significant structural
            defect appears on this type of bridge follows an Exponential
            distribution.  Suppose the average time until a significant
            defect appears is 20 years.

            <ol type = "a">

                <li>
                    What is the probability that a significant defect will appear in the first 10 years?
                </li>

                <li>
                    How long until there is a 50% chance of a significant defect appearing?
                </li>
            </ol>
        </li>

        <li>
            Suppose a particular radioactive isotope has a mean lifetime of
            <Katex math = "\tau"/> seconds. The time <Katex math = "T"/>
            until the isotope decays follows an Exponential distribution
            with parameter <Katex math = "\lambda = 1 / \tau"/>.

            <ol type = "a">
                <li>
                    What is the probability that the isotope decays in less than
                    <Katex math = "\tau / 2"/> seconds?
                </li>

                <li>
                    If a physicist has a sample containing 1000 such isotopes,
                    approximately how many isotopes would she expect to decay
                    within <Katex math = "\tau / 2"/> seconds?
                </li>
            </ol>
        </li>

        <li>

            Imagine you are a math educator and you've just introduced the
            concept of the Exponential distribution to your students. To
            emphasize real-world applications, you provide the following
            example: The time between a student asking a question in class
            follows an Exponential distribution with a mean of 10 minutes.

            <ol type = "a">
                <li>
                    What is the probability that the time between two questions
                    is less than 5 minutes?
                </li>

                <li>
                    What is the probability that the time between two questions
                    is between 5 and 15 minutes?
                </li>
            </ol>
        </li>
    </ol>

    <Section title = {contents[3]}/>

    <p>
        <Katex math = "X \sim\;"/>Exponential(
        <Katex math = "\lambda = "/> <Scrubbable bind:x = {lambda} {...lambda_opts} />).

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
        page = "Exponential distribution"
        date = "17/10/2023"
        url = "https://en.wikipedia.org/wiki/Exponential_distribution"
    />
</Lab>
