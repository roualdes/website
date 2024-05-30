<script>
 import Lab from '$lib/Lab.svelte';

 export let contents = ["Introduction",
                        "Intuition (Bernoulli)",
                        "Intuition (Normal)",
                        "Example",
                        "References"];

 import Katex from '$lib/Katex.svelte';
 import Section from '$lib/Section.svelte';

 import Scrubbable from '$lib/Scrubbable.svelte';

 import RefWikipedia from '$lib/RefWikipedia.svelte';
 import Definition from '$lib/Definition.svelte';

 import jstat from "jstat";
 const { jStat } = jstat;

 import * as Plot from '@observablehq/plot';

 let licensed = true;

 let bernoulli_likelihood,
     normal_likelihood,
     rayleigh_likelihood;

 const N = 101,
       p = jStat.seq(0, 1, N);
 const bernoulli_density = p.map(pn => {
     return {
         p: pn,
         fp: jStat.binomial.pdf(3, 4, pn),
     }
 });

 const x = jStat.seq(-20, 20, 301);
 let loc = 0,
     loc_opts = {
         lower: -5,
         upper: 5,
         digits: 2,
         speed: "medium",
     };
 let scl = 1,
     scl_opts = {
         lower: 0.01,
         upper: 3,
         digits: 2,
         speed: "medium",
     };

 function normal_log_likelihood(x, m, s) {
     let ll = -1.5 * Math.log(2 * Math.PI * s ** 2);
     for (let n = 0; n < x.length; n++) {
         let z = (x[n].x - m) / s;
         ll -= 0.5 * z * z;
     }
     return Math.exp(ll);
 }
 const normal_data = [{x: 2}, {x: -0.5}, {x: 0.3}];
 let normal_ll;

 let rayleigh_data = Array(10).fill(0).map(_ => Math.random());

 function rayleigh_log_likelihood(x, s) {
     const C = 2 * Math.log(s);
     let ll = 0.0;
     for (let n = 0; n < x.length; n++) {
         let z = x[n] / s;
         ll += Math.log(x[n]) - C - 0.5 * z * z;
     }
     return ll;
 }

 const sigma = jStat.seq(0.1, 5, 101);
 const rayleigh_density = sigma.map(sigma_n => {
     return {
         x: sigma_n,
         fx: rayleigh_log_likelihood(rayleigh_data, sigma_n)
     }

 });

 $: {

     bernoulli_likelihood?.lastChild?.remove();
     bernoulli_likelihood?.append(
         Plot.plot({
             width: 500,
             height: 300,
             x: {domain: [0, 1], label: null},
             y: {domain: [0, 0.45], label: null},
             marks: [
                 Plot.line(bernoulli_density, {x: "p", y: "fp"}),
                 Plot.ruleX([{x: 0.75, y1: 0, y2: jStat.binomial.pdf(3, 4, 0.75)}],
                            {x: "x", y1: "y1", y2: "y2", strokeDasharray: "2 3"}),
             ]
         })
     );

     let normal_density = x.map(xn => {
         return {
             x: xn,
             fx: jStat.normal.pdf(xn, loc, scl)
         }
     });

     normal_ll = Math.round(10000 * normal_log_likelihood(normal_data, loc, scl), 4) / 10000;

     normal_likelihood?.lastChild?.remove();
     normal_likelihood?.append(
         Plot.plot({
             width: 500,
             height: 300,
             x: {label: null},
             y: {label: null},
             marks: [
                 Plot.line(normal_density, {x: "x", y: "fx"}),
                 Plot.dot(normal_data, {x: "x", y: 0})
             ]
         })
     );

     rayleigh_likelihood?.lastChild?.remove();
     rayleigh_likelihood?.append(
         Plot.plot({
             width: 500,
             height: 300,
             x: {label: null},
             y: {label: null},
             marks: [
                 Plot.line(rayleigh_density, {x: "x", y: "fx"}),
             ]
         })
     );

 }

</script>

