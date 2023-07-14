import React, { useState } from 'react';
import { useMessageProvider } from '../../context/message-context';
import { type ServerProps } from '../server/server';
import './tool-tip.css';

interface Props {
  children: React.ReactNode;
}

const ToolTip = ({ children }: Props) => {
  const messageProvider = useMessageProvider();
  const [activeServer, setActiveServer] = useState<number | null>(null);

  const handleServerClick = (serverId: number) => {
    setActiveServer(serverId);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        const id = (child as React.ReactElement<ServerProps>).props.id;
        const active = activeServer === id && !messageProvider.getIsActive();

        return React.cloneElement(child as React.ReactElement<ServerProps>, {
          active,
          onClick: handleServerClick,
        });
      })}
    </>
  );
};

export default ToolTip;
