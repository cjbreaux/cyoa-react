import React from 'react';
import StatBar from './StatBar';
import StoryText from './StoryText';
import ChoiceLinks from './ChoiceLinks';
import PLAYER from '../mockData/mockUser';

function Start() {
  let player = PLAYER;
  return(
    <div className='viewContainer'>
      <style jsx>{`
        .itemImages {
          width: 50%;

        }

        .itemImages:hover {
          background-color: red;
          cursor: pointer;
        }

        .viewContainer {
          display: grid;
          grid-template-areas:
                    "side text text"
                    "side text text"
                    "side text text"
                    "choice choice choice";
          grid-gap: 5%;
        }

            `}</style>
          <div style={{gridArea:'side'}}>
            <StatBar
              playerClass={player.playerClass}
              playerName={player.playerName}
              playerItems={player.playerItems.map((item, index) =>
                <div><img className='itemImages' key={index} src={require(`../assets/img/${item}.png`)} ></img></div>)}
                  hp={player.hp} />
          </div>
          <div style={{gridArea:'text'}}>
            <StoryText />
          </div>
          <div style={{gridArea:'choice'}}>
            <ChoiceLinks />
          </div>
    </div>
  );
}

export default Start;
