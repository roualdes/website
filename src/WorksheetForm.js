/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Warning from '../src/Warning';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({disableHysteresis: true, threshold: 50});
    return (<Slide appear={false} direction="down" in={!trigger}>
            {children}
            </Slide>
  );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};

export default function WorksheetForm(props) {
    const { title, ...other } = props;

    return (<React.Fragment>
              <HideOnScroll {...props}>
                <AppBar color="transparent" style={{alignItems: "center", boxShadow: "none"}}>
                  <Toolbar>
                    <Typography variant="h4">{title}</Typography>
                  </Toolbar>
                </AppBar>
              </HideOnScroll>
              <Toolbar />

              <Container maxWidth="md">
                <Box my={4}>

                  <Warning>
                    Leaving or refreshing this page will lose your work.
                  </Warning>

                  {props.children}

                  {/* <Copyright /> */}
                </Box>
              </Container>
            </React.Fragment>
           );
}
