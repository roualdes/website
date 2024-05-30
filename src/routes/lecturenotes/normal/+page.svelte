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
  
  let mu = 1.5,
      mu_opts = {
        lower: -25,
        upper: 25,
        digits: 1,
        speed: "medium",
      };

  let sigma = 3,
      sigma_opts = {
        lower: 0.1,
        upper: 20,
        digits: 1,
        speed: "medium"
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

  function calculateProbability(o, d, m, s) {
    let prob;
    if (d === "eq") {
      prob = 0
    }

    if (d === "le") {
      prob = jStat.normal.cdf(o, m, s);
    }

    if (d === "ge") {
      prob = 1 - jStat.normal.cdf(o, m, s);
    }

    return String(Math.round(prob * 100) / 100);
  }
  
  $: {

    let m = jStat.normal.mean(mu, sigma);
    let s = Math.sqrt(jStat.normal.variance(mu, sigma));

    let outcomes = jStat.seq(m - 5 * s, m + 5 * s, 301);
    let data = outcomes.map(o => {
      return {
        x: o,
        fx: jStat.normal.pdf(o, mu, sigma)
      }
    });

    density?.firstChild?.remove();
    density?.append(Plot.plot(
      {
        width: 600,
        height: 350,
        x: {domain: [m - 5 * s, m + 5 * s], label: "Outcomes"},
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
            fx: jStat.normal.pdf(o, mu, sigma)
          }
        });

    prob = calculateProbability(x, direction, mu, sigma);

    calculator?.firstChild?.remove();
    calculator?.append(Plot.plot(
      {
        width: 600,
        height: 350,
        x: {domain: [m - 5 * s, m + 5 * s], label: "Outcomes"},
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
  <h1>Normal Distribution</h1>

  <Section title = {contents[0]}/>
  <p>
    TBA
  </p>

  <Section title = {contents[1]}/>

  <p>
    The density function for the Normal distribution is

    <Katex displayMode = {true}
           math={"f(x | \\mu, \\sigma ) = \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-(x - \\mu)^2 / (2\\sigma^2)}"}/>
  </p>

  
  <p>
    The density function for the Normal distribution depends on the parameters
    <Katex math="\mu = "/> <Scrubbable bind:x = {mu} {...mu_opts}/> and

    <Katex math="\sigma = "/> <Scrubbable bind:x = {sigma} {...sigma_opts}/>
  </p>

  <div bind:this={density}
       style="position: relative; width: 600px; heigth: 350px;">
  </div>

  <p>
    Specific to the plot above, the density function is
    
    <Katex displayMode = {true}
           math="f(x | \mu = {mu}, \sigma = {sigma}) = \frac{'{'} 1 {'}'} {'{'} \sqrt{'{'} 2\pi{sigma}^2 {'}'} {'}'} e^ {'{'} -(x - {mu})^2 / (2 \cdot {sigma}^2) {'}'}" />

  </p>

  <Section title = {contents[2]}/>

  


  <ol>

    <li>
      In a construction project, engineers are using steel rebars for
      reinforcement. The breaking strength of these rebars is normally
      distributed with a mean breaking strength of 50,000 pounds per
      square inch (psi) and a standard deviation of 2,000 psi.

      <ol type = "a">
        <li>
          What is the probability that a randomly selected rebar will
          have a breaking strength of less than 48,000 psi?
        </li>

        <li>
          To ensure that at least 90% of the rebars in a batch meet a
          certain strength requirement, what should be the minimum
          breaking strength specification that engineers should set?
        </li>
      </ol>
    </li>
    
    <li>
      Geologists are studying the size of sedimentary rock particles
      in a particular geological formation. They have found that the
      size of these particles follows a Normal distribution with a
      mean (μ) of 10 millimeters and a standard deviation (σ) of 2
      millimeters.
      
      <ol type = "a">
        <li>
          What is the probability that a randomly selected sedimentary
          rock particle from this formation has a size between 8 and
          12 millimeters?
        </li>

        <li>
          What is the probability that a randomly selected sedimentary
          rock particle from this formation has a size bigger than 14
          millimeters?
        </li>
      </ol>
    </li>

    <li>
      In a physics laboratory, the time it takes for a particle to
      travel through a specific region follows a Normal distribution
      with a mean of 5.2 milliseconds and a standard deviation of 0.8
      milliseconds.

      <ol type = "a">
        <li>
          What is the probability that a randomly selected particle
          will take less than 4 milliseconds to travel through this
          region?
        </li>

        <li>
          Find the probability that a particle will take more than 6
          milliseconds to travel through the region.
        </li>

        <li>
          If the laboratory needs to ensure that at least 90% of
          particles pass through the region within a certain time,
          what should be the maximum allowable time for this process?
        </li>
      </ol>
    </li>

    <li>
      In civil engineering, the compressive strength of concrete is an
      essential parameter. Suppose the compressive strength of a
      certain type of concrete follows a Normal distribution with a
      mean (average) strength of 30 megapascals (MPa) and a standard
      deviation of 5 MPa. Civil engineers need to ensure that the
      concrete used in a construction project has a compressive
      strength of at least 25 MPa to meet safety requirements.

      <ol type = "a">
        <li>
          What is the probability that a randomly selected sample of
          this concrete will have a compressive strength of less than
          25 MPa?
        </li>

        <li>
          If a civil engineering project requires concrete with a
          minimum compressive strength of 35 MPa, what is the
          probability that a randomly selected sample will meet this
          requirement?
        </li>
      </ol>
    </li>
  </ol>
  
  <Section title = {contents[3]}/>

  <p>
    <Katex math = "X \sim\;"/>Normal(
    <Katex math = "\mu = "/> <Scrubbable bind:x = {mu} {...mu_opts} />,
    <Katex math = "\sigma = "/> <Scrubbable bind:x = {sigma} {...sigma_opts} />).

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
    page = "Normal distribution"
    date = "17/10/2023"
    url = "https://en.wikipedia.org/wiki/Normal_distribution"
    />
</Lab>
