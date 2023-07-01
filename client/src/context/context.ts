import { createContext } from 'react';

export interface IServerContext {
  serverId: number;
  setServerId: React.Dispatch<React.SetStateAction<number>>;
}
export const ServerContext = createContext<IServerContext | null>(null);
export const AuthContext = createContext(null);
