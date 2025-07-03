import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '../InputComponents/TextField';
import { updateKeySkills, addArrayElement, removeArrayElement } from '../../ReduxManager/dataStoreSlice';
import BottomNavigation from './BottomNavigation';
import { Link, useLocation } from 'react-router-dom';

// Sidebar Component
const Sidebar = () => {
  const location = useLocation();
  const navItems = [
    { path: '/detailsfillingpage/personalinfo', label: 'Personal Info' },
    { path: '/detailsfillingpage/education', label: 'Education' },
    { path: '/detailsfillingpage/keyskills', label: 'Key Skills' },
    { path: '/detailsfillingpage/projects', label: 'Projects' },
    { path: '/myresume', label: 'My Resume' },
  ];

  return (
    <div style={{
      width: '250px',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <h4 style={{ color: '#07588a', marginBottom: '30px' }}>Resume Builder</h4>
      <ul className="list-unstyled">
        {navItems.map((item) => (
          <li key={item.path} style={{ marginBottom: '15px' }}>
            <Link
              to={item.path}
              style={{
                textDecoration: 'none',
                color: location.pathname === item.path ? '#0d6efd' : '#212529',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal'
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Component
function KeySkills(props) {
  const skillHeads = useSelector(state => state.dataStore.skills);
  const dispatch = useDispatch();

  function AddSkill() {
    dispatch(addArrayElement({
      key: 'skills',
      element: { skillName: "" }
    }));
  }

  function RemoveSkill() {
    dispatch(removeArrayElement({ key: "skills" }));
  }

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />

      <div className="p-5 font" style={{ marginLeft: '270px', width: '100%' }}>
        <h1>Key Skills</h1>
        <hr />

        {skillHeads.map((item, index) => (
          <div key={index} className='col-lg-5 col-md-6 col-12 mt-5'>
            <TextField
              type="text"
              value={item.skillName}
              onChange={(value) => {
                dispatch(updateKeySkills({
                  key: 'skillName',
                  value: value,
                  index: index,
                }));
              }}
            />
          </div>
        ))}

        <div className='row mt-3'>
          <div className='col-sm-2 col-12 mt-3'>
            <button className='btn btn-primary p-2 w-100' onClick={AddSkill}>
              Add Skill
            </button>
          </div>
          <div className='col-sm-2 col-12 mt-3'>
            <button className='btn btn-danger p-2 w-100' onClick={RemoveSkill}>
              Remove
            </button>
          </div>
        </div>

        <div className="mt-4">
          <BottomNavigation
            prevPagePath='/detailsfillingpage/education'
            nextPagePath='/myresume'
            isFormValid={props.isFormValid}
          />
        </div>
      </div>
    </div>
  );
}

export default KeySkills;
