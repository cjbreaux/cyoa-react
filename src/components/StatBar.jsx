import React from 'react';
import PropTypes from 'prop-types';

function StatBar(props) {
  

  return(
    <div className='panel'>
      <style jsx>{`
        .inventory {
          display: flex;
        }
        .classImage {
          width: 60%;
        }
        .panel {
          width: 20vw;
          border: 1px solid blue;
        }
        img {

        }
            `}</style>

      <h2>{props.playerName.charAt(0).toUpperCase() + props.playerName.slice(1)} the {props.playerClass.charAt(0).toUpperCase() + props.playerClass.slice(1)}</h2>
      <h2>HP: {props.hp}</h2>
      <img className='classImage' src={require(`../assets/img/${props.playerClass}.png`)} />
      <h2>Inventory</h2>
      <hr/>
      <div className='inventory'>
        {props.playerItems}
      </div>
      <hr/>
    </div>
  );
}

StatBar.propTypes = {
  playerClass: PropTypes.string,
  playerName: PropTypes.string,
  playerItems: PropTypes.array,
  hp: PropTypes.number
};

export default StatBar;
