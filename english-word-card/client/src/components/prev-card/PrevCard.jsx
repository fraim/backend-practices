import React from 'react';

import './prev-card.css';

const PrevCard = (props) => {
    const { disabled, handlePrevCard } = props;

    return (
        <button 
            className={disabled === null ? 'prev-card disabled' : 'prev-card'}
            disabled={disabled === null ? 'disabled' : null}
            onClick={() => handlePrevCard()}
        >
            Prev Card
        </button>
    );
};

export default PrevCard;