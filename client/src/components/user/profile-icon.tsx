import CSS from 'csstype';
import serverImage from '../../assets/pika.jpg';
import '../../App.css';

const ProfileIcon = () => {
  const imageStyle: CSS.Properties = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    padding: '5px 5px',
    cursor: 'pointer',
  };

  return <img src={serverImage} style={imageStyle} />;
};

export default ProfileIcon;
