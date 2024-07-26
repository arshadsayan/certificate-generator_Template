import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import Template5 from './Template5';
import UploadExcel from './UploadExcel';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('Template1');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [certificateData, setCertificateData] = useState([]);
  const [logo, setLogo] = useState(null);

  const handleDataUpload = (data) => {
    if (!Array.isArray(data) || data.some(item => !item.name || !item.eventDetail || !item.date)) {
      alert("Invalid data format. Please ensure the uploaded data is correct.");
      return;
    }
    setCertificateData(data);
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file.size > 5000000) { // Limit file size to 5MB
      alert("File is too large. Please upload a file smaller than 5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result);
    };
    reader.onerror = () => {
      alert("Error reading file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  const renderTemplate = (data) => {
    if (!data || !data.name || !data.eventDetail || !data.date) {
      return <div>Invalid data</div>;
    }
    const { name, eventDetail, date } = data;

    switch (selectedTemplate) {
      case 'Template1':
        return <Template1 backgroundColor={backgroundColor} name={name} eventDetail={eventDetail} date={date} logo={logo} />;
      case 'Template2':
        return <Template2 backgroundColor={backgroundColor} name={name} eventDetail={eventDetail} date={date} logo={logo} />;
      case 'Template3':
        return <Template3 backgroundColor={backgroundColor} name={name} eventDetail={eventDetail} date={date} logo={logo} />;
      case 'Template4':
        return <Template4 backgroundColor={backgroundColor} name={name} eventDetail={eventDetail} date={date} logo={logo} />;
      case 'Template5':
        return <Template5 backgroundColor={backgroundColor} name={name} eventDetail={eventDetail} date={date} logo={logo} />;
      default:
        return <Template1 backgroundColor={backgroundColor} name={name} eventDetail={eventDetail} date={date} logo={logo} />;
    }
  };

  const downloadPDF = async () => {
    const pdf = new jsPDF('landscape');
    const certificateElements = certificateData.map((_, index) => document.getElementById(`certificate-${index}`));

    for (let i = 0; i < certificateElements.length; i++) {
      const element = certificateElements[i];
      element.style.display = 'block'; // Temporarily display the element for rendering
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for rendering

      await html2canvas(element, { useCORS: true, logging: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        if (i < certificateElements.length - 1) {
          pdf.addPage();
        }
      });

      element.style.display = 'none'; // Hide the element after rendering
    }

    pdf.save('certificates.pdf');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Certificate Generator</h1>
          <a href="/template.xlsx" download>Download Excel Template</a>
          <UploadExcel onDataUpload={handleDataUpload} />
          <div>
            <label>Select Template:</label>
            <select onChange={(e) => setSelectedTemplate(e.target.value)}>
              <option value="Template1">Template 1</option>
              <option value="Template2">Template 2</option>
              <option value="Template3">Template 3</option>
              <option value="Template4">Template 4</option>
              <option value="Template5">Template 5</option>
            </select>
          </div>
          <div>
            <label>Background Color:</label>
            <input 
              type="color" 
              value={backgroundColor} 
              onChange={(e) => setBackgroundColor(e.target.value)} 
            />
          </div>
          <div>
            <label>Upload Logo:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleLogoUpload} 
            />
          </div>
          <button onClick={downloadPDF}>Download All Certificates as PDF</button>
        </header>
        <main>
          {certificateData.map((data, index) => (
            <div id={`certificate-${index}`} key={index} className="certificate" style={{ display: 'none' }}>
              {renderTemplate(data)}
            </div>
          ))}
          {certificateData.length > 0 && (
            <div>
              <h2>Preview of the first certificate:</h2>
              <div>{renderTemplate(certificateData[0])}</div>
            </div>
          )}
        </main>
      </div>
    </Router>
  );
}

export default App;
