import React from 'react';
import Layout from '../src/Layout';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import Warning from '../src/Warning';

const meta314 = [
    {
        id: 'syllabus',
        url: 'www.csuchic.edu'
    },
    {
        id: 'otherlink',
        url: '/public/cv.pdf'
    },
];

const homework314 = [
    {
        id: 'campus',
        url: 'www.csuchic.edu'
    },
];

const ExpansionPanel = withStyles({
  root: {
      border: '0px solid',
      boxShadow: 'none',
      '&:before': {
          display: 'none',
      },
      '&$expanded': {
          margin: 'auto',
      },
  },
  expanded: {},
})(MuiExpansionPanel);

function MaterialsList(props) {
    const { data } = props;
    return (
        <List style={{ marginTop: -30 }}>
          {meta314.map(item => (
              <ListItem key = { item.id }>
                <ListItemIcon>
                  <ArrowRightIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText style={{ margin: -25}}>
                  <Link href={ item.url }>{ item.id }</Link>
                </ListItemText>
              </ListItem>
          ))}
        </List>
    );
};


// TODO Another button to save to PDF, or maybe submit saves a PDF for them.

export default function Teaching() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (<Layout>
            <Typography variant="h4">Math 105</Typography>
            <Warning>
            Under development.
            </Warning>
              <ExpansionPanel square
                              expanded={expanded === 'panel1'}
                              onChange={handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                                       aria-controls="panel1d-content"
                                       id="panel1d-header">
                  <Typography>Meta</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <MaterialsList data={ meta314 }/>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square
                              expanded={expanded === 'panel2'}
                              onChange={handleChange('panel2')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                                       aria-controls="panel2d-content"
                                       id="panel2d-header">
                  <Typography>Homework</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <MaterialsList data={ meta314 }/>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square
                              expanded={expanded === 'panel3'}
                              onChange={handleChange('panel3')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}
                                       aria-controls="panel3d-content"
                                       id="panel3d-header">
                  <Typography>Labs</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <MaterialsList data={ meta314 }/>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Layout>
    );
}
