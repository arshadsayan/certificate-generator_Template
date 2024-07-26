import React from 'react';
import './Template3.css';
import CertificateImage from './Certificate3.png';
import get from './get.png';

const Template3 = ({ backgroundColor, name, eventDetail, date, logo }) => {
  return (
    <div className='cons3' style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '60%', }}>
      <img src={CertificateImage} alt="Certificate2" className="certificate-image2" style={{width:'100%',backgroundColor}} />
      <img src={get} alt="get" className="sies3" />
      <img src={logo} alt="logo" className="" />
      <div className="text-overlay certificate-title3">CERTIFICATE</div>
      <div className="text-overlay certificate-subtitle3">OF APPRECIATION</div>
      <div className="text-overlay certificate-recipient3">This certificate is proudly presented to:</div>
      <div className="text-overlay certificate-recipient_name3">{name}</div>
      <div className="text-overlay certificate-message3">{eventDetail}</div>
      <div className="text-overlay signature">
        <div>___________</div>
        <div>___________</div>
      </div>
      <div className="text-overlay signature3">
        <div>sign</div>
        <div>sign</div>
      </div>
      <div className="text-overlay signature_name3">
        <div>ppp</div>
        <div>ppp</div>
      </div>
    </div>
  );
};

export default Template3;
