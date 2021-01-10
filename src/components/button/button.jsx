import React from 'react';

import './button.scss';

const Button = ({children, isGoogleSignin, inverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'is-google-signin' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default Button;