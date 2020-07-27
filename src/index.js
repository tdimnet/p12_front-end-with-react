import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import Modal from './Modal'

class App extends React.PureComponent {

  state = {
    isModalOpen: false
  }
  
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.toggleModal} >Open modal</button>
        <Modal isOpen={this.state.isModalOpen} toggleModal={this.toggleModal} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
