import React from 'react';
import propTypes from 'prop-types';

export const MyComponent = ({saludo, subtitulo}) => {

    return (
        <>
            <h1>{saludo}</h1>
            <h2>{subtitulo}</h2>
        
        </>
    )
}

MyComponent.prototype= {
    saludo: propTypes.string.isRequired,
    subtitulo: propTypes.string,
};
MyComponent.defaultProps= {
    subtitulo: 'Esto es una prueba' 
}