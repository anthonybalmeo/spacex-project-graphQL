import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import logo from './logo.png'
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className='container'>
            <img src={logo} alt='SpaceX' style={{ width: 400, display: 'block', margin: '3rem auto' }}/>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
