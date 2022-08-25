/**
 * this will be our container component (smart component)
 */
import ToolTip from '../ToolTip';
import ServerHome from '../Home/Home';
import ServerImage from './ServerImage';
const ServerList = () => {
  return (
    <>
      <ServerHome />
      <ToolTip>
        <ServerImage />
      </ToolTip>
      <ToolTip>
        <ServerImage />
      </ToolTip>
      <ToolTip>
        <ServerImage />
      </ToolTip>
    </>
  );
};

export default ServerList;
