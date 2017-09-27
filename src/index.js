import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';

// Import CSS reset and Global Styles
import './styles';

ReactDOM.render(<Provider store={store}>{Routes}</Provider>, document.getElementById('root'));
