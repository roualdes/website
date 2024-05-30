<script>
  import Lab from '$lib/Lab.svelte';
  export let contents = ["Conditional Distributions", "Bayes' Theorem", "References"];
  
  import Katex from '$lib/Katex.svelte';
  import Section from '$lib/Section.svelte';
</script>

<Lab bind:contents>
  <h1>Conditional Distributions (measure theory)</h1>

  <Section title = {contents[0]}/>

  <p>
    Suppose <Katex math = {"(\\Omega, \\Sigma_{\\Omega})"}/> is a measureable
    metric space with (probability) measure <Katex math = "\mu"/>.  Data are
    defined by the values the measurable map

    <Katex math = "X(\omega)"/> take on.

    Data space relative to

    <Katex math = {"X \\colon \\Omega \\to \\mathscr{X}"}/> is

    <Katex math = {"(\\mathscr{X}, \\Sigma_{\\mathscr{X}}, \\mu_{X})"}/> where

    <Katex math = {"\\mu_{X}"}/> is the pushforward of <Katex math="\mu"/> by

    <Katex math = "X"/> defined to be

    <Katex math = {"\\mu_{X} \\coloneqq \\mu \\circ X^{-1}"}/>.

    Similarly, parameter space is

    <Katex math = {"(\\Theta, \\Sigma_{\\Theta}, \\mu_{\\theta})"}/>

    defined relative to the measurable map
    
    <Katex math = "\theta \colon \Omega \to \Theta"/>.
  </p>

  <p>
    A <strong>conditional (probability) distribution</strong> of

    <Katex math = "X"/> given <Katex math = "\theta"/> is a function

    <Katex math = {"\\mu_{X | \\theta} \\colon \\Omega \\times \\Sigma_{\\mathscr{X}} \\to [0, 1]"}/>

    such that

  </p>
  
  <ul>
    <li>
      fix <Katex math = {"A_{\\mathscr{X}} \\in \\Sigma_{\\mathscr{X}}"}/>, then

      <Katex math = {"\\vartheta \\mapsto \\mu_{X | \\theta}(\\vartheta, A_{\\mathscr{X}})"}/> is a

      measurable map for <Katex math = {"\\vartheta \\in \\Theta"}/>, and
    </li>

    <li>
      fix <Katex math = {"\\vartheta \\in \\Theta"}/>, then

      <Katex math = {"A_{\\mathscr{X}} \\mapsto \\mu_{X | \\theta}(\\vartheta, A_{\\mathscr{X}})"}/> is a

      measure on <Katex math = {"(\\mathscr{X}, \\Sigma_{\\mathscr{X}})"}/>.
    </li>      
  </ul>

  <p>
    The existence of such a function is proved in Theorem 33.3 of Billingley
    (2012).  We list some properties of such a function next.
  </p>

  <p>
    If there exists a measure <Katex math = "\lambda"/> on

    <Katex math = {"(\\mathscr{X}, \\Sigma_{\\mathscr{X}})"}/> such that

    <Katex math = {"\\mu_{X | \\theta} \\ll \\lambda"}/> for all <Katex math = "\vartheta \in \Theta"/>,

    then the Radon-Nikodym derviative (density function) of

    <Katex math = {"\\mu_{X | \\theta}"}/> exists and is written as

    <Katex math = {"d \\mu_{X | \\theta} / d \\lambda = \\rho_{X | \\theta}"}/>.

    In other words,

    <Katex
      displayMode = {true}
      math = {"\\mu_{X|\\theta}(\\vartheta, A_{\\mathscr{X}}) = \\int_{A_{\\mathscr{X}}} \\rho_{X|\\theta}(x) d \\lambda(x)"}/>

    for every <Katex math = {"\\vartheta \\in \\Theta"}/> and for all

    <Katex math = {"A_{\\mathscr{X}} \\in \\Sigma_{\\mathscr{X}}"}/>.
  </p>

  <p>
    The joint measure <Katex math = {"\\mu_{X, \\theta}"}/> is defined as

    <Katex
      displayMode = {true}
      math = {"\\mu_{X, \\theta}(A_{\\mathscr{X}} \\times B_{\\Theta}) = \\int_{B_{\\Theta}} \\mu_{X|\\theta} (\\vartheta, A_{\\mathscr{X}}) d \\mu_{\\theta}(\\vartheta)"} />

    Replacing the conditional distribution with its density function to get

    <Katex
      displayMode = {true}
      math = {"\\mu_{X, \\theta}(A_{\\mathscr{X}} \\times B_{\\Theta}) = \\int_{B_{\\Theta}} \\int_{A_{\\mathscr{X}}} \\rho_{X|\\theta} (x) d \\lambda(x) d \\mu_{\\theta}(\\vartheta)"} />

    By <a href="https://en.wikipedia.org/wiki/Fubini%27s_theorem#Tonelli's_theorem">Tonelli's
    theorem</a>, a specific case of Fubini's theorem for non-negative measurable
    maps,  we can switch the order of integration.

    <Katex
      displayMode = {true}
      math = {"\\begin{equation} \\mu_{X, \\theta}(A_{\\mathscr{X}} \\times B_{\\Theta}) = \\int_{A_{\\mathscr{X}}} \\int_{B_{\\Theta}} \\rho_{X|\\theta} (x) d \\mu_{\\theta}(\\vartheta) d \\lambda(x) \\end{equation}"} />    
  </p>

  <p>
    The marginal distribution <Katex math = {"\\mu_{X}"}/> can be recovered as

    <Katex
      displayMode = {true}
      math = {" \\mu_{X}(A_{\\mathscr{X}}) = \\int_{A_{\\mathscr{X}}} \\int_{\\Theta} \\rho_{X|\\Theta}(x) d \\mu_{\\Theta}(\\vartheta) d \\lambda(x)"}/>

    This implies a version of the Radon-Nikodym derivative of the marginal distribution

    <Katex
      displayMode = {true}
      math = {"\\frac{d \\mu_{X}}{d \\lambda} = \\int_{\\Theta} \\rho_{X|\\Theta}(x) d \\mu_{\\Theta}(\\vartheta)"}/>
  </p>

  <p>
    Similarly, there exists a conditional distribution of <Katex math = "\theta"/> given <Katex math = "X"/>,
    
    <Katex math = {"\\mu_{\\theta|X} \\colon \\Omega \\times \\Sigma_{\\Theta} \\mapsto [0, 1]"}/>.

    The joint distribution is recovered as

    <Katex
      displayMode = {true}
      math = {"\\begin{equation} \\mu_{X, \\theta}(A_{\\mathscr{X}} \\times B_{\\Theta}) = \\int_{A_{\\mathscr{X}}} \\mu_{\\theta|X}(x, B_{\\Theta}) d \\mu_X(x) \\end{equation}"}/>
  </p>

  <Section title = {contents[1]}/>

  Building on the context above, the conditional distribution of

  <Katex math = "\theta"/> given <Katex math = "X"/> can be written as

  <Katex
    displayMode = {true}
    math = {"\\mu_{\\theta|X}(x, B_{\\Theta}) = \\int_{B_{\\Theta}} \\frac{\\rho_{X|\\theta}}{\\int_{\\Theta} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta)} d \\mu_{\\theta}(\\vartheta)"}/>

  Which means the density function is

  <Katex
    displayMode = {true}
    math = {"\\frac{d \\mu_{\\theta|X}}{d \\mu_{\\theta}} = \\frac{\\rho_{X|\\theta}}{\\int_{\\Theta} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta)}"}/>  
    
  <p>
    Below we sketch a proof of Bayes' Theorem following Schervish (2012).
  </p>

  Notice that there are two ways to represent the joint distribution <Katex math = {"\\mu_{X, \\theta}"}/>.

  By <Katex math = "(1)"/>, we have
  <Katex
    displayMode = {true}
    math = {"\\mu_{X, \\theta}(A_{\\mathscr{X}} \\times B_{\\Theta}) = \\int_{A_{\\mathscr{X}}} \\int_{B_{\\Theta}} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta) d \\lambda(x)"}/>

  By <Katex math = "(2)"/>, we have

  <Katex
    displayMode = {true}
    math = {"\\mu_{X, \\theta}(A_{\\mathscr{X}} \\times B_{\\Theta}) = \\int_{A_{\\mathscr{X}}} \\mu_{\\theta|X}(x, B_{\\Theta}) d \\mu_{X}(x) = \\int_{A_{\\mathscr{X}}} \\mu_{\\theta|X}(x, B_{\\Theta})  \\int_{\\Theta} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta) d \\lambda(x)"}/>

  From the last two displays, the terms inside the integrals (over
  <Katex math = {"A_{\\mathscr{X}}"}/>) must be equal.

  <Katex
    displayMode = {true}
    math = {"\\mu_{\\theta|X}(x, B_{\\Theta}) \\int_{\\Theta} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta) = \\int_{B_{\\Theta}} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta)"}/>

  Rearranging, we find an expression for the conditional distribution of
  <Katex math = "\theta"/> given <Katex math = "X"/>.

  <Katex
    displayMode = {true}
    math = {"\\mu_{\\theta|X}(x, B_{\\Theta}) = \\int_{B_{\\Theta}} \\frac{\\rho_{X|\\theta}(x)}{\\int_{\\Theta} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta)} d \\mu_{\\theta}(\\vartheta)"}/>

  The density function with respect to <Katex math = {"\\mu_{\\theta}"}/> is then
  
  <Katex
    displayMode = {true}
    math = {"\\frac{d \\mu_{\\theta | X}}{d \\mu_{\\theta}} = \\frac{\\rho_{X|\\theta}}{\\int_{\\Theta} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta)}"}/>

  If we further assume that there exists a measure <Katex math = "\lambda"/> on
  <Katex math = "\Theta"/> such that <Katex math = {"\\mu_{\\theta} \\ll \\lambda"}/>,
  then there exists a version of the Radon-Nikodym derivative which recovers
  what is commonly taught as Bayes' theorem to undergraduates, written in terms
  of density functions.


  By the chain rule for Radon-Nikodym derivatives
  
  <Katex
    displayMode = {true}
    math = {"\\rho_{\\theta|X}  = \\frac{\\mu_{\\theta|X}}{d \\lambda} = \\frac{d \\mu_{\\theta|X}}{d \\mu_{\\theta}}  \\frac{d \\mu_{\\theta}}{d \\lambda }"}/>

  Next expand the Radon-Nikodym derivatives.

  <Katex
    displayMode = {true}
    math = {"\\rho_{\\theta|X} = \\frac{d \\mu_{\\theta|X}}{d \\mu_{\\theta}} \\frac{d \\mu_{\\theta}}{d \\lambda } = \\frac{\\rho_{X|\\theta} \\rho_{\\theta}}{\\int_{\\Theta} \\rho_{X|\\theta}(x) d \\mu_{\\theta}(\\vartheta)}"}/>

  Last, expand the term <Katex math = {"d \\mu_{\\theta}"}/> inside the integral.

  <Katex
    displayMode = {true}
    math = {"\\rho_{\\theta|X} = \\frac{\\rho_{X|\\theta} \\rho_{\\theta}}{\\int_{\\Theta} \\rho_{X|\\theta}(x) \\rho_{\\theta}(\\vartheta) d \\lambda(\\vartheta)}"}/>  
  
  <Section title = {contents[2]}/>

  <ul>
    <li>
      Billingsley, P. (2012). Probability and measure. John Wiley & Sons.
    </li>
    <li>
      Schervish, M. J. (2012). Theory of statistics. Springer Science & Business Media.
    </li>
  </ul>
</Lab>
