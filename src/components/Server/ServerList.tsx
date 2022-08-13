import CSS from 'csstype';

interface IProps {
  children: React.ReactNode;
}

const ServerList = ({ children }: IProps) => {
  return (
    <>
      <li style={listStyle}>{children}</li>
    </>
  );
};

const listStyle: CSS.Properties = {
  listStyle: 'none',
};

export default ServerList;
