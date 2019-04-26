import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerCreation from './PlayerCreation';
import Start from './Start';
import Bridge from './Bridge';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        playerName: null,
        playerClass: null,
        playerItems: [],
        hp: 10
      }
    };
  }
  
  render() {
    return(
      <div className='container'>
        <style jsx>{`
            .container {
              border: 1px solid red;
              width: 90vw;
              height: 90vh;
              margin: auto;
            }
            `}</style>
        <Switch>
          <Route exact path='/' component={PlayerCreation} />
          <Route path='/start' component={Start} />
          <Route path='/bridge' component={Bridge} />
        </Switch>
      </div>
    );
  }
}

export default App;
