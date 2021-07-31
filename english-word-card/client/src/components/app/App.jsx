import React, { Component } from 'react';

import CardapiService from '../../services/cardapi-service';

import Card from '../card';
import PrevCard from '../prev-card';
import NextCard from '../next-card';
import InitializationLoading from '../initialization-loading';
import Info from '../info';
import InfoBtn from '../info-btn';
import Error from '../error';

import './app.css';

class App extends Component {

    cardapiService = new CardapiService();

    state = {
        clicked: false,
        loadingCard: true,
        initializationLoading: true,
        openInfo: false,
        error: false,
        cardsLength: 0,
        currentCard: {},
        prevCard: null,
    };

    initializeCard = () => {
        this.cardapiService
            .getAllCards()
            .then(({ cardsLength }) => {
                this.setState({ cardsLength, initializationLoading: false }, () => {
                    this.initializeRandomCard();
                });
            })
            .catch(() => {
                this.setState({
                    initializationLoading: false,
                    loadingCard: false,
                    error: true,
                });
            });
    };

    initializeRandomCard = () => {
        this.cardapiService
            .getCard(Math.floor(Math.random()*this.state.cardsLength))
            .then(currentCard => {
                this.setState({
                    currentCard,
                    loadingCard: false,
                    initializationLoading: false,
                });
            })
            .catch(() => {
                this.setState({
                    initializationLoading: false,
                    loadingCard: false,
                    error: true,
                });
            });;
    };


    handleClickedCard = () => {
        this.setState(({ clicked }) => ({
            clicked: !clicked,
        }));
    };

    handlePrevCard = () => {
        this.setState(({ prevCard }) => ({
            clicked: false,
            currentCard: prevCard,
            prevCard: null,
            loadingCard: false,
        }));
    };

    updateLoading = () => {
        this.setState({
            loadingCard: true,
        });
    };

    updateError = () => {
        this.setState({
            error: true,
            loadingCard: false,
            initializationLoading: false,
        });
    };

    handleNextCard = () => {
        this.updateLoading();
        const { cardsLength, currentCard } = this.state;
        let random = Math.floor(Math.random()*cardsLength);

        if(random === currentCard.cardId) {
            random = Math.floor(Math.random()*cardsLength);
        }

        this.cardapiService
            .getCard(random)
            .then(card => {
                this.setState(({ currentCard }) => ({
                    prevCard: currentCard,
                    currentCard: card,
                    clicked: false,
                    loadingCard: false,
                }));
            })
            .catch(() => {
                this.handleNextCard();
            });
    };

    handleOpenInfo = () => {
        this.setState(({ openInfo }) => ({
            openInfo: !openInfo,
        }));
    };

    componentDidMount() {
        this.initializeCard();
    };

    componentDidCatch() {
        this.updateError();
    };

    render() {
        const { clicked, currentCard, prevCard, openInfo,
            loadingCard, error, initializationLoading } = this.state;

        if(initializationLoading) {
            return <InitializationLoading />
        }

        if(error) {
            return <Error />
        }

        return (
            <div className="app">
                <InfoBtn openInfo={this.handleOpenInfo} />
                {openInfo && <Info closeInfo={this.handleOpenInfo} />}
                <Card 
                    clicked={clicked}
                    handleClick={this.handleClickedCard}
                    currentCard={currentCard}
                    loading={loadingCard}
                />
                <div className="toggle-card">
                    <PrevCard 
                        handlePrevCard={this.handlePrevCard} 
                        disabled={prevCard} 
                    />
                    <NextCard 
                        handleNextCard={this.handleNextCard} 
                    />
                </div>
            </div>
        );
    };
};

export default App;