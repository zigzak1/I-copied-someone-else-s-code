import React from 'react';
import NavState from './components/context/navState';
import MainMenu from './components/MainMenu';

function App() {
  return (
    <NavState>
      <MainMenu />
    </NavState>
  );
}

export default App;