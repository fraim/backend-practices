import React from 'react';

import infoIcon from '../../assets/img/info.png';

import './info-btn.css';

const InfoBtn = (props) => {
    const { openInfo } = props

    return (
        <button 
            onClick={() => openInfo()} 
            className="info-btn"
        >
            <img src={infoIcon} alt="info" title="about application"/>
        </button>
    )
};

export default InfoBtn;