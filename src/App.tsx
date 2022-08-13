import { useState } from 'react';
import Server from './components/Server/Server';
import ServerList from './components/Server/ServerList';

function App() {
  return (
    <div className='App'>
      <ServerList>
        <Server />
      </ServerList>
    </div>
  );
}

export default App;
