import React from 'react'

import NoParameters from './NoParameters/NoParameters'
import OneParameterString from './OneParameter/OneParameterString'

export default class FunctionMain extends React.Component {
    render() {
        return (
            <div>
                <NoParameters />
                <OneParameterString />
            </div>
        )
    }
}
