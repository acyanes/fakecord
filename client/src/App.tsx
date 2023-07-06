import ServerList from './components/server/server-list';
import Profile from './components/user/profile';
import ServerPage from './components/server/server-column';
import './App.css';
import { ServerProvider } from './context/server-context';

function App() {
  return (
    <ServerProvider>
      <div className="App">
        <div className="server-column">
          <ServerList />
        </div>
        <div className="dm-column">
          <ServerPage />
          <Profile />
        </div>
        <div className="message-column">@ discordUserName</div>
      </div>
    </ServerProvider>
  );
}

export default App;
