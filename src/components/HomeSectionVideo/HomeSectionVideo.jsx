import './HomeSectionVideo.css';
import teslaVid from '../../assets/tesla-vid.mp4';

export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={teslaVid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div>
          <h1>Experience Navigator</h1>
          <h5>Schedule a Demo-Drive today!</h5>
        </div>
        <div>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  );
}
