import React from 'react';
import './Template5.css';
import CertificateImage from './Certificate5.png';
import get from './get.png';

const Template3 = ({ backgroundColor, name, eventDetail, date, logo }) => {
  return (
    <div className='cons3' style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', }}>
      <img src={CertificateImage} alt="Certificate5" className="certificate-image5" style={{width:'100%',backgroundColor}} />
      <img src={get} alt="get" className="sies5" />
      <img src={logo} alt="logo" className="" />
      <div className="text-overlay certificate-title5">CERTIFICATE</div>
      <div className="text-overlay certificate-subtitle5">OF APPRECIATION</div>
      <div className="text-overlay certificate-recipient5">This certificate is proudly presented to:</div>
      <div className="text-overlay certificate-recipient_name5">{name}</div>
      <div className="text-overlay certificate-message5">{eventDetail}</div>
      <div className="text-overlay signature5">
        <div>___________</div>
        <div>___________</div>
      </div>
      <div className="text-overlay signature5">
        <div>sign</div>
        <div>sign</div>
      </div>
      <div className="text-overlay signature_name5">
        <div>ppp</div>
        <div>ppp</div>
      </div>
    </div>
  );
};

export default Template3;
