import ServerImage from '../server/server-image'
import { FcSettings } from 'react-icons/fc'
import { useEffect, useRef, useState } from 'react'
import ProfilePopUp from './profile-modal'

import '../../Profile.css'
import Icon from '../online-icon'

const Profile = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const profileRef = useRef<HTMLDivElement | null>(null)
  const [isShow, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        let node: Node | null = event.target as Node
        while (node !== null) {
          if (node === profileRef.current) {
            return
          }
          node = node.parentNode
        }
        setIsShow(false)
      }
    }

    if (isShow) {
      document.addEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isShow])

  const handleOnClick = () => {
    setIsShow((isShow) => !isShow)
  }

  return (
    <div className="container">
      {isShow && <ProfilePopUp ref={ref} />}
      <div className="profile" ref={profileRef} onClick={handleOnClick}>
        <ServerImage />
        <Icon />
        <div className="profile-name">ayeron</div>
      </div>
      <div className="settings-icon">
        <FcSettings size={25} />
      </div>
    </div>
  )
}

export default Profile