<Lab bind:contents {licensed}>

    <h1>Likelihood</h1>

    <Section title = {contents[0]}/>

    <p>
        The likelihood method estimates parameters using an
        assumed distribution on the data and a randomly sampled
        dataset from this distribution. To estimate the parameters,
        one can use either standard methods of calculus or a computer.
        This page will cover the aspects of calculus behind the
        likelihood method.
    </p>

    <p>
        The goal is to find the most likely value of the parameter(s)
        given a set of random variables,

        <Katex math="X_1, X_2, \ldots, X_N"/>.

        When the solution to the likelihood method is found using
        random variables, we call the solution the <strong>maximum likelihood estimator</strong>.
        Once you observe some values, and the data assume the role of
        the random variables, then you can plug in the data and
        calculate an estimate of the parameter(s).  The actual value,
        using a specific dataset, is called the

        <strong>maximum likelihood estimate</strong>.
    </p>

    <p>
        The logic underlying the likelihood method goes like this. Set
        up the likelihood function. The maximum likelihood estimator
        is the argument of the likelihood function that maximizes the
        likelihood function. Often, this is written as

        <Katex
            displayMode={true}
            math={"\\hat{\\theta} = \\operatorname{argmax}_{\\theta} L(\\theta | \\mathbf{X})"}/>

        to denote that the best guess is the maximal argument to the
        likelihood function given the data <Katex math={"\\mathbf{X} = (X_1, X_2, \\ldots, X_N)"}/>.

        The calculus is then left to the practioner, where either pen
        and paper or a computer will do.  These notes aim to provide a
        short introduction to the intuition behind the likelihood
        function setup and to show the most common analytical
        strategy for finding the maximum likelihood estimates.
    </p>


    <Section title = {contents[1]}/>

    <p>
        The likelihood function is defined relative to the density

        function <Katex math="f(x | \theta)"/>

        of the distribution that is assumed to have generated the
        data. The likelihood is defined to be the product of the
        density function evaluated at each datum in the
        dataset. We think of the likelihood function as a function of
        the parameter(s), generalized as <Katex math="\theta"/>,

        given the random variables <Katex math={"\\mathbf{X}"}/>.

        <Katex
            displayMode={true}
            math={"L(\\theta | \\mathbf{X}) = \\prod_{n=1}^N f(X_n | \\theta)"}/>

        The intuition behind the product of the density functions goes
        like this. Imagine you have <Katex math="4"/> random variables
        representing flips of fair coin.  Say the outcomes are

        <Katex math={"\\text{H, H, T, H}"}/>.

        Assuming the random variables are independent, the probability
        associated with this event is

        <Katex
            displayMode={true}
            math={"\\frac{1}{2}\\cdot\\frac{1}{2}\\cdot\\frac{1}{2}\\cdot\\frac{1}{2}"}/>
    </p>

    <p>
        Now, imagine that you don't know that the coin is fair,
        instead all you know is that the probability of heads is some
        number <Katex math="p"/>. The probability above can is then
        rewritten as

        <Katex
            displayMode={true}
            math={"p \\cdot p \\cdot (1 - p) \\cdot p"}/>
    </p>

    <p>
        Next, since we know that Bernoulli distribution is an
        appropriate model of coin flips, write this probability using
        the density function of a Bernoulli distribution.  Since the
        Bernoulli distribution's density function maps heads to

        <Katex math="1"/> and tails to <Katex math="0"/>

        we have

        <Katex
            displayMode={true}
            math={"f(1 | p) \\cdot f(1 | p) \\cdot f(0 | p) \\cdot f(1 | p)"}/>
    </p>

    <p>

        The last step in understanding the setup of the likelihood
        function is to recognize that until we observe data such as

        <Katex math={"\\text{H, H, T, H}"}/>,

        we might as well treat these observations as random
        variables, <Katex math="X_1, X_2, X_3, X_4"/>.

        In this case, the functional form is

        <Katex
            displayMode={true}
            math={"f(X_1 | p) \\cdot f(X_2 | p) \\cdot f(X_3 | p) \\cdot f(X_4 | p)"}/>
    </p>

    <p>
        The discussion above captures the intuition behind the setup
        of the likelihood function.  From here the main differences are
        notational and a conceptual understanding of how we can treat
        this product as a function of the unknown parameter <Katex math="p"/>.
    </p>

    <p>
        To get from

        <Katex
            displayMode={true}
            math={"f(X_1 | p) \\cdot f(X_2 | p) \\cdot f(X_3 | p) \\cdot f(X_4 | p)"}/>

        to the general definition of the likelihood function, we
        generalize the unknown parameter

        <Katex math="p"/> to <Katex math="\theta"/>,

        thinking that this method should apply to any distribution's
        density function.  Further, we use product notation, which is
        analogous to summation notation, to generalize to an arbitrary
        number of random variables

        <Katex math="N"/>

        <Katex
            displayMode={true}
            math={"\\prod_{n=1}^N f(X_N | \\theta)"}/>
    </p>

    <p>
        Once we have <Katex math="N"/> observartions, our collection
        of random variables <Katex math={"\\{X_n\\}"}/>

        is bound to specific values <Katex math={"\\{x_n\\}"}/>.

        On the other hand, the unknown parameter <Katex math="\theta"/> is
        not specified.  The conceptual jump of the likelihood function
        is to treat the form

        <Katex
            displayMode={true}
            math={"L(\\theta | \\mathbf{X}) = \\prod_{n=1}^N f(X_N | \\theta)"}/>

        as a function of the unknown parameter <Katex math="\theta"/>.
        We name the likelihood function <Katex math="L"/> and think of
        it as a function of the unknown parameter(s)

        <Katex math="\theta"/>

        given a fixed set of data

        <Katex math={"\\mathbf{X} = (X_1, \\ldots, X_N)"}/>.  The
        specific value of <Katex math="\theta"/> that
        maximizes the likelihood function is the best guess of the
        unknown parameter.
    </p>

    <p>
        In an attempt to bring the general likelihood function back
        down to earth, consider the following plot depicting the
        scenario introduced above: the observations

        <Katex math={"\\text{H, H, T, H}"}/>

        from a Bernoulli distribution with unknown parameter
        <Katex math="p"/>. From exactly these four observations, the argument that
        maximizes the likelihood function is <Katex math={"\\hat{p} = 0.75"}/>.
    </p>

    <div bind:this={bernoulli_likelihood}
         style="position: relative; width: 500px; heigth: 300px; left: 80px;">
        <div style="position: absolute; left: 365px; top: 275px;">
            <Katex math={"\\hat{p}"}/>
        </div>
        <div style="position: absolute; left: -80px; top: 120px;">
            <Katex math={"L(p | \\mathbf{X})"}/>
        </div>
        <div style="position: absolute; left: 250px; top: 290px;">
            <Katex math={"p"}/>
        </div>
    </div>

    <Section title = {contents[2]}/>

    <p>
        Consider three data from a Normal distribution with parameter
        values that I'm keeping secret:

        <Katex math="x_1 = 2, x_2 = -0.5, x_3 = 0.3"/>

        Your job is to guess the values of

        <Katex math="\mu"/> and <Katex math="\sigma"/> that I have in mind.
    </p>

    <p>
        With only three data points, displayed on the plot below as
        empty circles, you are unlikely to guess exactly the values of

        <Katex math="(\mu, \sigma)"/>

        that I have in mind, but you can still form a guess.  The
        point of this page, is that a good guess will be the values of

        <Katex math="(\mu, \sigma)"/>

        that maximize the likelihood:

        <Katex math={"L(\\mu, \\sigma | 2, -0.5, 0.3) "}/>
        <Katex math=" = {normal_ll}"/>.
    </p>



    <p>
        <Katex math={"\\text{Normal}(\\mu = "}/> <Scrubbable bind:x = {loc} {...loc_opts}/>
        <Katex math=", \sigma = "/> <Scrubbable bind:x = {scl} {...scl_opts}/>
        <Katex math=")"/>
    </p>

    <div bind:this={normal_likelihood}
         style="position: relative; width: 500px; heigth: 300px; left: 100px;">
        <div style="position: absolute; left: -100px; top: 120px;">
            <Katex math={"L(\\mu, \\sigma | \\mathbf{X})"}/>
        </div>
        <div style="position: absolute; left: 250px; top: 290px;">
            <Katex math={"x"}/>
        </div>
    </div>

    <Section title = {contents[3]}/>

    <p>
        The last way we'll' demonstrate the maximum likelihood method is
        by walking through an example.  Suppose you have a sample of <Katex math="N"/>
        observations

        <Katex math={"X_1, \\ldots, X_N"}/>

        all randomly sampled from the same distribution. We'll assume we know that the
        Rayleigh distribution generated our data, but that we don't know the
        parameter <Katex math="\sigma"/>.  We seek to estimate <Katex math="\sigma"/>
        from the data. The density function of the Rayleigh distribution
        is

        <Katex
            displayMode={true}
            math={"f(x | \\sigma) = \\frac{x}{\\sigma^2} \\exp{\\left\\{-x^2 / (2\\sigma^2) \\right\\}}"}/>

        for <Katex math={"x \\in [0, \\infty)"}/> and <Katex math="\sigma > 0"/>.
    </p>

    <p>
        To find the maximum likelihood estimate of <Katex math="\sigma"/>,
        start by writing out the likelihood funciotn.

        <Katex
            displayMode={true}
            math={"L(\\sigma | \\mathbf{X}) = \\prod_{n=1}^N \\frac{X_n}{\\sigma^2} \\exp{\\left\\{-X_n^2 / (2\\sigma^2) \\right\\}}"}/>

        The goal is to find the value <Katex math="\sigma"/> that
        maximizes the likelihood function <Katex math={"L(\\sigma | \\mathbf{X})"}/>.
    </p>

    <p>
        Both humans and computers have difficulty working with
        products and exponents of functions. Therefore, it is common
        take the natural log of the likelihood function.  This is so
        common, the log of the likelihood hood function has its own
        name, the log-likelihood function.  The log-likelihood
        function is written as

        <Katex
            displayMode={true}
            math={"\\ell(\\sigma | \\mathbf{X}) = \\log{L(\\sigma | \\mathbf{X})} = \\sum_{n=1}^N \\log{f(X_n | \\sigma)} = \\sum_{n=1}^N \\log{X_n} - 2\\log{\\sigma} - X_n^2 / (2 \\sigma^2)"}/>

        where we've used properties of <Katex math="\log"/> to turn
        the product into a sum.
    </p>

    <div bind:this={rayleigh_likelihood}
         style="position: relative; width: 500px; heigth: 300px; left: 100px;">
        <div style="position: absolute; left: -100px; top: 120px;">
            <Katex math={"\\ell(\\sigma | \\mathbf{X})"}/>
        </div>
        <div style="position: absolute; left: 250px; top: 290px;">
            <Katex math={"x"}/>
        </div>
    </div>

    <p>
        Recall from calculus that we can find local maxima/minima by
        differentiating a function, setting the derivative equal to
        zero, and solving for the variable of interest. In this
        scenario, the variable of interest is the unknown parameter, <Katex math="\sigma"/>.
    </p>

    <p>
        Often it's helpful to simplify the log-likelihood function to
        aid differentiation. In this case, the most helpful
        simplification is to realize that the first term within the
        sum is constant with respect to

        <Katex math="\sigma"/> and so it can be dropped

        <Katex
            displayMode={true}
            math={"\\ell(\\sigma | \\mathbf{X}) \\propto \\sum_{n=1}^N -2 \\log{\\sigma} - X_n^2 / (2 \\sigma^2)"}/>

        The symbol <Katex math="\propto"/> is read as proportional to:
        the log-likelihood function for the Rayleigh distribution

        <Katex math={"\\ell(\\sigma | \\mathbf{X})"}/>

        is proportional to the term on the right with respect to

        <Katex math="\sigma"/>.  We call the symbol propto (prop-to),
        short for proportional to.
    </p>

    <p>
        To find the maximum of <Katex math="\ell"/>, we'll take the
        derivative with respect to <Katex math="\sigma"/>

        <Katex
            displayMode={true}
            math={"\\frac{d \\ell}{d \\sigma} = \\frac{-2N}{\\sigma} + \\frac{1}{\\sigma^3} \\sum_{n=1}^N X_n^2"}/>
    </p>

    <p>
        Next, set the derivative equal to zero and solve for <Katex math="\sigma"/>.

        <Katex
            displayMode={true}
            math={"2 N \\sigma^2 = \\sum_{n=1}^N X_n^2"}/>
    </p>

    <p>
        Manipulate the expression until you find a solution for the
        parameter of interest. At this point, we put a hat over the
        parameter to recognize that it is our best guess of the unknown
        parameter based on the random variables <Katex math={"\\mathbf{X}"}/>.

        <Katex
            displayMode={true}
            math={"\\hat{\\sigma} = \\sqrt{\\frac{1}{2N} \\sum_{n=1}^N X_n^2}"}/>

        The maximum likelihood estimator <Katex math={"\\hat{\\sigma}"}/> is
        the final solution.  Withdata from a Rayleigh distribution,
        this solution tells you how to best estimate the unknown
        parameter

        <Katex math="\sigma"/>.
    </p>

    <Section title="{contents[4]}"/>

        <RefWikipedia
            page="Conditional probability"
            date="2024-04-11"
            url="https://en.wikipedia.org/wiki/Conditional_probability"/>

        <RefWikipedia
            page="Law of total probability"
            date="2024-04-11"
            url="https://en.wikipedia.org/wiki/Law_of_total_probability"/>

        <RefWikipedia
            page="Partition of a set"
            date="2024-04-11"
            url="https://en.wikipedia.org/wiki/Partition_of_a_set"/>
</Lab>
