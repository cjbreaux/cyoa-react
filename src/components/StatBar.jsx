import React from 'react';
import PropTypes from 'prop-types';


function StatBar(props) {

  return(
    <div>
      <h2>{props.playerName} the {props.playerClass.charAt(0).toUpperCase() + props.playerClass.slice(1)}</h2>
      <h2>HP: {props.hp}</h2>
      <img src={require(`../assets/img/${props.playerClass}.png`)} />
      <h2>Inventory</h2>
      <hr/>
      <div style={{display: 'flex'}}>
        {props.playerItems}
      </div>
      <hr/>
    </div>
  );
}

StatBar.propTypes = {
  playerImg: PropTypes.string
};

export default StatBar;
