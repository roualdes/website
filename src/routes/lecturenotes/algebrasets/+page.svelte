<script>
 import Lab from '$lib/Lab.svelte';
 import Section from '$lib/Section.svelte';
 import Definition from '$lib/Definition.svelte';
 import katex from "katex";
 import Katex from '$lib/Katex.svelte';
 import RefWikipedia from '$lib/RefWikipedia.svelte';

 import * as Plot from '@observablehq/plot';

 export let contents = ["Set",
                        "Sample Space",
                        "Subset",
                        "Intersection",
                        "Empty Set",
                        "Union",
                        "Complement",
                        "Partition",
                        "References"];

 let licensed = true;
 let sampleSpace,
     subset,
     intersection,
     union;

 $: {

     sampleSpace?.append(Plot.plot(
         {
             width: 500,
             height: 300,
             x: {domain: [0, 10], ticks: [], label: null},
             y: {domain: [0, 10], ticks: [], label: null},
             marks: [
                 Plot.frame()
             ]
         }
     ));

     subset?.append(
         Plot.plot(
             {
                 width: 500,
                 height: 300,
                 x: {domain: [0, 10], ticks: [], label: null},
                 y: {domain: [0, 10], ticks: [], label: null},
                 marks: [
                     Plot.dot([{x: 5}], {x: "x", r: 80}),
                     Plot.dot([{x: 5.5}], {x: "x", r: 40}),
                     Plot.frame()
                 ]
             }
         )
     );

     intersection?.append(
         Plot.plot(
             {
                 width: 500,
                 height: 300,
                 x: {domain: [0, 10], ticks: [], label: null},
                 y: {domain: [0, 10], ticks: [], label: null},
                 marks: [
                     Plot.dot([{x: 4}], {x: "x", r: 80}),
                     Plot.dot([{x: 6}], {x: "x", r: 80}),
                 ]
             }
         )
     );
 };
</script>

