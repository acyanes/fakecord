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
    <div
      ref={ref}
      className={`${active ? "tooltip-wrapper-active" : "tooltip-wrapper"}`}
      onClick={handleClick}
    >
      <ServerImage />
      {isHovered && (
        <div className="tooltip-tip tooltip-right">SomeServerName</div>
      )}
    </div>
  );
});

export default Server;
