import './HomeClient.css';
import Userfront from "@userfront/core";

Userfront.init("jb7ywq8b");

const HomeClient = () => {
  return (
    <div className="home-client">
      <div className="background-image"></div>
      <main className="main-content">
        <div className='login-all-right'>
          <div className="login-second-row">
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

        <div className="announcement-box">
          <h2>Welcome to our new Lab Information Management System. eyyy lesgo!</h2>
        </div>

        <div className="options-container">
          <div className="option-card">
            <img src="/path-to-icon/submit-request.png" alt="Submit Request" />
            <h2>Submit a Request</h2>
          </div>
          <div className="option-card">
            <img src="/path-to-icon/track-request.png" alt="Track Request" />
            <h2>Track My Request</h2>
          </div>
          <div className="option-card">
            <img src="/path-to-icon/guide.png" alt="Guide" />
            <h2>Guide</h2>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeClient;