import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Label = ({ label, htmlFor, className, style }) => {
    return (
        <label
            className={'form-label ' + (className !== undefined && className)}
            style={style}
            htmlFor={htmlFor}
        >
            {label}
        </label>
    );
};

Label.propTypes = {
    label: PropTypes.string.isRequired,
    htmlFor: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
};

export default Label;
