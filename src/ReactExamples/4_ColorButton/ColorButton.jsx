import React from 'react'

export default class ColorButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 'blue',
        }
    }

    handleClick = () => {
        if (this.state.color === 'blue') {
            this.setState({ color: 'red' })
        } else {
            this.setState({ color: 'blue' })
        }
    }

    render() {
        console.log(this.state)

        return (
            <div>
                <div
                    style={{
                        color: this.state.color,
                    }}
                    onClick={this.handleClick}
                >
                    name
                </div>
            </div>
        )
    }
}
