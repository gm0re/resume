import React from 'react'
import logo from './logo.svg'
import './App.css'
import DevEditor from './templates/DevEditor'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <DevEditor />
  </div>
)

export default App
