import React, { useContext } from 'react'
import ServerImage from './server-image'
import '../../App.css'
import { IServerContext, ServerContext } from '../../context/context'

export interface ServerProps {
  id: number
  active: boolean
  onClick: (id: number) => void
}

const Server = React.memo<ServerProps>(({ id, active, onClick }) => {
  const { setServerId } = useContext<IServerContext | null>(ServerContext) ?? {}
  const handleClick = () => {
    if (setServerId) {
      setServerId(id)
    }
    onClick(id)
  }

  return (
    <div onClick={handleClick}>
      <ServerImage active={active} />
    </div>
  )
})

export default Server
