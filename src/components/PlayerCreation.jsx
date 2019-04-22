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
          width: 15vw;

        }

        button {
          height: 5vh;
          width: 15vw;
          border-radius: 15px;
          font-size: 2vw;
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
            <input type='radio' name='playerClass' value='barbarian' />
            <img src={barbarian}></img>
          </label>
          <label>
            <input type='radio' name='playerClass' value='rogue' />
            <img src={rogue}></img>
          </label>
          <label>
            <input type='radio' name='playerClass' value='cleric' />
            <img src={cleric}></img>
          </label>
        </div>
        <label><span>Select one item: </span></label>
        <div>
          <label>
            <input type='radio' name='playerItems' value='rope' />
            <img src={rope}></img>
          </label>
          <label>
            <input type='radio' name='playerItems' value='knife' />
            <img src={knife}></img>
          </label>
          <label>
            <input type='radio' name='playerItems' value='potion' />
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
