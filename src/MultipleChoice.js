/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Typography from '@material-ui/core/Typography';
import { RadioGroup } from 'formik-material-ui';

export default function MultipleChoice(props) {
    const {
        name,
        label,
        ...other
    } = props;

    return (<React.Fragment>
            <Field component={RadioGroup} name={name}
            label={label} style = {{backgroundColor: "#e3f2fd"}}>
            {props.children}
            </Field>
            <br />
            <br />
            </React.Fragment>);
}

MultipleChoice.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string
};
