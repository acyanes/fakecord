import OnlineIcon from '../user/online-icon';
import ProfileIcon from '../user/profile-icon';
import './direct-message-list.css';

export interface DirectMessage {
  userName: string;
  profileImage: string;
  isOnline: boolean;
  message: string;
}

export interface DirectMessages {
  messages: DirectMessage[];
}

const DirectMessageList = ({ messages }: DirectMessages) => {
  return (
    <div>
      <h3 className="text">Direct Messages+</h3>
      {messages.map((message) => (
        <div key={message.userName} className="direct-message">
          <div className="message-profile">
            <ProfileIcon height="30px" width="30px" />
            <div className="online-icon">
              <OnlineIcon />
            </div>
            <span className="username">{message.userName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DirectMessageList;
