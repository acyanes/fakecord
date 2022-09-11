import { FiEdit2 } from 'react-icons/fi';
import ServerImage from '../Server/ServerImage';
import '../../ProfilePopUp.css';

const ProfilePopUp = () => {
  return (
    <div className='profile-tool'>
      <div className='container-popup'>
        <div className='stack'>
          <ServerImage height='70px' width='70px' />
          <div className='profile-name'>ayeron</div>
        </div>
        <FiEdit2 size='20' className='fi-edit' />
      </div>
    </div>
  );
};

export default ProfilePopUp;
