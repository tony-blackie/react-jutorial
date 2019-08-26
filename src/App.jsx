import React from 'react'
import './App.css'

import FunctionMain from './BaseExamples/FunctionExamples/FunctionMain'
import ReactMain from './ReactExamples/ReactMain'

class App extends React.Component {
    onClickHandler = function() {
        alert('lol')
    }

    render() {
        return (
            <div className="App">
                {/* <ReactMain /> */}
                <FunctionMain />
            </div>
        )
    }
}

export default App
