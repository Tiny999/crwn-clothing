import React from 'react';

import './button.scss';

const Button = ({children, isGoogleSignin, ...otherProps}) => (
    <button className={`${isGoogleSignin ? 'is-google-signin' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default Button;