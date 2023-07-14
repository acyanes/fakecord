import ToolTip from '../commons/tool-tip';
import Server from './server';
import DirectMessageIcon from '../direct-messages/direct-message-icon';

// TODO: should take in a list of servers from BE
const ServerList = () => {
  return (
    <>
      <DirectMessageIcon />
      <ToolTip>
        <Server id={1} />
        <Server id={2} />
        <Server id={3} />
        <Server id={4} />
      </ToolTip>
    </>
  );
};

export default ServerList;
