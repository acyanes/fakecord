/**
 * This will be our presentational component (dumb component)
 */
import CSS from 'csstype';

interface IProps {
  children: React.ReactNode;
}
const Server = ({ children }: IProps) => {
  return (
    <li style={listStyle} className='server-column'>
      {children}
    </li>
  );
};

const listStyle: CSS.Properties = {
  listStyle: 'none',
};
export default Server;
