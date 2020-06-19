import React from 'react';
import Link from '@material-ui/core/Link';

export default function Url(props) {
    const { href } = props;
    return (<Link target="_blank" rel="noopener" href={href}>{href}</Link>);
}
