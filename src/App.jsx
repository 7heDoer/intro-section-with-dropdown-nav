import { useState } from 'react'
import './styles/App.css'
import Nav from './components/Nav'

function App() {

  return (
    <div className="App">
      <div className="container">

        <header className="header">
          <Nav />
        </header>
      </div>
    </div>
  )
}

export default App
