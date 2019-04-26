import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StatBar from './StatBar';
import StoryText from './StoryText';
import ChoiceLinks from './ChoiceLinks';


function Bridge(props) {
  let branches = [
    {path: '/start',  description: 'GO back to start'},
    {path: '/', description:'go back to player creator'}
  ];

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
