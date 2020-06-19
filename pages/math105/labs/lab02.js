import React from 'react';
import { FormControlLabel, Radio, LinearProgress } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { RadioGroup } from 'formik-material-ui';
import Typography from '@material-ui/core/Typography';
import fetch from 'cross-fetch';
import Link from '@material-ui/core/Link';

import Tex from '../../../src/Tex';
import ShortAnswer from '../../../src/ShortAnswer';
import MultipleChoice from '../../../src/MultipleChoice';
import MultipleChoiceOption from '../../../src/MultipleChoiceOption';
import WorksheetForm from '../../../src/WorksheetForm';
import Submit from '../../../src/Submit';
import Paragraph from '../../../src/Paragraph';
import Url from '../../../src/Url';
import * as Yup from 'yup';
import {emailSchema, sectionSchema, shortanswerSchema} from '../../../src/schema.js';

// TODO Another button to save to PDF, or maybe submit saves a PDF for them.

const Lab02Schema = Yup.object().shape({
    email: emailSchema,
    section: sectionSchema,
    answer01: shortanswerSchema,
    answer02: shortanswerSchema,
    // answer03 is multiple choice
    answer04: shortanswerSchema,
    answer05: shortanswerSchema,
    answer06: shortanswerSchema,
    answer07: shortanswerSchema,
    answer08: shortanswerSchema
});

