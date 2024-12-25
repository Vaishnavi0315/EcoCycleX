import React from 'react';
import { jsPDF } from 'jspdf';

const Report = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Sustainability Metrics Report', 10, 10);
    doc.text('This is a sample report.', 10, 20);
    doc.save('report.pdf');
  };

  return (
    <section>
      <h2>Generate Report</h2>
      <button onClick={generatePDF}>Download Report</button>
    </section>
  );
};

export default Report;