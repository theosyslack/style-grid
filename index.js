import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import StyleGrid from './StyleGrid';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    const grid = [
      [0, .1, .2],
      [.1, .2, 0],
      [.3, .1, 0]
    ];

    return (
      <div>
       <StyleGrid title="Wang & Song LLC, Moderate Conservative" grid={grid}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
