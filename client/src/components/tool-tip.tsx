import React, { useState } from 'react'
import { type ServerProps } from './server/server'

interface Props {
  children: React.ReactNode
}

const ToolTip = ({ children }: Props) => {
  const [activeServer, setActiveServer] = useState<number | null>(null)

  const handleServerClick = (serverId: number) => {
    setActiveServer(serverId)
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        const id = (child as React.ReactElement<ServerProps>).props.id
        const active = activeServer === id

        return React.cloneElement(child as React.ReactElement<ServerProps>, {
          active,
          onClick: handleServerClick,
        })
      })}
    </>
  )
}

export default ToolTip
