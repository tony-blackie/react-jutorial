import React from 'react'
import logo from './logo.svg'
import Button from './Button/Button'
import './App.css'

import ReactMain from './ReactExamples/ReactMain'

class App extends React.Component {
    onClickHandler = function() {
        alert('lol')
    }

    render() {
        return (
            <div className="App">
                <ReactMain />
            </div>
        )
    }
}

export default App
