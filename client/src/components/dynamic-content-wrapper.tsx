import { ReactNode, PropsWithChildren } from 'react';
import '../App.css';
import { useMessageProvider } from '../context/message-context';

export interface DynamicContentProps {
  messagePage: ReactNode;
  serverPage: ReactNode;
}

const DynamicContentWrapper = ({
  children,
  messagePage,
  serverPage,
}: PropsWithChildren<DynamicContentProps>) => {
  const messageProvider = useMessageProvider();
  const renderedChild = messageProvider.getIsActive()
    ? messagePage
    : serverPage;
  return (
    <div className="dm-column">
      <div>{renderedChild}</div>
      <div>{children}</div>
    </div>
  );
};

export default DynamicContentWrapper;
