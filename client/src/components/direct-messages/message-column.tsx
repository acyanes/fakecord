import { BsFillPersonFill } from 'react-icons/bs';
import DirectMessageList, { DirectMessage } from './direct-message-list';
import './message-column.css';

const MessageColumn = () => {
  // grab all message data here?
  const messages: DirectMessage[] = [
    {
      userName: 'Bill',
      profileImage: 'img',
      isOnline: true,
      message: 'Hi wyd',
    },
    {
      userName: 'Robin',
      profileImage: 'img',
      isOnline: true,
      message: 'Yo wassup',
    },
    {
      userName: 'Dogecoin',
      profileImage: 'img',
      isOnline: true,
      message: 'Did you finish the HW',
    },
    {
      userName: 'NFT.Trader',
      profileImage: 'img',
      isOnline: true,
      message: 'I am tired',
    },
  ];

  return (
    <div className="container">
      <button className="friends">
        <div>
          <BsFillPersonFill size="20" />
          <span>Friends</span>
        </div>
      </button>
      <DirectMessageList messages={messages} />
    </div>
  );
};

export default MessageColumn;
