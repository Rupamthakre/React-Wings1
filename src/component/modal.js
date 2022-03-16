import React, { Component } from 'react'

class Modal extends Component {

    render() {

        if (!this.props.show) {
            return (
                <div>
                    <div>

                    </div>
                </div>
            )
        }

        return (
            <div>
                <div>
                    {this.props.children}                    
                </div>
            </div>
        )
    }
}

export default Modal;
