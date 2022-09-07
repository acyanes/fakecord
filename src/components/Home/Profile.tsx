import ServerImage from '../Server/ServerImage';
import '../../Profile.css';
const Profile = () => {
  return (
    <div className='container'>
      <div className='profile'>
        <ServerImage />
        {/* <div>online or not icon</div> */}
        <div>ayeron</div>
        <div>settings icon</div>
      </div>
    </div>
  );
};

export default Profile;
