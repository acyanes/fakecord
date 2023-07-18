import { FiEdit2 } from 'react-icons/fi';
import ServerImage from '../server/server-image';
import './profile-modal.css';
import { forwardRef } from 'react';

const ProfileModal = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="profile-tool" ref={ref}>
      <div className="container-popup">
        <div className="stack">
          <ServerImage height="70px" width="70px" />
          <div className="profile-name">ayeron</div>
        </div>
        <FiEdit2 size="20" className="fi-edit" />
      </div>
    </div>
  );
});

export default ProfileModal;
