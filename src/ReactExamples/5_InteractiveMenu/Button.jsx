import React from 'react'

export default class Button extends React.Component {
    onChange = () => {
        const { index } = this.props

        this.props.makeButtonActive(index)
    }

    render() {
        const { text, isActive } = this.props

        return (
            <button
                style={{ color: isActive ? 'red' : 'black' }}
                onClick={this.onChange}
            >
                {text}
            </button>
        )
    }
}
