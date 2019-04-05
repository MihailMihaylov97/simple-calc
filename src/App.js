import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={result:0}; 
    this.input1 =React.createRef();
    this.input2 =React.createRef();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>





              <div>
                <input ref={this.input1} />
                <input ref = {this.input2} />
                <button onClick={() => {
                  var input1 = Number.parseInt(this.input1.current.value);
                  var input2 = Number.parseInt(this.input2.current.value)
                  this.setState({
                    result: input1 + input2 
                    
                  });
                }}>+
                </button><div>{this.state.result}</div>
              </div>
            
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
