import React, {Component} from 'react';

import './App.css';

class HelloWorld extends Component {
    render() {
      return <h1>Hello World!</h1>
    }
  }
  
class App extends Component {
    render() {
      return <HelloWorld />
    }
  }



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
