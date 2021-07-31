import React from 'react';

import CardView from '../card-view';
import LoadingCard from '../loading-card';

import './card.css';

const Card = (props) => {
    const { clicked, handleClick, currentCard, loading } = props;

    return (
        <div 
            className={loading ? 'card loading' : clicked ? 'card clicked' : 'card'}>
            {loading 
                ? <LoadingCard />
                : <CardView handleClick={handleClick} currentCard={currentCard} />
            }
        </div>
    )
}

export default Card;