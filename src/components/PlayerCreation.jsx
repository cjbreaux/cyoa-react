import React from 'react';

function PlayerCreation() {
  return (
    <div>
      <form>
        //make forms required after testing
        <label>Character Name: </label>
          <input type='text' id='playerName' placeholder='Enter your name here' />
        <label>Choose Your Class: </label>
          <input type='radio' name='playerClass' value='Barbarian' /> Barbarian
          <input type='radio' name='playerClass' value='Rogue' /> Rogue
          <input type='radio' name='playerClass' value='Cleric' /> Cleric
        <label>Select one item: </label>
          <input type='radio' name='playerItem' value='Rope' /> Rope
          <input type='radio' name='playerItem' value='Knife' /> Knife
          <input type='radio' name='playerItem' value='Potion' /> Potion
      </form>
    </div>
  );
}

export default PlayerCreation;
