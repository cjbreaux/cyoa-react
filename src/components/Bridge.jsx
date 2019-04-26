import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StatBar from './StatBar';
import StoryText from './StoryText';
import ChoiceLinks from './ChoiceLinks';


function Bridge(props) {
  let branches = [
    {path: '/forest',  description: 'Attempt to cross the bridge'},
    {path: '/start', description:'Turn around'}
  ];

  if (props.playerInfo.playerItems.includes('rope')) {
    branches.push({path: '/valley', description:'Use your rope to climb down into the gorge'});
  }
  // for( var i = 0; i < player.playerItems.length; i++){
  //   if ( player.playerItems[i] === 'rope') {
  //     player.playerItems.splice(i, 1);
  //   }
  // }
  //
  // if(player.playerClass !== 'rogue') {
  //   player.hp--;
  // }

  return(
    <div className='viewContainer'>
      <style jsx>{`
        .itemImages {
          width: 100%;
        }

        .viewContainer {
          display: grid;
          grid-template-areas:
                    "side text text"
                    "side text text"
                    "side choice choice";
          grid-gap: 5%;
        }

        a {
          text-decoration: none;
        }

            `}</style>
      <div style={{gridArea:'side'}}>
        <StatBar
          playerClass={props.playerInfo.playerClass}
          playerName={props.playerInfo.playerName}
          playerItems={props.playerInfo.playerItems.map((item, index) =>
            <div key={index}><img className='itemImages'  src={require(`../assets/img/${item}.png`)} ></img></div>)}
          hp={props.playerInfo.hp} />
      </div>
      <div style={{gridArea:'text'}}>
        <StoryText
          playerInfo={props.playerInfo}
          title={'A Bridge Too Far'}
          main={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          barbarian={'Flavor text for Barbarian'}
          rogue={'Because you are a Rogue, you see something the other classes do not'}
          cleric={'Flavor text for the Cleric'}
        />
      </div>
      <div style={{gridArea:'choice'}}>
        <ChoiceLinks
          branches={branches.map((branch, index) =>
            <button href="#" key={index}><Link to={branch.path}>{branch.description}</Link></button>)}/>
      </div>
    </div>
  );
}

Bridge.propTypes = {
  playerInfo: PropTypes.object
};

export default Bridge;
