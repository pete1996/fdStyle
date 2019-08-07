import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import less from 'less';

class App extends Component {

  changeTheme = () => {
     less.modifyVars({
      '@primary-color': 'red'
     })
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
            Learn React
          </a>
        </header>
        <div className="ant-btn" onClick={this.changeTheme}>haha</div>
      </div>
    );

  }
}

export default App;
