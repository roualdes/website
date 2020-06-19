import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

// TODO does not float to bottom, awkwardly hovers over content

export default function Copyright() {
    return (<Typography variant="body2" color="textSecondary" align="center" >
      {'Copyright © Edward A. Roualdes '}
      {new Date().getFullYear()}
      {', '}
          <MuiLink color="inherit" href="https://creativecommons.org/licenses/by/4.0/">
          CC BY 4.0
      </MuiLink>
            </Typography>
  );
}
