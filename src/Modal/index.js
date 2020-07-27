import React from 'react'

import './style.css'

class Modal extends React.PureComponent {

    componentDidMount() {
        document.addEventListener('keydown', e => {
            if (e.key === "Escape" && this.props.isOpen) {
                this.props.toggleModal()
            }
        })
    }

    onClickButton(event) {
        event.stopPropagation()
        this.props.toggleModal()
    }

    render() {
        if (!this.props.isOpen) return null

        return (
            <div className="modal-main-wrapper">
                <div className="modal-wrapper">
                    <h1>Hello world</h1>
                    <button onClick={e => this.onClickButton(e)}>Close me</button>
                    <p onClick={e => this.onClickButton(e)} className="modal-close-icon">X</p>
                </div>
            </div>
        )
    }
}

export default Modal
