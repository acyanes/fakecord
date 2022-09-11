import ServerImage from '../Server/ServerImage';
import { FcSettings } from 'react-icons/fc';
import { useState } from 'react';
import ProfilePopUp from './ProfilePopUp';

import '../../Profile.css';

const Profile = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <div className='container'>
      {isShow && <ProfilePopUp />}
      <div className='profile' onClick={handleOnClick}>
        <ServerImage />
        <div className='profile-name'>ayeron</div>
      </div>
      <div className='settings-icon'>
        <FcSettings size={25} />
      </div>
    </div>
  );
};

export default Profile;
