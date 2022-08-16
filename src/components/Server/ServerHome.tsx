import CSS from 'csstype';
import serverImage from '../../assets/discordImage.png';
const ServerHome = () => {
  return (
    <>
      <img src={serverImage} style={imageStyle} />
      <hr style={{ width: '50%' }} />
    </>
  );
};

const imageStyle: CSS.Properties = {
  height: '50px',
  width: '50px',
  borderRadius: '30%',
  padding: '5px 5px',
};

export default ServerHome;
