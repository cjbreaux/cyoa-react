import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StatBar from './StatBar';
import StoryText from './StoryText';
import ChoiceLinks from './ChoiceLinks';

function Ledge(props) {
  let branches = [
    {path: '/bridge',  description: 'Climb back up the rope'},
  ];

  let damaged = null;
  if (props.playerInfo.hp <= 5) {
    damaged = <p>You've looked and looked, but there's nothing here!</p>;
  }

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
          title={'A Perilous Ledge'}
          main={'You find a weather-worn wooden box....etc'}
          barbarian={'Flavor text for Barbarian'}
          rogue={'Flavor text for Rogue'}
          cleric={'Flavor text for the Cleric'}
        />
        <button disabled={props.playerInfo.hp <=5 ? true : false} onClick={()=>props.onDecreaseHealth(3)}>Rifle through the debris?</button>
        {damaged}
      </div>
      <div style={{gridArea:'choice'}}>
        <ChoiceLinks
          branches={branches.map((branch, index) =>
            <button href="#" key={index}><Link to={branch.path}>{branch.description}</Link></button>)}/>
      </div>
    </div>
  );
}

Ledge.propTypes = {
  playerInfo: PropTypes.object,
  onDecreaseHealth: PropTypes.func
};

export default Ledge;
