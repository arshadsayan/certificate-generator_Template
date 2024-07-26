import React, { useState } from 'react';
import Template1 from './templete1';
import Template2 from './templete2';
import Template3 from './templete3';
import Template4 from './templete4';
import Template5 from './templete5';
import * as XLSX from 'xlsx';

function CertificateGenerator() {
  const [data, setData] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('Template1');
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });
      setData(jsonData);
    };
    reader.readAsBinaryString(file);
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Template1':
        return <Template1 data={data} bgColor={bgColor} />;
      case 'Template2':
        return <Template2 data={data} bgColor={bgColor} />;
      case 'Template3':
        return <Template3 data={data} bgColor={bgColor} />;
      case 'Template4':
        return <Template4 data={data} bgColor={bgColor} />;
      case 'Template5':
        return <Template5 data={data} bgColor={bgColor} />;
      default:
        return <Template1 data={data} bgColor={bgColor} />;
    }
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <button onClick={() => setSelectedTemplate('Template1')}>Template 1</button>
      <button onClick={() => setSelectedTemplate('Template2')}>Template 2</button>
      <button onClick={() => setSelectedTemplate('Template3')}>Template 3</button>
      <button onClick={() => setSelectedTemplate('Template4')}>Template 4</button>
      <button onClick={() => setSelectedTemplate('Template5')}>Template 5</button>
      <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
      {renderTemplate()}
    </div>
  );
}

export default CertificateGenerator;
