import React from 'react';
import StatBar from './StatBar';
import PLAYER from '../mockData/mockUser';

function Start() {
  let player = PLAYER;
  return(
    <div>
      <h1>Start View</h1>
      <StatBar
        playerImg={player.playerClass}/>
    </div>
  );
}

export default Start;
