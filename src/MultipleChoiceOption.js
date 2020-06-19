/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Typography from '@material-ui/core/Typography';
import { FormControlLabel, Radio } from '@material-ui/core';

export default function MultipleChoiceOption(props) {
    const {
        value,
        label,
        isSubmitting,
        ...other
    } = props;

    return (<FormControlLabel value={value} control={<Radio disabled={isSubmitting} />}
            label={label}/>);
}

MultipleChoiceOption.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    isSubmitting: PropTypes.bool
};
