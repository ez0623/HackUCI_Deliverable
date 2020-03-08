import React, { Fragment } from 'react'
import logo from './img/petr.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Application from './components/application'

function App() {
    return (
        <Fragment>
            <Application />
            <img src={logo} className='App-logo' alt='logo' />
        </Fragment>
    )
}

export default App
