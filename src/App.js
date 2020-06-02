import React from 'react';
import logo from './logo.svg';
import './App.css';

//to create more functions used a class
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name:'Sri Lanka'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.name}
          </a><br/>
          <button onClick={() => this.setState({name:'India'})}>Change Name</button>
        </header>
      </div>
    )
  }
}

export default App;
