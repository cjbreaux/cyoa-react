import React from 'react';
import PropTypes from 'prop-types';

function StoryText(props) {
  let playerClass = props.playerInfo.playerClass;
  let classText = null;
  if (playerClass === 'rogue') {
    classText = <p>{props.rogue}</p>;
  } else if (playerClass === 'barbarian') {
    classText = <p>{props.barbarian}</p>;
  } else if (playerClass === 'cleric') {
    classText = <p>{props.cleric}</p>;
  } else {
    return <p>'Error'</p>;
  }


  return (
    <div style={{backgroundColor:'yellow'}}>
      <h1>{props.title}</h1>
      <p>{props.main}</p>
      {classText}


    </div>
  );
}

StoryText.propTypes = {
  playerInfo: PropTypes.object,
  title: PropTypes.string,
  main: PropTypes.string,
  barbarian: PropTypes.string,
  rogue: PropTypes.string,
  cleric: PropTypes.string
};

export default StoryText;
