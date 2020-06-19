/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import katex from 'katex';

export default function Tex(props) {
    const { latex, displayMode, ...other  } = props;
    const tex = katex.renderToString(latex, {
        throwOnError: false,
        displayMode: displayMode || false
    });
    return (<span dangerouslySetInnerHTML={{__html: tex}}/>);
}

Tex.propTypes = {
    latex: PropTypes.string,
    displayMode: PropTypes.bool
};


