import ServerList from './components/server/server-list'
import Profile from './components/user/profile'
import ServerPage from './components/server/server-column'
import { ServerContext } from './context/context'
import { useState } from 'react'
import './App.css'

function App() {
  const [serverId, setServerId] = useState(1)

  return (
    <ServerContext.Provider value={{ serverId, setServerId }}>
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
    </ServerContext.Provider>
  )
}

export default App
