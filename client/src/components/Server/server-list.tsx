import ToolTip from '../tool-tip'
import ServerHome from '../home/home'
import Server from './server'
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
  )
}

export default ServerList
