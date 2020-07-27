import React from 'react';
import ReactDOM from 'react-dom';

import TextInput from './lib/TextInput'

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello world</h1>
    <TextInput label="Email Address" placeholder="name@example.com" />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
