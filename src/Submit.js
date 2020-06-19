/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';

export default function Submit(props) {
    const { isSubmitting, submitForm, validateForm, ...other} = props;
    return (<Button variant="contained" color="primary"
            disabled={isSubmitting}
            onClick={async () => {
                const curErrors = await validateForm();
                const curErrorsKeys = Object.keys(curErrors);

                if (curErrorsKeys.length) {
                    
                    const el = document.getElementById(curErrorsKeys[0]);

                    if (el) {
                        // experimental, but available in most browswers I care about
                        el.scrollIntoView({behavior: "smooth", block: "center"});
                    }
                }
                submitForm();
                return;
            }}>
                Submit
            </Button>);
}

Submit.propTypes = {
    isSubmitting: PropTypes.bool,
    submitForm: PropTypes.func
};
