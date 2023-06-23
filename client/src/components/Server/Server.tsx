import React from "react";
import useHover from "../../hooks/useHover";
import ServerImage from "./ServerImage";

export interface ServerProps {
  id: number;
  active: boolean;
  onClick: (id: number) => void;
}

const Server = React.memo<ServerProps>(({ id, active, onClick }) => {
  const [ref, isHovered] = useHover();
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div ref={ref} onClick={handleClick}>
      <ServerImage active={active} />
      {isHovered && (
        <div className="tooltip-tip tooltip-right">SomeServerName</div>
      )}
    </div>
  );
});

export default Server;
