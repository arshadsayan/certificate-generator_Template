import React from 'react';
import './Template1.css';
import CertificateImage from './Certificate1.png';
import get from './get.png';

const Template1 = ({ backgroundColor, name, eventDetail, date, logo }) => {
  return (
    <div className='cons1' style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%', }}>
      <img src={CertificateImage} alt="Certificate1" className="certificate-image1" style={{width:'100%',backgroundColor}} />
      <img src={get} alt="get" className="sies1" />
      <img src={logo} alt="" className="logo1" />
      <div className="text-overlay certificate-title1">CERTIFICATE</div>
      <div className="text-overlay certificate-subtitle1">OF APPRECIATION</div>
      <div className="text-overlay certificate-recipient1">This certificate is proudly presented to:</div>
      <div className="text-overlay certificate-recipient_name1">{name}</div>
      <div className="text-overlay certificate-message1">{eventDetail}</div>
      <div className="text-overlay signature">
        <div>___________</div>
        <div>___________</div>
      </div>
      <div className="text-overlay signature1">
        <div>sign</div>
        <div>sign</div>
      </div>
      <div className="text-overlay signature_name1">
        <div>ppp</div>
        <div>ppp</div>
      </div>
    </div>
  );
};

export default Template1;
