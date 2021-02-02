import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = wrappedComponent => ({isLoading, ...otherProps}) => (
    isLoading ? 
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
    :
    <wrappedComponent {...otherProps}/>
);

export default WithSpinner;