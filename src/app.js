import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/main.js';

const app = document.createElement('div');
app.id = 'app';

document.body.appendChild(app);

ReactDOM.render(<App/>, document.getElementById('app'));
