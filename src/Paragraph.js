import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Paragraph(props) {
    const { children } = props;
    return (<Typography paragraph={true}>
            {children}
            </Typography>
           );
}
