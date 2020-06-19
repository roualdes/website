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

export default function Index() {

    return (<Layout>
              <Typography variant="h4">Edward A. Roualdes</Typography>
              <List>

                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon fontSize="small"/>
                  </ListItemIcon>
                  <ListItemText style={{ margin: -25}}>
                    <Typography>
                      Asst. Professor of Statistics at <Link href="https://www.csuchico.edu/">CSU, Chico</Link>
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon/>
                  </ListItemIcon>
                  <ListItemText style={{ margin: -25}}>
                    <Typography>
                      <Link href="/cv.pdf">CV</Link>
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon/>
                  </ListItemIcon>
                  <ListItemText style={{ margin: -25}}>
                    <Typography>
                      erou aldes at csu chico dot edu
                    </Typography>
                  </ListItemText>
                </ListItem>

              </List>
            </Layout>
           );
}
