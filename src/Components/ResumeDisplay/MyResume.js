import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Template1 from '../TemplatesComponents/Template1';
import Template2 from '../TemplatesComponents/Template2';
import Template3 from '../TemplatesComponents/Template3';
import Template4 from '../TemplatesComponents/Template4';
import SuccessMessage from './Modal';
import { FileEarmarkTextFill, Download } from 'react-bootstrap-icons';

function MyResume() {
  const selectedTemplate = useSelector((state) => state.dataStore.selectedTemplate);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const downloadComponentPDF = () => {
    const input = document.getElementById('divToPrint');
    setIsLoading(true);
    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', 'a4');
      const ratio = canvas.width / canvas.height;
      const width = pdf.internal.pageSize.getWidth();
      const height = width / ratio;
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      pdf.save('resume.pdf');
    }).then(() => {
      setIsLoading(false);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 6000);
    });
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Template 1':
        return <Template1 />;
      case 'Template 2':
        return <Template2 />;
      case 'Template 3':
        return <Template3 />;
      case 'Template 4':
        return <Template4 />;
      default:
        return (
          <div style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
            <h3>Please select a template!</h3>
          </div>
        );
    }
  };

  return (
    <div style={{ minWidth: '300px', display: 'flex', gap: '20px' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '250px',
          height: '100vh',
          backgroundColor: '#000',
          color: '#fff',
          padding: '20px',
          boxSizing: 'border-box',
          fontFamily: 'Segoe UI, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Menu</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link to="/" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            Home
          </Link>
          <Link to="/" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            Templates
          </Link>
          <Link to="/about" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            About
          </Link>
          <Link to="/contact" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            User Dashboard
          </Link>
          <Link to="/resume-builder" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <FileEarmarkTextFill size={20} />
            Resume Builder
          </Link>

          {/* Download Resume Link */}
          <button
            onClick={downloadComponentPDF}
            disabled={isLoading}
            style={{
              ...linkStyle,
              backgroundColor: '#1f4287',
              border: 'none',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.6 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '8px'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2859a7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1f4287'}
          >
            <Download size={18} />
            {isLoading ? 'Generating...' : 'Download Resume'}
          </button>
        </nav>
      </aside>

      {/* Resume Content */}
      <div style={{ flexGrow: 1, padding: '30px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <h2 style={{ color: '#07588a' }}>My Resume Preview</h2>
          {selectedTemplate && (
            <span style={{
              backgroundColor: '#d1ecf1',
              color: '#0c5460',
              padding: '10px',
              borderRadius: '5px',
              fontSize: '14px'
            }}>
              Current Template: {selectedTemplate}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <Link to="/detailsfillingpage/keyskills">
            <button style={buttonStyleOutline}>← Go Back</button>
          </Link>

          <button
            onClick={downloadComponentPDF}
            disabled={isLoading}
            style={buttonStylePrimary}
          >
            {isLoading ? 'Generating PDF...' : 'Save Resume'}
          </button>

          <button
            onClick={() => window.location.reload()}
            style={buttonStyleGray}
          >
            Refresh Preview
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div
            id="divToPrint"
            style={{
              backgroundColor: '#fff',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              borderRadius: '10px',
              padding: '20px',
              width: '100%',
              maxWidth: '900px'
            }}
          >
            {renderTemplate()}
          </div>
        </div>

        <SuccessMessage showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

// Common styles
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.1rem',
  padding: '8px 12px',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const handleHover = (e) => (e.target.style.backgroundColor = '#1f4287');
const handleLeave = (e) => (e.target.style.backgroundColor = 'transparent');

const buttonStylePrimary = {
  padding: '10px 20px',
  backgroundColor: '#28a745',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '5px'
};

const buttonStyleGray = {
  padding: '10px 20px',
  backgroundColor: '#6c757d',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  borderRadius: '5px'
};

const buttonStyleOutline = {
  padding: '10px 20px',
  backgroundColor: 'transparent',
  border: '1px solid #07588a',
  color: '#07588a',
  cursor: 'pointer',
  borderRadius: '5px'
};

export default MyResume;
