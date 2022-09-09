import ServerImage from '../Server/ServerImage';
import { FcSettings } from 'react-icons/fc';
import { useState } from 'react';

import '../../Profile.css';

const Profile = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <div className='container'>
      <div className='profile' onClick={handleOnClick}>
        {/* convert to a component, fix styling */}
        {isShow && (
          <div className='profile-tool'>
            <ServerImage />
            <div className='profile-name'>ayeron</div>
            <div>pencil button to edit</div>
          </div>
        )}
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
