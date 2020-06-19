/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import Typography from '@material-ui/core/Typography';
import { TextField } from 'formik-material-ui';

export default function ShortAnswer(props) {
    const {
        name,
        label,
        error,
        touched,
        ...other
    } = props;

    return (<React.Fragment>
              <Field component={TextField} fullWidth={true} multiline={true}
                     InputLabelProps={{ shrink: true }}
                     name={name}
                     id={name}
                     type={name}
                     label={label}
                     style={{backgroundColor: "#e3f2fd"}}
              />
              { error && touched ? (<div>{errors.name}</div>) : null }
              <ErrorMessage name={name} />
              <br />
              <br />
            </React.Fragment>);
}

ShortAnswer.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    touched: PropTypes.string
};
