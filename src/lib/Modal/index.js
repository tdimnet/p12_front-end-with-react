import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

class Modal extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        content: PropTypes.string.isRequired,
        isOpen: PropTypes.bool.isRequired,
        title: PropTypes.string,
        toggleModal: PropTypes.func.isRequired
    }

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
        const { content, isOpen} = this.props

        if (!isOpen) return null

        return (
            <div className='modal-main-wrapper'>
                <div className="modal-wrapper">
                    <h1>{content}</h1>
                    <button onClick={e => this.onClickButton(e)}>Close me</button>
                    <p onClick={e => this.onClickButton(e)} className="modal-close-icon">X</p>
                </div>
            </div>
        )
    }
}

export default Modal
