import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PersonalInfo from './PersonalInfo';
import WorkEx from './WorkEx';
import Education from './Education';
import KeySkills from './KeySkills';
import { updateState } from '../../ReduxManager/dataStoreSlice';

function DetailsFillingPage() {
  const dispatch = useDispatch();
  const errorMessages = useSelector(state => state.dataStore.errorMessages);

  let isFormValid = true;
  for (let key in errorMessages) {
    if (errorMessages[key] !== "") {
      isFormValid = false;
      break;
    }
  }

  const onSideNavLinkClick = () => {
    if (!isFormValid) {
      alert('Please fill all the necessary details correctly!');
      dispatch(updateState({ key: 'showErrorMessages', value: true }));
    } else {
      dispatch(updateState({ key: 'showErrorMessages', value: false }));
    }
  };

  return (
    <div className="container-fluid py-3" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row min-vh-100">
        {/* Sidebar */}
        <div className="col-lg-3 col-sm-12 bg-light border-end">
          <div className="py-4 px-3">
            <h4 className="text-primary mb-4 text-center fw-bold">Sections</h4>
            <ul className="nav flex-column gap-3">
              {[
                { label: 'Personal Info', path: '/detailsfillingpage/personalinfo' },
                { label: 'Work Experience', path: '/detailsfillingpage/workex' },
                { label: 'Education', path: '/detailsfillingpage/education' },
                { label: 'Key Skills', path: '/detailsfillingpage/keyskills' }
              ].map((item, idx) => (
                <li key={idx} className="nav-item">
                  <Link
                    to={isFormValid ? item.path : '#'}
                    onClick={onSideNavLinkClick}
                    className="nav-link text-dark px-3 py-2 rounded transition"
                    style={{
                      backgroundColor: '#e9ecef',
                      fontWeight: '500',
                      textDecoration: 'none',
                      borderLeft: '4px solid transparent'
                    }}
                    onMouseEnter={e => e.target.style.borderLeft = '4px solid #007bff'}
                    onMouseLeave={e => e.target.style.borderLeft = '4px solid transparent'}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-lg-9 col-sm-12 px-4 py-3">
          <div
            className="bg-white rounded shadow"
            style={{ minHeight: '85vh', padding: '20px', border: '1px solid #ced4da' }}
          >
            <Routes>
              <Route
                exact
                path="/personalinfo"
                element={<PersonalInfo isFormValid={isFormValid} />}
              />
              <Route
                exact
                path="/workex"
                element={<WorkEx isFormValid={isFormValid} />}
              />
              <Route
                exact
                path="/education"
                element={<Education isFormValid={isFormValid} />}
              />
              <Route
                exact
                path="/keyskills"
                element={<KeySkills isFormValid={isFormValid} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsFillingPage;
