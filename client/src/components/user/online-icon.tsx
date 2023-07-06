import { useState } from 'react'
import { FaDotCircle, FaCircle } from 'react-icons/fa'
import CSS from 'csstype'

const OnlineIcon = () => {
  const [online, setOnline] = useState<boolean>(true)
  return (
    <div>
      {online ? (
        <div>
          <FaCircle color="green" size={12} style={style} />
        </div>
      ) : (
        <div>
          <FaDotCircle color="black" size={12} style={style} />
        </div>
      )}
    </div>
  )
}

const style: CSS.Properties = {
  position: 'absolute',
  left: '110px',
  bottom: '5px',
}

export default OnlineIcon
