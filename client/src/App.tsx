import ServerList from './components/server/server-list';
import Profile from './components/user/profile';
import ServerPage from './components/server/server-column';
import './App.css';
import { ServerProvider } from './context/server-context';
import { MessageProvider } from './context/message-context';
import MessageColumn from './components/direct-messages/message-column';
import DynamicContentWrapper from './components/dynamic-content-wrapper';

function App() {
  return (
    <MessageProvider>
      <ServerProvider>
        <div className="App">
          <div className="server-column">
            <ServerList />
          </div>
          <DynamicContentWrapper
            messagePage={<MessageColumn />}
            serverPage={<ServerPage />}
          >
            <Profile />
          </DynamicContentWrapper>
          <div className="message-column">@ discordUserName</div>
        </div>
      </ServerProvider>
    </MessageProvider>
  );
}

export default App;
