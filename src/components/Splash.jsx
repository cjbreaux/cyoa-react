import React from 'react';
import d20  from  '../assets/img/d20.jpg';

function Splash() {
  return(
    <div className='container'>
      <style jsx>{`

        .container {
          height: 50vh;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          background-image: url(${d20});
          background-size: contain;
          background-repeat: no-repeat;
        }
      `}</style>
      <div>
        <h1>Choose Your Own Adventure</h1>
        <p>These are instructions on how to play</p>
      </div>
      <div>
        <button>Click Here to Begin</button>
      </div>
    </div>
  );
}

export default Splash;
