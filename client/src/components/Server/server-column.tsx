import { useServerProvider } from '../../context/server-context';
import './server.css';

// TODO: This page should be either DM or Server Page depending on the state
// of the IconColumn

const ServerPage = () => {
  const serverProvider = useServerProvider();

  const serverId = serverProvider.getId();
  const serverNames: any = {
    1: { name: 'Boyos' },
    2: { name: 'Start ups' },
    3: { name: 'Algos' },
    4: { name: 'Funko' },
  };

  return (
    <div>
      <h1>{serverNames[serverId].name}</h1>
      <div className="text-channels">
        Text Channels <button>+</button>
      </div>
      <ul className="channel-list">
        <li>#general</li>
        <li>#announcements</li>
        <li>#gaming</li>
      </ul>
    </div>
  );
};

export default ServerPage;
