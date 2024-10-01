import './HomeClient.css';
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom';
import white_logo_icon from '../Assets/WhiteLogo.png';

Userfront.init("jb7ywq8b");

const HomeClient = () => {

  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate("/submit")
  };
  const handleTrack = () => {
    navigate("/track")
  };
  const handleGuide = () => {
    navigate("/guide")
  };

  return (
    <div className="home-client">
      <main className="main-content">
        <div className='web-title'>
          <div className="web-title-container">
            <img src={white_logo_icon}/>
            <div className="web-titles">
              <p className="L">L</p>
              <p className="ab">ab</p>
              <p className="I">I</p>
              <p className="nformation">nformation</p>
              <p className="M">M</p>
              <p className="anagement">anagement</p>
              <p className="S">S</p>
              <p className="ystem">ystem</p>
            </div>
          </div>
        </div>

        <div className="announcement-box">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>

        <div className="options-container" >
          <div className="option-card" onClick={handleSubmit}>
            <img src="/path-to-icon/submit-request.png" alt="Submit Request" />
            <h2>Submit a Request</h2>
          </div>
          <div className="option-card" onClick={handleTrack}>
            <img src="/path-to-icon/track-request.png" alt="Track Request" />
            <h2>Track My Request</h2>
          </div>
          <div className="option-card" onClick={handleGuide}>
            <img src="/path-to-icon/guide.png" alt="Guide" />
            <h2>Guide</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeClient;