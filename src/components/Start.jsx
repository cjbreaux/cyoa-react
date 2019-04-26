import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import StatBar from './StatBar';
import StoryText from './StoryText';
import ChoiceLinks from './ChoiceLinks';


function Start(props) {
  let branches = [
    {path: '/bridge',  description: 'Head over to the bridge', id: v4()},
    {path: '/cart', description:'Investigate the overturned cart', id: v4()}
  ];

  if (props.playerInfo.playerItems.includes('rope')) {
    branches.push({path: '/bridge', description:'Use your rope for something', id: v4()});
  }

  let grabKnife = null;
  if (props.playerInfo.playerClass === 'rogue') {
    grabKnife = <button disabled={props.playerInfo.knife === true ? true : false} onClick={()=>props.onAddItem('knife')}>Pick up the item?</button>;
  }



  return(
    <div className='viewContainer'>
      <style global jsx>{`
        .itemImages {
          width: 100%;
        }

        .viewContainer {
          display: grid;
          max-height: 90vh;
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
          title={'The Story Begins'}
          main={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          barbarian={'Flavor text for Barbarian'}
          rogue={'Because you are a Rogue, you see something the other classes do not'}
          cleric={'Flavor text for the Cleric'}
        />
        {grabKnife}
      </div>
      <div style={{gridArea:'choice'}}>
        <ChoiceLinks
          branches={branches.map((branch) =>
            <button id= {branch.id} key={branch.id}><Link to={branch.path}>{branch.description}</Link></button>)}/>
      </div>
    </div>
  );
}
Start.propTypes = {
  playerInfo: PropTypes.object,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func
};



export default Start;
