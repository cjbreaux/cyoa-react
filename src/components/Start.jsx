import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StatBar from './StatBar';
import StoryText from './StoryText';
import ChoiceLinks from './ChoiceLinks';


function Start(props) {
  let branches = [
    {path: '/bridge',  description: 'Head over to the bridge'},
    {path: '/cart', description:'Investigate the overturned cart'}
  ];

  if (props.playerInfo.playerItems.includes('rope')) {
    branches.push({path: '/bridge', description:'Use your rope for something'});
  }

  let grabKnife = null;
  if (props.playerInfo.playerClass === 'rogue') {
    grabKnife = <button disabled={props.playerInfo.knife === true ? true : false} onClick={()=>props.onAddItem('knife')}>Pick up the knife</button>;
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
        />
      {grabKnife}
      </div>
      <div style={{gridArea:'choice'}}>
        <ChoiceLinks
          branches={branches.map((branch, index) =>
            <button key={index}><Link to={branch.path}>{branch.description}</Link></button>)}/>
      </div>
    </div>
  );
}
Start.propTypes = {
  playerInfo: PropTypes.object
};



export default Start;
