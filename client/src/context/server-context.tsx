import {
  createContext,
  ReactElement,
  useContext,
  PropsWithChildren,
  useState,
} from 'react';

export interface ServerService {
  getId(): number;
  setServerId(id: number): void;
}

const ServerContext = createContext<ServerService | undefined>(undefined);

export function ServerProvider({ children }: PropsWithChildren): ReactElement {
  const [serverId, setServerId] = useState<number>(1);

  const serverService: ServerService = {
    getId: () => {
      return serverId;
    },
    setServerId: (id: number) => {
      setServerId(id);
    },
  };

  return (
    <ServerContext.Provider value={serverService}>
      {children}
    </ServerContext.Provider>
  );
}

export function useServerProvider(): ServerService {
  const service = useContext(ServerContext);
  if (service) return service;
  throw new ReferenceError(
    'useServerProvider() must be wrapped by <ServerProvider>'
  );
}
