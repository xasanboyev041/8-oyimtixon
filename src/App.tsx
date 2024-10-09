import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  );
};

export default App;
