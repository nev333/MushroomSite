import React from 'react';
import "./LandscapeTools.css"
import Menu from '../../menu/Menu';
// import referenceGuideImage from "../../images/reference-guide.png";
// import estimationServiceImage from "../../images/estimation-service.png";
// import qrCodeScannerImage from "../../images/qr-code-scanner.png";


const LandscapeTools = () => {
  return (
    <div>
      <Menu />
    <div className="landscape-tools">
      <div className="tool">
        {/* <img src={referenceGuideImage} alt="Reference Guide" /> */}
        <h3>Free Landscape Regulations Guide</h3>
        <p>Quick reference guide to landscape regulations in New Zealand.</p>
        <a href="#">Download Now</a>
      </div>
      <div className="tool">
        {/* <img src={estimationServiceImage} alt="Estimation Service" /> */}
        <h3>Landscape Estimation Service</h3>
        <p>Subscription-based service for accurate material estimation.</p>
        <a href="#">Subscribe Now</a>
      </div>
      <div className="tool">
        {/* <img src={qrCodeScannerImage} alt="QR Code Scanner" /> */}
        <h3>QR Code Tool Tracker</h3>
        <p>App for tracking communal tools using QR code scanning.</p>
        <a href="#">Get the App</a>
      </div>
    </div>
    </div>
  );
};

export default LandscapeTools;
