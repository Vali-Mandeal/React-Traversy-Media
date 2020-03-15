import React, { Component } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bars';

  render() {
    const name = 'John doe';
    const loading = false;
    const showName = false;

    return (
      <div className='App'>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
      </div>
    );
  }
}

export default App;
