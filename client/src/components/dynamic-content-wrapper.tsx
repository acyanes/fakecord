import { ReactNode, PropsWithChildren } from 'react';
import '../App.css';
import { useMessageProvider } from '../context/message-context';

export interface DynamicContentProps {
  messagePage: ReactNode;
  serverPage: ReactNode;
}

const DynamicContentWrapper = ({
  messagePage,
  serverPage,
}: PropsWithChildren<DynamicContentProps>) => {
  const messageProvider = useMessageProvider();
  const renderedChild = messageProvider.getIsActive()
    ? messagePage
    : serverPage;
  return <div className="dm-column">{renderedChild}</div>;
};

export default DynamicContentWrapper;
