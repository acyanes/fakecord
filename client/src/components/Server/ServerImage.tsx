import CSS from "csstype";
import serverImage from "../../assets/pika.jpg";

const ServerImage = ({ height, width }: any) => {
  const imageStyle: CSS.Properties = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    padding: "5px 5px",
  };
  return <img src={serverImage} style={imageStyle} />;
};

export default ServerImage;
