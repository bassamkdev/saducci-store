import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundry.styles'

class ErrorBoundry extends React.Component {
    constructor(props){
        super(props);
        this.state = { hasError: false };
    };

    static getDerivedStateFromError(error) {
        return {hasError: true};
    };
    
    componentDidCatch(error, info) {
        console.log(error)
    };

    render() {
        if(this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/A040Lxr.png'/>
                    <ErrorImageText>This Page is Lost in Space</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundry;