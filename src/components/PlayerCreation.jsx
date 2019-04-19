import React from 'react';
import { Link } from 'react-router-dom';
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

        [type=text] {
          height: 3vh;
          width: 20vw;
        }

        input {
          font-size: 2vw;
        }

        input::placeholder {
          font-size: 2vw;
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

        span {
          font-size: 3vw;
        }

            `}</style>
      <form>
        <div>
          <label><span>Character Name: </span>
            <input type='text' id='playerName' placeholder='Enter your name here' />
          </label>
        </div>
        <label><span>Choose Your Class: </span></label>
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
        <label><span>Select one item: </span></label>
        <div>
          <label>
            <input type='radio' name='playerItems' value='Rope' />
            <img src={rope}></img>
          </label>
          <label>
            <input type='radio' name='playerItems' value='Knife' />
            <img src={knife}></img>
          </label>
          <label>
            <input type='radio' name='playerItems' value='Potion' />
            <img src={potion}></img>
          </label>
        </div>
        <div>
          <button type='submit'><Link to='/start'>Continue</Link></button>
        </div>
      </form>
    </div>
  );
}

export default PlayerCreation;
