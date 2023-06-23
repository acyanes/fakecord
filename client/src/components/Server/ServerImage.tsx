import CSS from 'csstype';
import serverImage from '../../assets/pika.jpg';
import { motion } from 'framer-motion';
import '../../App.css';

const variants = {
  active: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['15%'],
  },
};

const ServerImage = ({ height, width, active }: any) => {
  const imageStyle: CSS.Properties = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    padding: '5px 5px',
    cursor: 'pointer',
  };

  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <motion.img
        src={serverImage}
        style={imageStyle}
        animate={active ? 'active' : ''}
        variants={variants}
      />
    </motion.div>
  );
};

export default ServerImage;
