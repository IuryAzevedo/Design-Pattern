// src/App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/reducers';
import CreateUserComponent from './components/CreateUser';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <CreateUserComponent />
    </Provider>
  );
};

export default App;
