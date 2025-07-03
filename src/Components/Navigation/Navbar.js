import React from 'react'
import { FileEarmarkTextFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', zIndex: 10 }}>
      <nav className="navbar navbar-expand-lg navbar-light p-0 m-0">
        <div className="container-fluid">
          {/* Brand with icon and black background */}
          <div className="navbar-brand d-flex align-items-center" style={{ color: '#07588a', fontSize: '30px', fontWeight: '600' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'blue',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              <div className="me-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                <FileEarmarkTextFill size={24} />
              </div>
              <div style={{ fontWeight: '600', fontSize: '1rem' }}>Resume Builder</div>
            </div>
          </div>

          {/* Navbar toggler button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="flex-grow-1"></div>
            {/* You can add nav links here if needed */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
