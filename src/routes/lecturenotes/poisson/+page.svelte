<script>
  import DirectionPicker from '$lib/lecturenotes/DirectionPicker.svelte';
  import DirectionSymbol from '$lib/lecturenotes/DirectionSymbol.svelte';
  import { outcomesPredicate } from '$lib/lecturenotes/outcomesPredicate.js';

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
        lower: 0,
        upper: 25,
        digits: 1,
        speed: "medium",
      };

  let x = 5,
      direction = "le",
      hide_direction_picker = true,
      prob;

  let x_opts = {
    lower: 0,
    upper: 30,
    digits: 0,
    speed: "fast"
  };


  function calculateProbability(o, d, lambda) {
    let prob;
    if (d === "eq") {
      prob = jStat.poisson.pdf(o, lambda);
    }

    if (d === "le") {
      prob = jStat.poisson.cdf(o, lambda);
    }

    if (d === "ge") {
      prob = 1 - jStat.poisson.cdf(o, lambda);
    }

    return String(Math.round(prob * 100) / 100);
  }

  $: {

    let outcomes = jStat.seq(0, 30, 31);
    let data = outcomes.map(x => {
      return {
        x: x,
        fx: jStat.poisson.pdf(x, lambda)
      }
    });

    density?.firstChild?.remove();
    density?.append(Plot.plot(
      {
        width: 600,
        height: 350,
        x: {domain: outcomes, label: "Outcomes", ticks: 31},
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
            fx: jStat.poisson.pdf(o, lambda)
          }
        });

    prob = calculateProbability(x, direction, lambda);

    calculator?.firstChild?.remove();
    calculator?.append(Plot.plot(
      {
        width: 600,
        height: 350,
        x: {domain: outcomes, label: "Outcomes", ticks: 31},
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
  <h1>Poisson Distribution</h1>

  <Section title = {contents[0]}/>
  <p>
    TBA
  </p>

  <Section title = {contents[1]}/>

  <p>
    The density function for the Poisson distribution is

    <Katex displayMode = {true}
           math={"f(x | \\lambda ) = \\frac{e^{-\\lambda}\\lambda^x}{x!}"}/>
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
           math="f(x | \lambda = {lambda}) = \frac {'{'} e^ {'{'} -{lambda} {'}'} {lambda}^x {'}'} {'{'} x! {'}'}" />

  </p>

  <Section title = {contents[2]}/>

  <ol>
    <li>
      A seismologist has been studying the frequency of small earthquakes in a
      particular geologically active region. Over the course of several years,
      she determines that on average, there are 3.5 small earthquakes per day in
      this region.

      <ol type = "a">
        <li>
          What is the probability that on a given day there are exactly 2
          earthquakes?
        </li>

        <li>
          What is the probability that on a given day there are 3 or more
          earthquakes?
        </li>

        <li>
          Over the course of a week (7 days), what's the probability that there
          is at most 5 earthquakes?
        </li>
      </ol>
    </li>

    <li>
      You are a future math teacher preparing lesson plans on the Poisson
      distribution. You decide to use real-world data from the school library's
      study room booking system as a teaching tool.  Records from the library
      indicate that, on average, 5 students request to book a study room every
      hour. Assuming that the number of booking requests follows a Poisson
      distribution:

      <ol type = "a">
        <li>
          What is the probability that exactly 7 students will request to book a
          study room in a given hour?
        </li>

        <li>
          What is the probability that 3 or fewer students will request to book
          a study room in a given hour?
        </li>

        <li>
          During a two-hour span, what is the probability that more than 10
          students will request to book a study room?
        </li>
      </ol>
    </li>

    <li>
      Consider a busy intersection in a city. Past data has shown that, on
      average, 5 vehicles per hour make a wrong turn at this intersection due to
      a lack of clear signage.
      <ol type = "a">
        <li>
          What is the probability that exactly 3 vehicles will make a wrong turn
          in the next hour?
        </li>

        <li>
          What is the probability that no vehicles will make a wrong turn in the
          next hour?
        </li>

        <li>
          If the city's engineering department plans to monitor the intersection
          for a 4-hour period, what is the probability that more than 20
          vehicles will make a wrong turn during this time?
        </li>
      </ol>
    </li>

    <li>
      In a chemical processing plant, a specific reactor is known to have a rare
      malfunction due to random impurities in the reactants. Over the past
      several years, data has shown that this malfunction occurs on average 1.5
      times every 100 hours of operation.  A new batch of reactant is being
      processed in this reactor for a continuous 48-hour run.

      <ol type = "a">
        <li>
          What is the probability that there will be no malfunctions during this
          48-hour run?
        </li>

        <li>
          What is the probability that there will be at least one malfunction
          during this 48-hour run?
        </li>

        <li>
          What is the probability that there will be more than two malfunctions
          during this 48-hour run?
        </li>
      </ol>
    </li>
  </ol>

  <Section title = {contents[3]}/>

  <p>
    <Katex math = "X \sim "/>Poisson(
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
    page = "Poisson distribution"
    date = "06/10/2023"
    url = "https://en.wikipedia.org/wiki/Poisson_distribution"
    />
</Lab>
