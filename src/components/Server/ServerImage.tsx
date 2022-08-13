import CSS from 'csstype';
import serverImage from '../../assets/pika.jpg';

const ServerImage = () => {
  return <img src={serverImage} style={imageStyle} />;
};

const imageStyle: CSS.Properties = {
  height: '50px',
  width: '50px',
  borderRadius: '50%',
};

export default ServerImage;
