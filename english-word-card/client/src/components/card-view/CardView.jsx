import React from 'react';

import imageNotFound from '../../assets/img/imagenotfound.png';

const CardView = (props) => {
    const { currentCard, handleClick } = props;
    const { engWord, rusWord, engPartOfSpeech, 
        rusPartOfSpeech, frontImg, backImg } = currentCard;

    return (
        <>
            <div 
                className="front front1" 
                onClick={() => handleClick()}
            >
                {rusPartOfSpeech === 'test'
                    ? null
                    : <span className="part-of-speech">part of speech: {engPartOfSpeech}</span> 
                }
                <h3>{engWord}</h3>
                {frontImg === 'test' 
                    ?   <img 
                            src={imageNotFound} 
                            alt="img not found" 
                            title="No image yet"
                        />
                    :   <img 
                            src={frontImg}
                            alt={engWord}
                        />
                }
                
            </div>
            <div 
                className="front front2"
                onClick={() => handleClick()}
            >
                {engPartOfSpeech === 'test'
                    ? null
                    : <span className="part-of-speech">часть речи: {rusPartOfSpeech}</span>
                }
                <h3>{rusWord}</h3>
                {backImg === 'test'
                    ?   <img 
                            src={imageNotFound} 
                            alt="img not found" 
                            title="Картинки пока нет"
                        />
                    :   <img 
                            src={backImg}
                            alt={rusWord}
                        />
                }
                
            </div>
        </>
    );
};

export default CardView;