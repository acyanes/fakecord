import ServerImage from '../Server/ServerImage';
import { FcSettings } from 'react-icons/fc';
import '../../Profile.css';
const Profile = () => {
  return (
    <div className='container'>
      <div className='profile'>
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
