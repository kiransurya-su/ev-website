import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

const Background = ({ playStatus, heroCount }) => {

  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  }

  const images = [image1, image2, image3];

  return (
    <img
      src={images[heroCount] || images[0]}
      className="background fade-in"
      alt="background"
    />
  );
};

export default Background;
