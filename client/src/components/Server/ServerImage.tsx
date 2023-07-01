import CSS from 'csstype';
import serverImage from '../../assets/pika.jpg';
import { motion } from 'framer-motion';
import useHover from '../../hooks/useHover';
import '../../App.css';

const variants = {
  active: {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ['15%'],
  },
};

const ServerImage = ({ height, width, active }: any) => {
  const [ref, isHovered] = useHover();
  const imageStyle: CSS.Properties = {
    height: height || '50px',
    width: width || '50px',
    borderRadius: '50%',
    padding: '5px 5px',
    cursor: 'pointer',
  };

  return (
    <motion.div ref={ref} whileHover={{ scale: 1.2 }}>
      <motion.img
        src={serverImage}
        style={imageStyle}
        animate={active ? 'active' : ''}
        variants={variants}
      />
      {isHovered && (
        <div className='tooltip-tip tooltip-right'>SomeServerName</div>
      )}
    </motion.div>
  );
};

export default ServerImage;
