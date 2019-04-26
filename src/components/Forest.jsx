import React from 'react';
import PropTypes from 'prop-types';
import StatBar from './StatBar';
import StoryText from './StoryText';

function Forest(props) {

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
          title={'Forest'}
          main={'The End so far.....'}
          barbarian={'Flavor text for Barbarian'}
          rogue={'Flavor text for Rogue'}
          cleric={'Flavor text for the Cleric'}
        />
      </div>
    </div>
  );
}

Forest.propTypes = {
  playerInfo: PropTypes.object
};

export default Forest;
