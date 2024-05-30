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

  let K = 10,
      K_opts = {
        lower: 1,
        upper: 30,
        digits: 0,
        speed: "fast",
      };

  let p = 0.5,
      p_opts = {
        lower: 1e-5,
        upper: 1 - 1e-5,
        digits: 2,
        speed: "medium",
      };

  let x = 5,
      direction = "le",
      hide_direction_picker = true,
      prob;

  let x_opts = {
    lower: 0,
    upper: K,
    digits: 0,
    speed: "fast"
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

  function calculateProbability(o, d, K, p) {
    let prob;
    if (d === "eq") {
      prob = jStat.binomial.pdf(o, K, p);
    }

    if (d === "le") {
      prob = jStat.binomial.cdf(o, K, p);
    }

    if (d === "ge") {
      prob = 1 - jStat.binomial.cdf(o, K, p);
    }

    return String(Math.round(prob * 100) / 100);
  }

  $: {

    x_opts["upper"] = K;

    let outcomes = jStat.seq(0, K, K + 1);
    let data = outcomes.map(o => {
      return {
        x: o,
        fx: jStat.binomial.pdf(o, K, p)
      }
    });

    // TODO why not showing .50/.50 for K = 1 and p = 0.5
    density?.firstChild?.remove();
    density?.append(Plot.plot(
      {
        width: 600,
        height: 350,
        x: {domain: outcomes, label: "Outcomes", ticks: K},
        y: {label: "Density"},
        marks: [
          Plot.dot(data, {x: "x", y: "fx", fill: "black"})
        ]
      }
    ));

    let shade = outcomes
        .filter(o => outcomesPredicate(o, direction, x))
        .map(o => {
          return {
            x: o,
            fx: jStat.binomial.pdf(o, K, p)
          }
        });

    prob = calculateProbability(x, direction, K, p);

    calculator?.firstChild?.remove();
    calculator?.append(Plot.plot(
      {
        width: 600,
        height: 350,
        x: {domain: outcomes, label: "Outcomes", ticks: K},
        y: {label: "Density"},
        marks: [
          Plot.dot(data, {x: "x", y: "fx", fill: "black"}),
          Plot.ruleX(shade, {x: "x", y: "fx"})
        ]
      }
    ));
  }
</script>

<Lab bind:contents {licensed}>
  <h1>Binomial Distribution</h1>

  <Section title = {contents[0]}/>
  <p>
    TBA
  </p>

  <Section title = {contents[1]}/>

  <p>
    The density function for the Binomial distribution is

    <Katex displayMode = {true}
           math="f(x | K, p) = {'{'} K \choose x {'}'} p^x (1 - p) ^ {'{'} (K - x) {'}'}"/>
  </p>


  <p>
    Consider the density function for the Binomial distribution formed by summing

    <Katex math="K = "/> <Scrubbable bind:x = {K} {...K_opts}/>

    independent Bernoulli random variables, each with probability

    <Katex math="p = "/> <Scrubbable bind:x = {p} {...p_opts}/>

    of observing a <Katex math="1"/>.
  </p>

  <div bind:this={density}
       style="position: relative; width: 600px; heigth: 350px;">
  </div>

  <p>
    Specific to the plot above, the density function is
    <Katex displayMode = {true}
           math="f(x | K = {K}, p = {p}) = {'{'} {K} \choose x {'}'} {p}^x (1 - {p}) ^ {'{'} (K - x) {'}'}" />

  </p>

  <Section title = {contents[2]} />

  <ol>
    <li>
      Suppose an electronics manufacturing company produces microchips that are
      used in various electrical devices. Based on quality control tests, it's
      found that 95% of the microchips are free from defects, meaning they
      operate as expected. An electrical engineer randomly selects 10 microchips
      from the production line to use in a prototype device.
      <ol type = "a">

        <li>
          What is the probability that all 10 microchips selected are free from
          defects?
        </li>

        <li>
          What is the probability that exactly 8 out of the 10 microchips
          selected are free from defects?
        </li>
      </ol>
    </li>

    <li>
      A city has 50 bridges that need to be inspected for safety. From past
      data, it is known that any given bridge has a 10% chance of failing the
      inspection due to significant wear and tear.

      <ol type = "a">
        <li>
          What is the probability that exactly 5 bridges will fail the inspection?
        </li>

        <li>
          What is the probability that at least 3 bridges will fail the inspection?
        </li>
      </ol>
    </li>

    <li>
      At a certain school, 70% of students prefer chocolate ice cream over
      vanilla. If a random sample of 10 students is taken,

      <ol type = "a">
        <li>
          what is the probability that exactly 7 students prefer chocolate?
        </li>

        <li>
          what is the probability that at least 8 students prefer chocolate?
        </li>
      </ol>
  </ol>

  <Section title = {contents[3]}/>

  <p>
    <Katex math = "X \sim "/>Binomial(
    <Katex math = "K = "/> <Scrubbable bind:x = {K} {...K_opts} />,
    <Katex math = "p = "/> <Scrubbable bind:x = {p} {...p_opts} />).

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
