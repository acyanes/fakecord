import React from 'react';
import ServerImage from './server-image';
import { useServerProvider } from '../../context/server-context';
import { useMessageProvider } from '../../context/message-context';
import '../../App.css';

export interface ServerProps {
  id: number;
  active: boolean;
  onClick: (id: number) => void;
}

const Server = React.memo<ServerProps>(({ id, active, onClick }) => {
  const serverProvider = useServerProvider();
  const messageProvider = useMessageProvider();

  const handleClick = () => {
    if (messageProvider.getIsActive()) {
      messageProvider.setIsActive(false);
    }
    serverProvider.setServerId(id);
    onClick(id);
  };

  return (
    <div onClick={handleClick}>
      <ServerImage active={active} id={id} />
    </div>
  );
});

export default Server;