<Lab bind:contents {licensed}>
    <h1>Sets and Algebra of Sets</h1>

    <Section title={contents[0]}/>
    <Section title = {contents[1]} />

    <Definition word = "sample space">
        <span>a set describing all possible outcomes of a random experiment</span>
    </Definition>

    <p>
        I use <Katex math="S" /> to denote a sample space, but
        <Katex math="\Omega" /> is another common choice.  I draw a sample
        space <Katex math="S" /> as a rectangle, where you are to believe
        that there are all possible outcomes contained within the
        rectangle.
    </p>

    <div bind:this={sampleSpace}
         style="position: relative; width: 500px; heigth: 300px;">
        <div style = "position: relative; left: 50px; top: 50px;">
            <Katex math="S" />
        </div>
    </div>

    <Section title = {contents[1]} />

    <Definition word = "subset">

        <span>
            <Katex math="A" /> is a subset of <Katex math="B" /> if all
            elements of <Katex math="A" /> are also elements of
            <Katex math="B" />
        </span>

    </Definition>

    <p>
        We write <Katex math="A \subset B" /> and read this as
        <Katex math="A" /> is a subset of <Katex math="B" />.  The set
        <Katex math="B" /> is referred to as a superset of <Katex math="A"/>.
    </p>

    <div bind:this={subset}
         style="position: relative; width: 500px; heigth: 300px;">
        <div style = "position: absolute; left: 50px; top: 80px;">
            <Katex math="S" />
        </div>
        <div style = "position: relative; left: 200px; top: 150px;">
            <Katex math="B" />
        </div>
        <div style = "position: relative; left: 300px; top: 150px;">
            <Katex math="A" />
        </div>
    </div>

    <p>
        For the picture above, <Katex math="A \subset B \subset S"/>, which is to say that

        <Katex math="A \subset B"/> and further <Katex math="B \subset S"/>.

        If <Katex math="A"/> might be equal to its superset <Katex math="B"/>,
        the symbol <Katex math="\subseteq"/> could be used.  This symbol is analogous to

        <Katex math="\leq"/>; for two numbers <Katex math="x \leq y"/>, it might be the case

        that <Katex math="x=y"/>.
    </p>

    <p>

        Sometimes there is no benefit from referencing the sample
        space, <Katex math="S"/>, and so pictures may exclude the
        sample space altogether.

    </p>

    <Section title = {contents[2]} />

    <Definition word = "intersection">
        <span>TODO do better: the set of elements in both the first set and the second set</span>
    </Definition>
    <p>
        Example.
    </p>

    <p>
        Let <Katex math={"A = \\{ 1, 2, 3 \\} "}/> and
        <Katex math={"B = \\{2, 4, 6 \\}"} />.  Then

        <Katex math={"A \\cap B = \\{ 2 \\}"} />.
    </p>

    <p>
        The symbol used for intersection is
        <Katex math="\cap" />, sometimes called cap.
    </p>

    <div
        bind:this={intersection}
        style="position: relative; width: 500px; heigth: 300px;">
        <div style = "position: absolute; left: 175px; top: 100px;">
            <Katex math="A" />
        </div>
        <div style = "position: absolute; left: 150px; top: 150px;">
            <Katex math="1, 3" />
        </div>
        <div style = "position: absolute; left: 250px; top: 150px;">
            <Katex math="2" />
        </div>
        <div style = "position: absolute; left: 325px; top: 100px;">
            <Katex math="B" />
        </div>
        <div style = "position: absolute; left: 325px; top: 150px;">
            <Katex math="4, 6" />
        </div>
    </div>

    <p>
        Intersection is a binary operation, much like addition
        <Katex math="+"/>.  Intersection is a binary set operation,
        meaning it operates on two sets.  One set written on the left of
        <Katex math="\cap" /> and one set written on the right.
    </p>

    <p>
        Example.
    </p>

    <p>
        Let <Katex math={"A = \\{ a, e, i, o, u \\} "}/> and
        <Katex math={"B = \\{g, u, i, t, a, r \\}"} />.  Then

        <Katex math={"A \\cap B = \\{ a, u, i \\}"} />.
    </p>

    <p>
        One can take the intersection of more than two sets, even though
        the operation technically works two sets at a time.  The notation is

        <Katex
            displayMode = {true}
            math={"\\bigcap_{n=1}^N A_n = A_1 \\cap A_2 \\cap \\ldots \\cap A_N"} />

        for sets <Katex math="A_1, A_2, \ldots, A_N" />.
    </p>

    <Section title = {contents[3]} />

    <p>
        A set doesn't necessarily contain any elements.  In relation to
        intersection, two sets need not have any elements in common.
    </p>

    <Definition word = "empty set">
        <span>
            the set that contains no elements
        </span>
    </Definition>

    <p>
        One symbol used for the empty set is <Katex math="\emptyset" />,
        which is distinct from the Greek letter <Katex math="\phi"
                                                />. Another way to write the empty set is with two curly braces
        and nothing between them <Katex math={"\\{ \\}"} />.
    </p>

    <p>
        Example.
    </p>

    <p>
        Let <Katex math={"A = \\{ a, e, i, o, u \\} "}/> and
        <Katex math={"B = \\{l, y, n, x \\}"} />.  Then

        <Katex math={"A \\cap B = \\{  \\}"} />.
    </p>

    <Section title = {contents[3]} />

    <Definition word = "union">
        <span>
            TODO do better: the set of elements in either the first set or the second set
        </span>
    </Definition>

    <p>
        The symbol for union is <Katex math="\cup" />, sometimes called cup.
    </p>

    <p>
        Example.
    </p>

    <p>
        Let <Katex math={" A = \\{ e, o, w, n \\}"} /> and <Katex math={" B = \\{ y, r, k \\}"} />.  Then

        the union of <Katex math="A" /> and <Katex math="B" /> might be
        written <Katex math={" A \\cup B = \\{n, e, w, y, o, r, k \\}"} />.
    </p>

    <p>
        Notice the keyword <em>or</em> in the definition union.  What do
        you think is the keyword in the definition of intersection,
        separating the definitions of union and intersection?
    </p>

    <Section title = {contents[4]} />

    <Definition word = "subset">
        <span>
            a set where every element in the smaller set is contained in a larger set
        </span>
    </Definition>

    <p>
        The symbol for subset is <Katex math="\subset" />.
    </p>

    <p>
        Example.
    </p>

    <p>
        Let <Katex math="S" /> represent all letters of the English alphabet.  The vowels

        <Katex math={" V = \\{a, e, i, o, u \\}"} /> are a subset of <Katex math="S" />,

        <Katex math = "V \subset S" />.
    </p>

    <p>
        Example.
    </p>

    <p>
        Let <Katex math={"\\mathbb{N}"} /> represent the natural numbers.  The even numbers

        <Katex math={" E = \\{2 * n : n \\in \\mathbb{N} \\}"} /> are a subset of

        <Katex math={"\\mathbb{N}"} />,

        <Katex math = {"E \\subset \\mathbb{N}"} />.
    </p>

    <p>
        Note that the word subset generally refers to the smaller of two
        sets.  The word superset generally refers to the bigger.
    </p>

    <p>
        If the subset is possibly equal to the superset, then the symbol
        <Katex math="\subseteq" /> is sometimes used.
    </p>

    <Section title = {contents[5]} />

    <Definition word = "complement">
        <span>TODO do better, what base set? the set of elements not in the base set</span>
    </Definition>

    <p>
        Many different symbols are used for the set complement.  If
        <Katex math="A" /> is the base set, then the complement of
        <Katex math="A" /> might be written as

        <Katex math="A^c" />,
        <Katex math={"A^{\\complement}"} />
        <Katex math="A'" />, or
        <Katex math="S \setminus A" />.

        The last can be more specifically called the relative complement
        or the set difference and is important when reference to a
        superset, say <Katex math="S" />, contributes useful information.
        Think of the set difference as starting with the superset
        <Katex math="S" /> and then removing or subtracting out all of the
        elements of <Katex math="A" />.
    </p>

    <p>
        Example.
    </p>

    <p>
        Let <Katex math="S" /> represent all the letters of the English
        alphabet.  Let <Katex math="V" /> represent all the vowels.  The
        set <Katex math="V^c" /> then represents all the consonants.
    </p>

    <Section title = {contents[6]} />

    <p>
        A partition is easy to see, but takes a few definitions to write down rigorously.
    </p>

    <p>
        Example.
    </p>

    <p>
        TODO insert picture
    </p>

    <p>
        We state two definitions before giving the definition of partition.
    </p>

    <Definition word = "disjoint">
        <span>
            two sets are disjoint when their intersection is the empty set
        </span>
    </Definition>

    <Definition word = "exhaustive">
        <span>
            a collection of sets whose union equals the complete space
        </span>
    </Definition>

    <Definition word = "partition">
        <span>
            a collection of sets which are non-empty, (mutually) disjoint, and exhaustive of a superset
        </span>
    </Definition>

    <p>
        Example.
    </p>

    <p>
        Let <Katex math={"S = \\{ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 \\} "}/>. A partition of <Katex math="S" /> is

        <Katex
            displayMode = {true}
            math={"\\Bigl \\{ \\{0, 1 \\}, \\{2 \\}, \\{3, 4, 5, 6, 7 \\}, \\{8, 9 \\} \\Bigr \\} "}/>

    </p>

    <Section title={contents[7]} />

    <RefWikipedia
        page = "Complement (set theory)"
        date = "2023-09-08"
        url = "https://en.wikipedia.org/wiki/Complement_(set_theory)"
    />

    <RefWikipedia
        page = "Intersection"
        date = "2023-09-08"
        url = "https://en.wikipedia.org/wiki/intersection"
    />

</Lab>
