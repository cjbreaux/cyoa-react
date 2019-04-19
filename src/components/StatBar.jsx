import React from 'react';
import PropTypes from 'prop-types';


function StatBar(props) {

  return(
    <div className='panel'>
      <style jsx>{`
        .inventory {
          display: flex;
          flex-basis: 0;
          flex-wrap: wrap;
          border: 1px solid red;
        }
        .itemImages {
          background-color: blue;
        }
        .panel {
          width: 20vw;
          height: 60vh;
          border: 1px solid blue;
        }
        img {
          width: 100%;
          max-height: 20vh;
        }
            `}</style>
      <h2>{props.playerName} the {props.playerClass.charAt(0).toUpperCase() + props.playerClass.slice(1)}</h2>
      <h2>HP: {props.hp}</h2>
      <img src={require(`../assets/img/${props.playerClass}.png`)} />
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
  playerItems: PropTypes.string,
  hp: PropTypes.number
};

export default StatBar;
