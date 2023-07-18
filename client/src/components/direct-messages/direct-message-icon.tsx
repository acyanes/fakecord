import serverImage from '../../assets/discordImage.png';
import { useMessageProvider } from '../../context/message-context';
import './direct-messages.css';

const DirectMessageIcon = () => {
  const messageProvider = useMessageProvider();

  const handleClick = () => {
    if (!messageProvider.getIsActive()) {
      messageProvider.setIsActive(true);
    }
  };
  return (
    <div onClick={handleClick}>
      <img src={serverImage} />
      <hr />
    </div>
  );
};

export default DirectMessageIcon;
