import React from 'react'
import {
  Whatsapp,
  Facebook,
  Envelope,
  Instagram,
  CheckCircle,
} from 'react-bootstrap-icons'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

function AboutUs() {
  const features = [
    'Professionally designed templates',
    'Easy-to-use drag and fill interface',
    'ATS-friendly formatting',
    'Download as PDF',
    'Customize fonts, colors & layout',
    'Add or remove resume sections',
    'Optional cover letter builder',
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '250px',
          backgroundColor: '#000',
          color: '#fff',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Menu</h2>
        <Link to="/myresume" style={linkStyle}>
        MyResume
        </Link>
        <Link to="/templates" style={linkStyle}>
          Templates
        </Link>
        <Link to="/about" style={{ ...linkStyle, backgroundColor: '#1f4287' }}>
          About Us
        </Link>
        <Link to="/AdminDashboard" style={linkStyle}>
          User Dashboard
        </Link>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <div className="px-3">
          <Row gutter={[16, 16]}>
            <Col md={{ span: 8, offset: 8 }}>
              <h1
                className="mt-3 p-2 px-3"
                style={{
                  textDecoration: 'underline',
                  textDecorationColor: '#1c226b',
                  textDecorationThickness: '4px',
                  backgroundColor: '#5585b5',
                  fontFamily: 'Helvetica',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <b>
                  <i>Resume-Builder</i>
                </b>
              </h1>
            </Col>
          </Row>
        </div>

        <Row gutter={[16, 16]}>
          <Col md={{ span: 8, offset: 8 }}>
            <div
              className="mt-2 mb-4 p-2 px-3"
              style={{
                fontSize: '17px',
                textAlign: 'justify',
                textJustify: 'inter-word',
              }}
            >
              <i>
                A vibrant selection of eye-catching and professional resume and cover
                letter templates helps you stand out from other applicants and leave a
                lasting impression. Our templates are professionally designed,
                employer-ready, ATS-friendly, and easy to customize. Choose from dozens
                of free resume templates, then use our Resume Builder to create a
                professional resume in minutes.
              </i>
            </div>
          </Col>
        </Row>

        {/* Features */}
        <Row gutter={[16, 16]}>
          <Col md={{ span: 8, offset: 8 }}>
            <h3
              className="text-center mb-3"
              style={{ fontWeight: 'bold', color: '#1c226b' }}
            >
              ✨ Features of Resume Builder
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                    color: '#333',
                  }}
                >
                  <CheckCircle style={{ color: 'green' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Image */}
        <div className="media mt-4">
          <Row gutter={[16, 16]}>
            <Col md={{ span: 8, offset: 8 }}>
              <img
                className="align-self-center mx-auto"
                style={{ maxWidth: '100%' }}
                src="https://cdn.pixabay.com/photo/2017/10/06/09/34/group-2822423__340.png"
                alt="discussion"
              />
            </Col>
          </Row>
        </div>

        {/* Social */}
        <div className="mt-5 px-3">
          <Row gutter={[16, 16]}>
            <Col md={{ span: 8, offset: 8 }}>
              <h3 className="px-4" style={{ wordSpacing: '5px', letterSpacing: '1px' }}>
                Share with your friends.
              </h3>
              <div style={{ display: 'flex', background: '#faf8f8', padding: '10px' }}>
                <div className="p-2">
                  <Whatsapp style={{ fontSize: '25px', color: 'green' }} />
                </div>
                <div className="p-2 ms-4">
                  <Facebook style={{ fontSize: '25px', color: 'blue' }} />
                </div>
                <div className="p-2 ms-4">
                  <Envelope style={{ fontSize: '25px', color: 'red' }} />
                </div>
                <div className="p-2 ms-4">
                  <Instagram style={{ fontSize: '25px', color: '#c50d66' }} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

// Sidebar Link Style
const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  padding: '10px 15px',
  borderRadius: '4px',
  transition: 'background-color 0.3s',
}

export default AboutUs
