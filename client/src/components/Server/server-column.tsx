import { useContext } from 'react';
import { IServerContext, ServerContext } from '../../context/context';
import './server.css';

const ServerPage = () => {
  const { serverId } = useContext<IServerContext | null>(ServerContext) ?? {};
  return (
    <div>
      <h1>Channel Name {serverId}</h1>
      <div className='text-channels'>
        Text Channels <button>+</button>
      </div>
      <ul className='channel-list'>
        <li>#general</li>
        <li>#announcements</li>
        <li>#gaming</li>
      </ul>
    </div>
  );
};

export default ServerPage;
