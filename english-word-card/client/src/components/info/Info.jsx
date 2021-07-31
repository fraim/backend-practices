import React, { useState } from 'react';

import enLang from '../../lang/en/constants';
import ruLang from '../../lang/ru/constants';

import './info.css';

const Info = (props) => {
    const { closeInfo } = props;
    const [lang, setLang] = useState(false);
    const { titleAboutAppEn, translateToEn, textAboutAppEn } = enLang;
    const { titleAboutAppRu, translateToRu, textAboutAppRu } = ruLang;

    return (
        <div className="info">
            <button
                className="info-close"
                onClick={() => closeInfo()}
            >
                &times;
            </button>
            <button 
                onClick={() => setLang(!lang)}
                className="translate-btn"
            >
                {!lang
                    ? translateToEn
                    : translateToRu
                }
            </button>
            <div className="inner-container">
                <h3>
                    {!lang
                        ? titleAboutAppEn
                        : titleAboutAppRu
                    }
                </h3>
                <p>
                    {!lang
                        ? textAboutAppEn
                        : textAboutAppRu
                    }
                </p>
            </div>
            <a target="blank" href="https://vk.com/fraim263" className="created-by">
                by Yaroslav Butakov
            </a>
        </div>
    );
};

export default Info;