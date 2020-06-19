import React from 'react';
import { Formik, Form, Field } from 'formik';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import Layout from '../src/Layout';


// TODO Another button to save to PDF, or maybe submit saves a PDF for them.

export default function Projects() {

    return (<Layout>
              <Typography variant="h4">Projects</Typography>
              <List>

                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon/>
                  </ListItemIcon>
                  <ListItemText style={{ margin: -25}}>
                    <Typography variant="h6">
                      Banet Lab Collaboration
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <Typography align="justify">
                    <Link href="https://abanet.yourweb.csuchico.edu/index.html">Dr. Banet's lab</Link> studies the long term effects of increased stress in juvenile
                    fish and, separately, the predation on juvenile salmon by non-native
                    species. I help the Banet lab with some of their statistical analyses
                    regarding these research topics.
                  </Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon/>
                  </ListItemIcon>
                  <ListItemText style={{ margin: -25}}>
                    <Typography variant="h6">
                      Stan - a probabilistic programming language
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <Typography align="justify">
                    <Link href="http://mc-stan.org/">Stan</Link> is software targeting Bayesian statistics and, more generally, high-performance statistical computing. The core development team is a friendly and active group of computer programmers turned statisticians -- or is it the other way around? Contributing to the Stan code base is great fun and a terrific way to learn/practice programming. Lately I've been thinking hard about the Hamiltonian Monte Carlo algorithm behind Stan.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography align="justify">
                    Recently I played around with rewriting parts of Stan's internals, and wrote up a <Link href="hmcdynamics.html">technical report</Link> despite my failed attempts to make the software faster. 
                  </Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon/>
                  </ListItemIcon>
                  <ListItemText style={{ margin: -25}}>
                    <Typography variant="h6">
                      Chico's Affordable Learning Solutions
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <Typography align="justify">
                    <Link href="https://www.csuchico.edu/cals/">CAL$</Link> is a program that encourages the use of more affordable course materials in an effort to help students save money.  Starting in 2018, Dr. Beth Shook and I became co-coordinators of Chico State's local effort of this <Link href="https://als.csuprojects.org/">Chancellor's Office program</Link>.  Much of this effort relies on <Link href="https://en.wikipedia.org/wiki/Open_educational_resources">Open Educational Resources (OER)</Link>, which are increasingly of high quality and available for a wide variety of discplines.  For more information at the national level, check out <Link href="https://oerdigest.org/">OER Digest</Link>, a "bi-weekly newsletter for open education updates, opportunities, and reminders."
                  </Typography>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon/>
                  </ListItemIcon>
                  <ListItemText style={{ margin: -25}}>
                    <Typography variant="h6">
                      Spiders
                    </Typography>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <Typography align="justify">
                    <Link href="http://simon.bonners.ca/bonner-lab/wpblog/">Dr. Simmon Bonner</Link> and I developed a predator preferences model, following the work of Dr. Strauss's linear index. Our method models predator preferences across an array of prey species and times.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    <Link href="https://link.springer.com/article/10.1007/s10651-016-0341-3">Paper</Link> | <Link href="https://onlinelibrary.wiley.com/doi/abs/10.1111/mec.14554">Follow up paper</Link>
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Code: <Link href="https://cran.r-project.org/web/packages/spiders/index.html">CRAN</Link> | <Link href="https://github.com/roualdes/spiders">GitHub</Link>
                  </Typography>
                </ListItem>
              </List>
            </Layout>
           );
}
