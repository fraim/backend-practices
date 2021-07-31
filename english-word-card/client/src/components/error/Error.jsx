import React from 'react';

import imageError from '../../assets/img/error.png';

import './error.css';

const Error = () => (
    <div className="error">
        <img src={imageError} alt="error"/>
        <h1>Something went wrong</h1>
        <p>try again later</p>
    </div>
);

export default Error;