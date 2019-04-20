import React from 'react';
import PropTypes from 'prop-types';

function ChoiceLinks(props) {
  const flexStyle = {
    display: 'grid',
    flexDirection: 'column'
  };
  return(
    <div style={flexStyle}>
      {props.branches}
    </div>
  );
}

ChoiceLinks.propTypes = {
  branches: PropTypes.array
};

export default ChoiceLinks;
