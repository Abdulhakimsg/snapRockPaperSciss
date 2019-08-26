import React from 'react';
import './CurrentGame.css';

function renderCurrentGameResult(result) {
  if (result === 'wins') {
    return <div className='win-text'>Win</div>
  } else if (result === 'losses') {
    return <div className='loss-text'>Lose</div>
  } else if (result === 'draws') {
    return <div className='draw-text'>Tie!</div>;
  } else {
    return <div>Pick and start.</div>;
  }
}

const CurrentGame = ({currentGameResult}) => (
  <div className='current-game'>
    {renderCurrentGameResult(currentGameResult)}
  </div>
);


export default CurrentGame;