import React from 'react';
import './Template2.css';
import CertificateImage from './Certificate2.png';
import get from './get.png';

const Template2 = ({ backgroundColor, name, eventDetail, date, logo }) => {
  return (
    <div className='cons2' style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', }}>
      <img src={CertificateImage} alt="Certificate2" className="certificate-image2" style={{width:'100%',backgroundColor}} />
      <img src={get} alt="get" className="sies2" />
      <img src={logo} alt="logo" className="" />
      <div className="text-overlay certificate-title2">CERTIFICATE</div>
      <div className="text-overlay certificate-subtitle2">OF APPRECIATION</div>
      <div className="text-overlay certificate-recipient2">This certificate is proudly presented to:</div>
      <div className="text-overlay certificate-recipient_name2">{name}</div>
      <div className="text-overlay certificate-message2">{eventDetail}</div>
      <div className="text-overlay signature">
        <div>___________</div>
        <div>___________</div>
      </div>
      <div className="text-overlay signature2">
        <div>sign</div>
        <div>sign</div>
      </div>
      <div className="text-overlay signature_name2">
        <div>ppp</div>
        <div>ppp</div>
      </div>
    </div>
  );
};

export default Template2;
