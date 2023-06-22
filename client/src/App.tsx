import ServerList from "./components/Server/ServerList";
import "./App.css";
import Profile from "./components/Home/Profile";

function App() {
  return (
    <div className="App">
      <div className="server-column">
        <ServerList />
      </div>
      <div className="dm-column">
        <div>Direct Messages</div>
        <Profile />
      </div>
      <div className="message-column">@ discordUserName</div>
    </div>
  );
}

export default App;
