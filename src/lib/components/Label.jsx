import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Label = ({ label, htmlFor, labelClassName, labelStyle }) => {
    return (
        <label
            className={'form-label ' + (labelClassName !== undefined && labelClassName)}
            style={labelStyle}
            htmlFor={htmlFor}
        >
            {label}
        </label>
    );
};

Label.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    labelClassName: PropTypes.string,
    labelStyle: PropTypes.object,
};

export default Label;
