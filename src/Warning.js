/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';

export default function Warning(props) {
    const [open, setOpen] = React.useState(true);
    return (<Collapse in={open}>
            <Alert color="warning" severity="warning" action={
                    <IconButton aria-label="close" color="inherit"
                size="small" onClick={() => {setOpen(false);}}>
                    <CloseIcon fontSize="inherit" />
                    </IconButton>}>
            {props.children}
            </Alert>
            </Collapse>);
}
