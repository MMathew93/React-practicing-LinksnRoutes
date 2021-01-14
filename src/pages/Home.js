import BGvideo from '../media/video/video.mp4';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import '../css/Home.css'

function Home() {
  return (
    <div>
      <video className='videoTag' autoPlay loop muted>
        <source src={BGvideo} type='video/mp4' />
      </video>
      <div className="overlay" />
      <div className="centerpiece">
        <p className="brand">
          Back 2 Basics
        </p>
        <Link to="/catalog">
          <Button className="shopButton">
            Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
