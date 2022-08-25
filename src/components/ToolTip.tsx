import useHover from '../hooks/useHover';

interface Props {
  children: React.ReactNode;
}

const ToolTip = ({ children }: Props) => {
  const [ref, isHovered] = useHover();
  return (
    <div ref={ref} className='tooltip-wrapper'>
      {children}
      {isHovered && (
        <div className='tooltip-tip tooltip-right'>SomeServerName</div>
      )}
    </div>
  );
};

export default ToolTip;
