import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { templateImagesPaths } from '../Data/Data'
import { useDispatch } from 'react-redux'
import { updateState } from '../../ReduxManager/dataStoreSlice'
import { FileEarmarkTextFill } from 'react-bootstrap-icons'  // Import the icon
const shortid = require('shortid')

function Home() {
  const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver')
  const dispatch = useDispatch()

  return (
    <div style={{ minWidth: '300px', display: 'flex', gap: '20px', padding: '20px' }}>
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
          <Link
            to="/myresume"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '8px 12px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = '#1f4287')}
            onMouseLeave={e => (e.target.style.backgroundColor = 'transparent')}
          >
            MyResume
          </Link>

          <Link
            to="/templates"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '8px 12px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = '#1f4287')}
            onMouseLeave={e => (e.target.style.backgroundColor = 'transparent')}
          >
            Templates
          </Link>

          <Link
            to="/about"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '8px 12px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = '#1f4287')}
            onMouseLeave={e => (e.target.style.backgroundColor = 'transparent')}
          >
            About
          </Link>

          <Link
            to="/contact"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '8px 12px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = '#1f4287')}
            onMouseLeave={e => (e.target.style.backgroundColor = 'transparent')}
          >
            User Dashboard
          </Link>

          {/* New Resume Builder Link */}
          <Link
            to="/resume-builder"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.1rem',
              padding: '8px 12px',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = '#1f4287')}
            onMouseLeave={e => (e.target.style.backgroundColor = 'transparent')}
          >
            <FileEarmarkTextFill size={20} />
            Resume Builder
          </Link>
        </nav>
      </aside>

      {/* Main content (existing template display) */}
      <div style={{ flexGrow: 1 }}>
        <div className="d-flex justify-content-center mt-5">
          <h3
            className="p-3 rounded shadow text-center text-primary fw-bold"
            style={{
              backgroundColor: '#f0f8ff', // aliceblue
              border: '2px solid #007bff',
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '1.5rem',
              letterSpacing: '1px',
              width: 'fit-content',
            }}
          >
            Select a Template to get started!
          </h3>
        </div>

        <div className="container" style={{ color: '#1f4287' }}>
          <div className="row">
            {templateImagesPaths.map((currentTemplate) => {
              return (
                <div
                  className="col col-lg-3 col-md-6  col-12 mt-5"
                  key={shortid.generate()}
                >
                  <div
                    style={{ position: 'relative' }}
                    onMouseOver={() => {
                      setIsMouseOver(currentTemplate.name)
                    }}
                    onMouseOut={() => {
                      setIsMouseOver('MouseIsNotOver')
                    }}
                  >
                    <div className="w-100 d-flex justify-content-center">
                      <h3>{currentTemplate.name}</h3>
                    </div>
                    <img
                      className="w-100 image-aspect-ratio"
                      src={currentTemplate.imageSource}
                      alt="template"
                    />
                    {isMouseOver === currentTemplate.name ? (
                      <Link to="/detailsfillingpage/personalinfo">
                        <button
                          className="btn btn-primary"
                          style={{ position: 'absolute', top: '50%', right: '30%' }}
                          onClick={() => {
                            dispatch(
                              updateState({
                                key: 'selectedTemplate',
                                value: currentTemplate.name,
                              })
                            )
                          }}
                        >
                          Use Template
                        </button>
                      </Link>
                    ) : null}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
