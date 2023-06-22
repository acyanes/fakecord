import ToolTip from "../ToolTip";
import ServerHome from "../Home/Home";
import Server from "./Server";
const ServerList = () => {
  return (
    <>
      <ServerHome />
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
