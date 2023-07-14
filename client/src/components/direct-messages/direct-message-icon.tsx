import serverImage from '../../assets/discordImage.png';
import { useMessageProvider } from '../../context/message-context';
import { useServerProvider } from '../../context/server-context';
import './direct-messages.css';

const DirectMessageIcon = () => {
  const messageProvider = useMessageProvider();
  const serverProvider = useServerProvider();

  const handleClick = () => {
    if (!messageProvider.getIsActive()) {
      messageProvider.setIsActive(true);
      // find a way to set all of the server icons to inactive
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
