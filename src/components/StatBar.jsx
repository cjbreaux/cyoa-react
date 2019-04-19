import React from 'react';
import PropTypes from 'prop-types';


function StatBar(props) {

  return(
    <div>
      <h2>test</h2>
      <img src={require(`../assets/img/${props.playerImg}.png`)} />
    </div>
  );
}

StatBar.propTypes = {
  playerImg: PropTypes.string
};

export default StatBar;
