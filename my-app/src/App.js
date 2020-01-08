import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './App.css';

class CCTitle extends Component {
    render() {
      return <h1>Contact Cards</h1>
    }
  }

class ContactCard extends Component {
  constructor(props) {
    super()
  }

  render() {

    return (
            
          <div style={ccStyle}>
            <h1>Name: {this.props.name}</h1>
            <h1>Mobile Number: {this.props.mobileNum}</h1>
            <h1>Work Number: {this.props.workNum}</h1>
            <h1>Email: {this.props.email}</h1>
          </div>
            
 
    );

  }
}


class DTitle extends Component {
  render() {
    return <h1>Decrement</h1>
  }
}

class Decrement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: this.props.clicks
    };
  }

  Increase = () => {
    this.setState({ clicks: parseInt(this.state.clicks) + 1 });
  }
  Decrease = () => {

    if(this.state.clicks > 0) {
      this.setState({ clicks: parseInt(this.state.clicks) - 1 });
  }
    else {
      alert("Cannot be less than zero!");
    }
    
  }
  

  render() {

    return (
            
          <div>
          
            <h2>{ this.state.clicks }</h2> 
          
            <button onClick={this.Decrease}>Decrement</button>
            <button onClick={this.Increase}>Increment</button>
            
          </div>
            
 
    );

  }
}


class App extends Component {
    render() {
      return (

        <div className = 'App'>
          <div className = 'container'>
            <CCTitle />
            
            <ContactCard name="Terry" mobileNum="111-111-1111" workNum="222-222-2222" email="email1@gmail.com"/>
            <br/>
            <ContactCard name="Kumo" mobileNum="333-333-3333" email="email2@gmail.com"/>
            <br/>
            <ContactCard name="Sumi" mobileNum="444-444-4444" email="email3@gmail.com"/>

            <DTitle />

            <Decrement clicks="10" />

            <br/>
            <p></p>
          </div>
        </div>
        
      )
        
      
    }
  }

  const ccStyle = {
    border: '5px solid #000',
    backgroundColor: '#FAE672',
    padding: '10px',
    width: '500px',
    height: '290px',
    textAlign: 'center',
    margin: '0 auto'
}

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobileNum: PropTypes.string.isRequired,
  workNum: PropTypes.string,
  email: PropTypes.string.isRequired

}

Decrement.propTypes = {
  clicks: PropTypes.number.isRequired

}

export default App;
