import React from 'react';
import StatBar from './StatBar';
import PLAYER from '../mockData/mockUser';

function Start() {
  let player = PLAYER;
  return(
    <div>
      <style jsx>{`
        .itemImages {
          width: 50%;

        }

        .itemImages:hover {
          background-color: red;
          cursor: pointer;
        }

            `}</style>
      <h1>Start View</h1>
        <StatBar
          playerClass={player.playerClass}
          playerName={player.playerName}
          playerItems={player.playerItems.map((item, index) =>
            <div><img className='itemImages' key={index} src={require(`../assets/img/${item}.png`)} ></img></div>)}
          hp={player.hp} />
    </div>
  );
}

export default Start;
