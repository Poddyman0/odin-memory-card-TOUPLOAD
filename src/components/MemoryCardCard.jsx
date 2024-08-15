import React, {useState, useEffect} from "react";
import {shuffleArray} from "./randomiser"
import {counter} from "./counter"

const MemoryCardCard = ({card, cardsClicked, setCardsClicked, setCurrentScore, highScore, setHighScore, setPresentCards, startButton, presentCards, currentScore}) => {
    const [cardRefresh, setCardRefresh] = useState(false);

    useEffect(() => {
        if (cardRefresh) {
        fetch(`https://www.deckofcardsapi.com/api/deck/new/draw/?count=4`)
            .then(function(response) {
                return response.json()
            })
            .then(function(response) {
                let presentCardsShuffled = shuffleArray(response.cards) 
                setPresentCards(presentCardsShuffled)  
            })
            .catch(function(err) {
                console.log("Error: ", err)
            });
            }
        }, [cardRefresh]);


        function handleCardClick(cardCode) {
            if (cardsClicked.includes(cardCode)) {
                if (currentScore > highScore) {
                    setHighScore(currentScore);
                }
                setCardsClicked([]);
                let currentScoreCounter = counter(0)
                setCurrentScore(currentScoreCounter);

    
    
            } else {
                setCardsClicked([...cardsClicked, cardCode])
                let currentScoreCounter = counter(1)
                setCurrentScore(currentScoreCounter);
                setCardRefresh(true)
            }
        }
   
    return (
        <div id={card.code} className="ind-card-display">
                <div className="card-value" id={card.value}><strong>Value: </strong>{card.value}</div>
                <div className="card-suit" id={card.suit}><strong>Suit: </strong>{card.suit.toLowerCase()}</div>
                <button onClick={() => handleCardClick(card.code)} className="select-card-buttons"><strong>Select Card</strong></button>
                <img className="card-pic" src={card.image} id={card.images.svg} alt={card.code}></img>
        </div>
    );
};

export default MemoryCardCard;

