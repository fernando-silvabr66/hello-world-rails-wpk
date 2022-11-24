import React from 'react'
import Greeting from './Greeting';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Greeting />
  </Provider>
);

export default App;
