import React from 'react';

import './next-card.css';

const NextCard = (props) => {
    const { handleNextCard } = props;

    return (
        <button 
            className="next-card"
            onClick={() => handleNextCard()}
        >
            Next Card
        </button>
    );
};

export default NextCard;