export default function math105WSInfinity() {

    return (<WorksheetForm title="Lab 02 Show me the data">
              <Formik initialValues={{
                  email: '',
                  section: '',
                  answer01: '',
                  answer02: '',
                  answer03: '',
                  answer04: '',
                  answer05: '',
                  answer06: '',
                  answer07: '',
                  answer08: ''
              }}
                      validationSchema={Lab02Schema}
                      onSubmit={(values, { setSubmitting }) => {
                          // prod
                          // const res = await fetch('https://0.0.0.0/math/api/submit', {
                          //     method: 'post',
                          //     body: JSON.stringify(values)
                          // });
                          // alert("Worksheet successfully submitted.  Good job!");
                          // dev
                          console.log("clicked submit");
                          alert(JSON.stringify(values, null, 2));
                          
                          // necessary
                          setSubmitting(false);
                          return;
                      }}>

                {({ submitForm, isSubmitting, errors, touched, validateForm }) => (
                    <Form>

                      <Typography>
                        What is your student email?
                      </Typography>
                      <ShortAnswer name="email" label="Chico State email"
                                   error={errors.name} touched={touched.name}/>

                      <Typography>
                        What MATH 105 Section are you in?
                      </Typography>
                      <ShortAnswer name="section" label="MATH 105 section number"
                                   error={errors.name} touched={touched.name}/>

                      <Typography variant="h6">Lab 02</Typography>

                      <Paragraph>
                        This lab is designed to give you an understanding
                        of data visualizations. We will be creating graphs in
                        StatCrunch as well as looking at graphs available on
                        the internet.
                      </Paragraph>

                      <Paragraph>
                        Before we start, make sure that you have
                        joined the Math 105 StatCrunch group. Check
                        out the video below to view 
                        <Link
                          href="https://media.csuchico.edu/media/Join+Math+105+Group+StatCrunch/0_5uk42vjl"
                          target="_blank"
                          rel="noopener"
                                                    >how
                        to join the Math 105 group</Link> if you
                        haven’t already.
                      </Paragraph>

                      <Typography variant="h6">Part 1. Covid-19 Data</Typography>
                      <Paragraph>
                        The dataset gives daily counts of COVID 19 cases,
                        number of new cases each day, and the number of
                        deaths from COVID 19 for US States and
                        territories. Since late January 2020, the New York
                        Times has tracked cases of coronavirus in real
                        time. The Times COVID 19 database is the product
                        of dozens of journalists working across several
                        times zones to monitor news conferences, analyze
                        data releases, and see clarification from public
                        officials on how they categorize cases. The
                        dataset is updated on a regular basis. The first
                        case of COVID-19 was diagnosed in Washington State
                        on January 21, 2020. From there, it spread over
                        several weeks to every U.S. state and
                        territory. Many factors influence how fast a virus
                        spreads. In this activity, you will investigate
                        the rate and timing of increases in the number of
                        recorded cases in your state. You can compare
                        patterns in the spread of COVID-19 in your state
                        with patterns in other states.
                      </Paragraph>

                      <Paragraph>
                        Let’s begin by plotting data to
                        <Link
                          href="https://media.csuchico.edu/media/Scatterplot+California+COVID/0_hzj0qwrg"
                          target="_blank"
                          rel="noopener"> see how quickly the number of recorded cases of COVID-19 grew in California</Link>.
                      </Paragraph>

                      <Typography>
                        Write a few sentences describing the graph for
                        California. Consider using descriptive words such
                        as gradual, abrupt, linear, exponential, steeply
                        climbing, decreasing, etc.
                      </Typography>
                      <ShortAnswer name="answer01" label="Answer: full sentences"
                                   error={errors.name} touched={touched.name}/>

                      <Paragraph>
                        The expression “flattening the curve” refers to
                        the shape of the growth curve for COVID-19 cases. When the curve is
                        curving up steeply, it means more and more new cases are recorded each
                        day; the number of cases is growing at an exponential rate. If
                        approximately the same number of cases are added each day, the growth
                        is linear.
                      </Paragraph>


                      <Typography>
                        Which statement best describes the current pattern of change in daily recorded cases in your state? The number of cases is
                      </Typography>
                      <MultipleChoice name="answer02" label="Answer: choose one">
                        <MultipleChoiceOption isSubmitting={isSubmitting} value="a" label="Definitely not flattening yet."/>
                        <MultipleChoiceOption isSubmitting={isSubmitting} value="b" label="Possibly flattening; too soon to tell."/>
                        <MultipleChoiceOption isSubmitting={isSubmitting} value="c" label="Definitely flattening."/>
                        <MultipleChoiceOption isSubmitting={isSubmitting} value="d" label="Definitely decreasing."/>
                        <MultipleChoiceOption isSubmitting={isSubmitting} value="e" label="Not changing much."/>

                      </MultipleChoice>

                      <Paragraph>
                        Now, let’s add a state to the graph to compare to California.
                      </Paragraph>

                      <Paragraph>
                        <Url href="https://media.csuchico.edu/media/Scatterplot+2+states/0_nn6mr80v"/>
                      </Paragraph>


                      <Typography>
                        What state did you compare to California?  Summarize the graph in two sentences.
                      </Typography>
                      <ShortAnswer name="answer03" label="Answer: two complete sentences"
                                   error={errors.name} touched={touched.name}/>

                      <Typography>
                        What do you think makes it hard to compare
                        California to a state like Alabama when looking at
                        the variable number of cases?
                      </Typography>
                      <ShortAnswer name="answer04" label="Answer: two complete sentences"
                                   error={errors.name} touched={touched.name}/>


                      <Paragraph>
                        Because California has such a large population, it
                        makes it difficult to compare it to states with
                        smaller populations. Let’s create a variable that
                        adjusts for population size. We will call this
                        variable per_capita and it will be created by
                        taking the variable cases and dividing by the
                        population size.
                      </Paragraph>

                      <Paragraph>
                        <Url href="https://media.csuchico.edu/media/scatterplot+per_capita/0_xutvy395"/>
                      </Paragraph>


                      <Typography>
                        Now write a few sentences that describe the graph you created when using the per_capita variable rather than the number of cases variable.
                      </Typography>
                      <ShortAnswer name="answer05" label="Answer: a few complete sentences"
                                   error={errors.name} touched={touched.name}/>

                      <Paragraph>
                        Let's create a graph that looks at all the states.
                      </Paragraph>

                      <Paragraph>
                        <Url href="https://media.csuchico.edu/media/All+States/0_cfco2qlv"/>
                      </Paragraph>

                      <Typography variant="h6">Part 2. What's going On in This Graph?</Typography>

                      <Paragraph>
                        Go to the following website <Url href="https://www.nytimes.com/interactive/2018/05/03/learning/08WGOITGraphLN.html"/>
                      </Paragraph>

                      <Typography>
                        What do you notice?  Write two sentences that summarize what you see in this graph.
                      </Typography>
                      <ShortAnswer name="answer06" label="Answer: two complete sentences"
                                   error={errors.name} touched={touched.name}/>

                      <Typography>
                        What do you wonder about this graph?  Are there any questions that come up when looking at the graph?
                      </Typography>
                      <ShortAnswer name="answer07" label="Answer: one question"
                                   error={errors.name} touched={touched.name}/>

                      <Typography>
                        Create a catchy title for the graph.
                      </Typography>
                      <ShortAnswer name="answer08" label="Answer: catchy title"
                                   error={errors.name} touched={touched.name}/>

                      {isSubmitting && <LinearProgress />}
                      <br />
                      <Submit isSubmitting={isSubmitting} submitForm={submitForm}
                              validateForm={validateForm}/>
                    </Form>
                )}
              </Formik>
            </WorksheetForm>
           );
}
