import {
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useState,
} from 'react';

export interface Users {
  id: number;
  name: string;
}
export interface MessageService {
  getIsActive(): boolean;
  setIsActive(active: boolean): void;
  getMessages(): Promise<Users[]>;
}

const MessageContext = createContext<MessageService | undefined>(undefined);

export function MessageProvider({ children }: PropsWithChildren): ReactElement {
  // always display the first message in the DMs on start/refresh
  // otherwise display the current the user has clicked
  // Dms should only be displayed if the DM icon is active
  const [messageId, setMessageId] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);

  const messageService: MessageService = {
    getIsActive: () => {
      return isActive;
    },
    setIsActive: () => {
      setIsActive(!isActive);
    },
    getMessages: () => {
      throw new Error();
    },
  };

  return (
    <MessageContext.Provider value={messageService}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessageProvider(): MessageService {
  const service = useContext(MessageContext);
  if (service) return service;
  throw new ReferenceError(
    'useMessageProvider() must be wrapped by <MessageProvider>'
  );
}
