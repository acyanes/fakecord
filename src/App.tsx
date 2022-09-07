import { useState } from 'react';
import Server from './components/Server/Server';
import ServerList from './components/Server/ServerList';
import Login from './components/Home/Login';
import './App.css';
import Profile from './components/Home/Profile';

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login />;
  // }

  return (
    <div className='App'>
      <Server>
        <ServerList />
      </Server>
      <div className='dm-column'>
        <div>Direct Messages</div>
        <Profile />
      </div>

      <div className='message-column'>@ discordUserName</div>
    </div>
  );
}

export default App;
