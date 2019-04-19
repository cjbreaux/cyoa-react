import React from 'react';
import barbarian  from '../assets/img/barbarian.png';
import rogue from '../assets/img/rogue.png';
import cleric from '../assets/img/cleric.png';

//make forms required after testing
function PlayerCreation() {
  return (
    <div>
      <style jsx>{`
        [type=radio] {
          opacity: 0;
          width: 0;
          height: 0;
        }

        [type=radio] + img {
          cursor: pointer;
        }

        [type=radio]:checked + img {
          background-color: red;
        }
        img {
          width: 20vw;
          height: 25vh;
        }
            `}</style>
      <form>
        <label>Character Name: </label>
          <input type='text' id='playerName' placeholder='Enter your name here' />
        <label>Choose Your Class: </label>
        <label>
          <input type='radio' name='playerClass' value='Barbarian' />
          <img src={barbarian}></img>
        </label>
        <label>
          <input type='radio' name='playerClass' value='Rogue' />
          <img src={rogue}></img>
        </label>
        <label>
          <input type='radio' name='playerClass' value='Cleric' />
          <img src={cleric}></img>
        </label>
        <label>Select one item: </label>
          <input type='radio' name='playerItem' value='Rope' /> Rope
          <input type='radio' name='playerItem' value='Knife' /> Knife
          <input type='radio' name='playerItem' value='Potion' /> Potion
      </form>
    </div>
  );
}

export default PlayerCreation;
