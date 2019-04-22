import React from 'react';
import { Link } from 'react-router-dom';
import StatBar from './StatBar';
import StoryText from './StoryText';
import ChoiceLinks from './ChoiceLinks';
import PLAYER from '../mockData/mockUser';

function Start() {
  let player = PLAYER;
  let branches = [
    {path: '/bridge',  description: 'Head over to the bridge'},
    {path: '/cart', description:'Investigate the overturned cart'}
  ];

  if (PLAYER.playerItems.includes('rope')) {
    branches.push({path: '/bridge', description:'Use your rope for something'});
  }

  return(
    <div className='viewContainer'>
      <style jsx>{`
        .itemImages {
          width: 100%;
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
                    ". choice .";
          grid-gap: 5%;
        }

        a {
          text-decoration: none;
        }

            `}</style>
      <div style={{gridArea:'side'}}>
        <StatBar
          playerClass={player.playerClass}
          playerName={player.playerName}
          playerItems={player.playerItems.map((item, index) =>
            <div key={index}><img className='itemImages'  src={require(`../assets/img/${item}.png`)} ></img></div>)}
          hp={player.hp} />
      </div>
      <div style={{gridArea:'text'}}>
        <StoryText
        />
      </div>
      <div style={{gridArea:'choice'}}>
        <ChoiceLinks
          branches={branches.map((branch, index) =>
            <a href="#" key={index}><Link to={branch.path}>{branch.description}</Link></a>)}/>
      </div>
    </div>
  );
}

export default Start;
