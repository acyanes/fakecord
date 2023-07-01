import ServerList from './components/Server/ServerList';
import Profile from './components/Home/Profile';
import ServerPage from './components/Server/server-column';
import { ServerContext } from './context/context';
import { useState } from 'react';
import './App.css';

function App() {
  const [serverId, setServerId] = useState(1);

  return (
    <ServerContext.Provider value={{ serverId, setServerId }}>
      <div className='App'>
        <div className='server-column'>
          <ServerList />
        </div>
        <div className='dm-column'>
          <ServerPage />
          <Profile />
        </div>
        <div className='message-column'>@ discordUserName</div>
      </div>
    </ServerContext.Provider>
  );
}

export default App;
