import React, {useState, useEffect} from "react";
import MemoryCardCard from "./MemoryCardCard"
import {shuffleArray} from "./randomiser"
import {counter} from "./counter"

const MemoryCardList = () => {
    const [presentCards, setPresentCards] = useState([]);
    const [startButton, setStartButton] = useState(false)
    const [cardsClicked, setCardsClicked] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        if (startButton) {
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
        }, [startButton]);

        const handleStartGame = () => {
            setStartButton(!startButton);
            if (!startButton) {
                let currentScoreCounter = counter(0)
                setCurrentScore(currentScoreCounter);            } 
        };
 
    return (
    <>
        <div className="game-container">
            <div id="score-container">
                <div><strong>Current Score: </strong><span id="current-score">{currentScore}</span></div>
                <div><strong>Highest Score: </strong><span id="high-score">{highScore}</span></div>
                <button id="startGame" onClick={handleStartGame} ><strong>{startButton ? 'Stop Game' : 'Start Game'}</strong></button>
            </div>
            <div id="displayDiv">
            {presentCards.map(card => (
                    <MemoryCardCard 
                        key={card.code} 
                        card={card} 
                        cardsClicked={cardsClicked} 
                        setCardsClicked={setCardsClicked} 
                        setCurrentScore={setCurrentScore} 
                        highScore={highScore} 
                        setHighScore={setHighScore} 
                        setPresentCards={setPresentCards}
                        startButton={startButton}
                        presentCards={presentCards}
                        currentScore={currentScore}
                        />
                ))}
            </div>
        </div>
    </>
    );
}

export default MemoryCardList;