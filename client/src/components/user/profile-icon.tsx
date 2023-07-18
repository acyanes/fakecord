import CSS from 'csstype';
import serverImage from '../../assets/pika.jpg';
import '../../App.css';

const ProfileIcon = ({
  width = '50px',
  height = '50px',
}: {
  width?: string;
  height?: string;
  image?: string; // todo:pass image to Icon
}) => {
  const imageStyle: CSS.Properties = {
    height,
    width,
    borderRadius: '50%',
    padding: '5px 5px',
    cursor: 'pointer',
  };

  return <img src={serverImage} style={imageStyle} />;
};

export default ProfileIcon;
