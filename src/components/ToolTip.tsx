import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const ToolTip = ({ children }: Props) => {
  const [active, setActive] = useState(false);
  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className='tooltip-wrapper'
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className='tooltip-tip tooltip-right'>
          {/* server name / details here */}
          <p>server name in here server</p>
        </div>
      )}
    </div>
  );
};

export default ToolTip;
