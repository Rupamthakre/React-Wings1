import React, { Component } from 'react'

class Modal extends Component {

    render() {      
        
        if(!this.props.show){
            return null;
         }
        
        return (
            <div className='bg'>
                <div className='pop'>                                  
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Modal;
