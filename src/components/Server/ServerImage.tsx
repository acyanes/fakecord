import CSS from 'csstype';
import serverImage from '../../assets/pika.jpg';

interface Props {
  width?: string;
  height?: string;
}
const ServerImage = ({ width = '50px', height = '50px' }: Props) => {
  const imageStyle: CSS.Properties = {
    height: height,
    width: width,
    borderRadius: '50%',
    padding: '5px 5px',
  };
  return <img src={serverImage} style={imageStyle} />;
};

export default ServerImage;
