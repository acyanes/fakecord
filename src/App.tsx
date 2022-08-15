import Server from './components/Server/Server';
import ServerList from './components/Server/ServerList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Server>
        <ServerList />
      </Server>
      {/* todo create components */}
      <div className='dm-column'>Direct Messages</div>
      <div className='message-column'>@ discordUserName</div>
    </div>
  );
}

export default App;
