import React from 'react';
import barbarian  from '../assets/img/barbarian.png';
import rogue from '../assets/img/rogue.png';
import cleric from '../assets/img/cleric.png';
import rope from '../assets/img/rope.png';
import knife from '../assets/img/knife.png';
import potion from '../assets/img/potion.png';

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

        button {
          height: 5vh;
          width: 15vw;
          border-radius: 15px;
          font-size: 3vw;
        }

        button:hover {
          color: white;
          background-color: blue;
          cursor: pointer;
        }
            `}</style>
      <form>
        <div>
          <label>Character Name:
            <input type='text' id='playerName' placeholder='Enter your name here' />
          </label>
        </div>
        <label>Choose Your Class: </label>
        <div>
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
        </div>
        <label>Select one item: </label>
        <div>
          <label>
            <input type='radio' name='playerItem' value='Rope' />
            <img src={rope}></img>
          </label>
          <label>
            <input type='radio' name='playerItem' value='Knife' />
            <img src={knife}></img>
          </label>
          <label>
            <input type='radio' name='playerItem' value='Potion' />
            <img src={potion}></img>
          </label>
        </div>
        <div>
          <button type='submit'>Continue</button>
        </div>
      </form>
    </div>
  );
}

export default PlayerCreation;
