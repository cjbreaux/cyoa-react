import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayerCreation from './PlayerCreation';
import Start from './Start';
import Bridge from './Bridge';
import Forest from './Forest';


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
    this.handleCreateNewPlayer = this.handleCreateNewPlayer.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  handleCreateNewPlayer(newPlayer, item) {
    let playerCopy = Object.assign({}, this.state.player);
    playerCopy.playerName = newPlayer.playerName;
    playerCopy.playerClass = newPlayer.playerClass;
    playerCopy.playerItems = newPlayer.playerItems;
    playerCopy[item] = true;
    this.setState({player: playerCopy});
  }

  handleAddItem(item) {
    let playerCopy = Object.assign({}, this.state.player);
    playerCopy.playerItems.push(item);
    playerCopy[item] = true;
    this.setState({player: playerCopy});
  }

  handleRemoveItem(item) {
    let playerCopy = Object.assign({}, this.state.player);
    for (let i = 0; i < playerCopy.playerItems.length; i++) {
      if (playerCopy.playerItems[i] === item ) {
        playerCopy.playerItems.splice(i, 1);
      }
    }
    this.setState({player: playerCopy});
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
          <Route
            exact path='/'
            render={()=>
              <PlayerCreation
                onCreateNewPlayer={this.handleCreateNewPlayer}/>}/>
          <Route
            path='/start'
            render={()=>
              <Start
                playerInfo={this.state.player}
                onRemoveItem={this.handleRemoveItem}
                onAddItem={this.handleAddItem}/>}/>
          <Route
            path='/bridge'
            render={()=>
              <Bridge
                playerInfo={this.state.player}
                onAddItem={this.handleAddItem}/>}/>
          <Route
            path='/forest'
            render={()=>
              <Forest
                playerInfo={this.state.player}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
