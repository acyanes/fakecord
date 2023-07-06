import React, { useContext } from 'react';
import ServerImage from './server-image';
import '../../App.css';
import { useServerProvider } from '../../context/server-context';

export interface ServerProps {
  id: number;
  active: boolean;
  onClick: (id: number) => void;
}

const Server = React.memo<ServerProps>(({ id, active, onClick }) => {
  const serverProvider = useServerProvider();

  const handleClick = () => {
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
