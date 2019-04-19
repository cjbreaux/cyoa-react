import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerCreation from './PlayerCreation';
import Start from './Start';

function App() {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={PlayerCreation} />
        <Route path='/start' component={Start} />
      </Switch>
    </div>
  );
}

export default App;
