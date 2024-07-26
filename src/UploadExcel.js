import React from 'react';
import * as XLSX from 'xlsx';

class UploadExcel extends React.Component {
  handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);

      const extractedData = jsonData.map(row => ({
        name: row['Name'],
        eventDetail: row['Event Detail'],
        date: row['Date'],
        logo: row['Logo'],
      }));

      this.props.onDataUpload(extractedData);
    };
    reader.readAsArrayBuffer(file);
  };

  render() {
    return (
      <div>
        <input type="file" accept=".xlsx, .xls" onChange={this.handleFileUpload} />
      </div>
    );
  }
}

export default UploadExcel;
