<script>
 import Lab from '$lib/Lab.svelte';

 export let contents = ["Introduction",
                        "Conditional Probability",
                        "Conditional Probability Examples",
                        "Bayes' Theorem",
                        "Bayes' Theorem Examples",
                        "References"];

 import Katex from '$lib/Katex.svelte';
 import Section from '$lib/Section.svelte';

 import RefWikipedia from '$lib/RefWikipedia.svelte';
 import Definition from '$lib/Definition.svelte';

 import * as Plot from '@observablehq/plot';

 let totalprob;

 $: {
     totalprob?.append(
         Plot.plot(
             {
                 width: 500,
                 height: 300,
                 x: {domain: [0, 10], ticks: [], label: null},
                 y: {domain: [0, 10], ticks: [], label: null},
                 marks: [
                     Plot.ruleX([3, 5, 6]),
                     Plot.dot([{x: 5, y: 5.5}], {x: "x", y: "y", r: 100}),
                     Plot.frame()
                 ]
             }
         )
     );
 }
</script>

<Lab bind:contents>
    <h1>Conditional Probability</h1>

    <Section title = {contents[0]}/>


    <Section title = {contents[1]}/>

    <p>
        Suppose <Katex math="A,B"/> are subsets of some sample space
        <Katex math="S"/>, written mathematically as <Katex math="A,B \subseteq S"/>.

        The probability of <Katex math="A"/> given <Katex math="B"/> is defined as
    </p>

    <Katex
        displayMode={true}
        math={"\\mathbb{P}[A | B] = \\frac{\\mathbb{P}[A \\cap B]}{\\mathbb{P}[B]}"}/>

    <p>
        so long as

        <Katex math={"\\mathbb{P}[B] > 0"}/>.
    </p>

    <p>
        We read the conditional probability statement <Katex math={"\\mathbb{P}[A | B]"}/>

        as the probability of <Katex math="A"/> given, or conditioned on, <Katex math="B"/>.

        We think about this calculation as updating the probability of the probability of

        <Katex math="A"/>

        using the information contained in <Katex math="B"/>.  If the set

        <Katex math="B"/>

        contains any information about <Katex math="A"/>, then

        <Katex math={"\\mathbb{P}[A | B] \\ne \\mathbb{P}[A]"}/>.
    </p>

    <p>
        Notice that conditional probability connects back to our definition of independent events; for

        <Katex math="A,B \subset S"/>, <Katex math="A"/> and <Katex math="B"/> are said to be independent if

        <Katex
            displayMode={true}
            math={"\\mathbb{P}[A \\cap B] = \\mathbb{P}[A] \\mathbb{P}[B]"}/>

        So if sets <Katex math="A,B"/> are independent, then the conditional probability of

        <Katex math="A"/> given <Katex math="B"/> is equal to the probability of <Katex math="A"/>

        <Katex
            displayMode={true}
            math={"\\mathbb{P}[A | B] = \\frac{\\mathbb{P}[A \\cap B]}{\\mathbb{P}[B]} = \\frac{\\mathbb{P}[A]\\mathbb{P}[B]}{\\mathbb{P}[B]} = \\mathbb{P}[A]"}/>

        Notice then that if <Katex math="A,B"/> are independent, then <Katex math="B"/>

        contains no information about <Katex math="A"/> and so

        <Katex math={"\\mathbb{P}[A | B] = \\mathbb{P}[A]"}/>.
    </p>




    <Section title = {contents[2]}/>

    <ol>
        <li>
            In a school, there are 200 students. Among them, 120 are studying
            Mathematics, and 80 are studying Science. It is known that 60 students are
            studying both Mathematics and Science. You randomly pick a student who is
            studying Mathematics.  What is the probability that the selected student
            is also studying Science?
        </li>

        <li>
            Consider the following table giving counts for the types of each
            coffee purchased at my favorite coffee shop within a weekend.

            <table>
                <tr>
                    <th></th>
                    <th>Small</th>
                    <th>Medium</th>
                    <th>Large</th>
                </tr>
                <tr>
                    <td>regular</td>
                    <td>19</td>
                    <td>23</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>decaf</td>
                    <td>20</td>
                    <td>15</td>
                    <td>17</td>
                </tr>
            </table>

            <ol>

                <li>
                    What is the probability that someone orders a
                    decaf cup of coffee?
                </li>

                <li>
                    Given that someone ordered a medium, what is the
                    probability that their order is for a decaf cup of
                    coffee?
                </li>

                <li>
                    What is the probability that someone orders a
                    small cup of coffee?
                </li>

                <li>
                    Given that some ordered a regular cup of coffee,
                    what is the probability that their order is for a
                    small cup of coffee?
                </li>
            </ol>

        </li>
    </ol>

    <Section title = {contents[3]}/>

    Baye's theorem is a combination of conditional probability and the
    Law of Total Probability.

    <Definition word="Law of Total Probability">
        For an arbitrary sample space <Katex math="S"/> and an arbitrary subset <Katex math="B \subseteq S"/>,

        let <Katex math={"\\{A_n\\}"}/> be a partition of <Katex math="S"/>.  Then

        <Katex
            displayMode={true}
            math={"\\mathbb{P}[B] = \\sum_n \\mathbb{P}[B \\cap A_n]"}/>
    </Definition>

    <p>
        The statement of the Law of Total Probability can be
        summarized by the following picture.  In picture, it's a
        little easier to see that the area of <Katex math="B"/>,
        otherwise known as the probability of <Katex math="B"/>,

        <Katex math={"\\mathbb{P}[B]"}/>, is composed of four subsets of

        <Katex math="B"/>.  The four subsets are

        <Katex math="B \cap A_1"/>,
        <Katex math="B \cap A_2"/>,
        <Katex math="B \cap A_3"/>, and
        <Katex math="B \cap A_4"/>.
    </p>

    <div bind:this={totalprob}
         style="position: relative; width: 500px; heigth: 300px;">
        <div style = "position: absolute; left: 15px; top: 10px;">
            <Katex math="S" />
        </div>
        <div style = "position: absolute; left: 45px; top: 240px;">
            <Katex math="A_1" />
        </div>
        <div style = "position: absolute; left: 180px; top: 240px;">
            <Katex math="A_2" />
        </div>
        <div style = "position: absolute; left: 265px; top: 240px;">
            <Katex math="A_3" />
        </div>
        <div style = "position: absolute; left: 310px; top: 240px;">
            <Katex math="A_4" />
        </div>
        <div style = "position: absolute; left: 330px; top: 130px;">
            <Katex math="B" />
        </div>
    </div>

    <p>
        Because the sets <Katex math="B \cap A_n"/> for <Katex math={"n \\in \\{1,2,3,4\\}"}/> are
        mutually exclusive, we can use the

        <span data-tooltip="TODO: provide link">third condition of distributions</span>

        to find the probability of

        <Katex math="B"/> as the sum of the probability of these sets.
    </p>

    <p>
        Theoretically, the collection of sets <Katex math={"\\{A_n\\}"}/> can
        be a partition of any super set of

        <Katex math="B"/>, <Katex math="C \supseteq B"/>. Most often
        though, the Law of Total Probability is framed as in the
        picture above, relative to the sample space <Katex math="S"/>.
    </p>

    <Definition word="Bayes' Theorem">
        Suppose <Katex math="A,B \subseteq S"/> and that <Katex math={"\\mathbb{P}[B] > 0"}/>.
        Bayes' Theorem states that

        <Katex
            displayMode={true}
            math={"\\mathbb{P}[A | B] = \\frac{\\mathbb{P}[B|A]\\mathbb{P}[A]}{\\mathbb{P}[B]}"}/>
    </Definition>

    <p>
        If necessary, the Law of Total Probability can be used to
        calculate the denominator.  Bayes' Theorem is the formula that
        allows you to compute the probability of

        <Katex math="A"/> given <Katex math="B"/> using

        the probability <Katex math="B"/> given <Katex math="A"/>;
        effecitively, the set being conditioned on is swapped for the
        set on which probability is being calculated, <Katex math="A \leftrightarrow B"/>.

        </p>

    <Section title = {contents[4]}/>

        <ol>
            <li>
                A factory produces three types of widgets: Type A, Type B, and Type C. The
                production ratios are such that 50% of the widgets produced are Type A,
                30% are Type B, and 20% are Type C. Each widget is then independently
                tested, and it is found that 5% of Type A widgets, 3% of Type B widgets,
                and 10% of Type C widgets fail the test.  A widget is randomly selected
                from the production line and is found to have failed the test. What is the
                probability that this widget is a Type C widget?
            </li>

            <li>
                In a certain population, 1% of people have a specific genetic
                disorder. There is a diagnostic test for this disorder, which has a 95%
                sensitivity (meaning that it correctly identifies 95% of those who have
                the disorder) and a 98% specificity (meaning that it correctly identifies
                98% of those who do not have the disorder). A medical student picks a
                random individual from this population and administers the test, which
                comes back positive.  Calculate the probability that this individual
                actually has the genetic disorder, given that their test result is
                positive.
            </li>

            <li>
                A civil engineering company is working on a large infrastructure
                project. Historical data shows that there's a 70% chance of encountering
                significant geological challenges when building in this region. If such
                challenges are encountered, the probability of project delays is
                80%. However, if no geological challenges are encountered, the probability
                of delays due to other factors is only 10%.  Given that a project is
                delayed, what is the probability that it was due to geological challenges?
            </li>
        </ol>

        <Section title="{contents[5]}"/>

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
