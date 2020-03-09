import React from 'react'
import logo from './img/petr.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Application from './components/application'

function App() {
    return (
        <div className='container'>
            <Application />
            <div className='App-logo'>
                <img className='logo' src={logo} alt='logo' />
            </div>
        </div>
    )
}

export default App
