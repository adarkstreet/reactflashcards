import React, { Component } from 'react';
import Switcher from './Switcher';

class App extends Component {
  state = ({front: true}, {back: false})

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Flashcards!</h1>
        </header>
        <p className="App-intro">
          Click on the Backside to see the definitions and switch back!
        </p>
        <div>
          <p class="front">Arrow Funtion</p>
          <p class="back">The backside of arrow function</p>
          <hr />
          <Switcher />
          <hr />
        </div>
        <div>
          <p class="front">Webpack</p>
          <p class="back">the backside of Webpack</p>
          <hr />
          <Switcher />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;