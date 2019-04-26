import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import barbarian  from '../assets/img/barbarian.png';
import rogue from '../assets/img/rogue.png';
import cleric from '../assets/img/cleric.png';
import rope from '../assets/img/rope.png';
import knife from '../assets/img/knife.png';
import potion from '../assets/img/potion.png';




function PlayerCreation(props) {
  let _playerName = null;

  function handleFormSubmission(event) {
    event.preventDefault();
    let form = event.target;
    let _playerClass = form.elements.playerClass.value;
    let _playerItems = form.elements.playerItems.value;
    props.onCreateNewPlayer({playerName: _playerName.value, playerClass: _playerClass, playerItems: [_playerItems]});

  }
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
          width: 10vw;

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
      <form
        onSubmit={handleFormSubmission}>

        <div>
          <label><span>Character Name: </span>
            <input
              type='text'
              name='playerName'
              placeholder='Enter your name here'
              ref={(input) => {_playerName = input;}}/>
          </label>
        </div>
        <label><span>Choose Your Class: </span></label>
        <div>
          <label>
            <input
              type='radio'
              name='playerClass'
              value='barbarian'
            />
            <img src={barbarian}></img>
          </label>
          <label>
            <input
              type='radio'
              name='playerClass'
              value='rogue'
            />
            <img src={rogue}></img>
          </label>
          <label>
            <input
              type='radio'
              name='playerClass'
              value='cleric'
            />
            <img src={cleric}></img>
          </label>
        </div>
        <label><span>Select one item: </span></label>
        <div>
          <label>
            <input
              type='radio'
              name='playerItems'
              value='rope'
            />
            <img src={rope}></img>
          </label>
          <label>
            <input
              type='radio'
              name='playerItems'
              value='knife'
            />
            <img src={knife}></img>
          </label>
          <label>
            <input
              type='radio'
              name='playerItems'
              value='potion'/>

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

PlayerCreation.propTypes = {
  onCreateNewPlayer: PropTypes.func
};

export default PlayerCreation;
