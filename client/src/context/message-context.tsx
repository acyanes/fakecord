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
  const [isActive, setIsActive] = useState<boolean>(true);

  const messageService: MessageService = {
    getIsActive: () => {
      return isActive;
    },
    setIsActive: () => {
      setIsActive(!isActive);
    },
    getMessages: () => {
      // this should get messages with the specific user
      // TODO: hit service layer

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
