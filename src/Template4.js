import React from 'react';
import './templete4.css';
import CertificateImage from './Certificate4.png';
import get from './get.png';
function templete3() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '100%' }}>
      <img src={CertificateImage} alt="Certificate1" className="certificate-image" />
      <img src={get} alt="Certificate1" className="sies" />
      <img src={get} alt="Certificate1" className="logo" />
      <div className="text-overlay certificate-title">CERTIFICATE</div>
      <div className="text-overlay certificate-subtitle">OF PARTICIPATION</div>
      <div className="text-overlay certificate-recipient">This certificate is proudly presented to:</div>
      <div className="text-overlay certificate-recipient_name">John Doe</div>
      <div className="text-overlay certificate-message">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum maximus mauris sed sodales. Ut rhoncus lacinia nisi eu tempus. Proin justo eros, mollis laoreet massa non, tincidunt pharetra leo. 
      </div>
      <div className="text-overlay signature">
        <div>___________</div>
        <div>___________</div>
      </div>
      <div className="text-overlay signature">
        <div>sign</div>
        <div>sign</div>
      </div>
      <div className="text-overlay signature_name">
        <div>ppp</div>
        <div>ppp</div>
      </div>
    </div>
  );
}

export default templete3;
