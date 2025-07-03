import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfilePicUploadComponent from './ProfileUpload';
import { stateNames } from '../Data/Data';
import TextField from '../InputComponents/TextField';
import TextArea from '../InputComponents/TextArea';
import BottomNavigation from './BottomNavigation';
import { updatePersonalInfo, updateErrorMessages } from '../../ReduxManager/dataStoreSlice';

function PersonalInfo(props) {
  const personalHeads = useSelector(state => state.dataStore.personalInfo);
  const dispatch = useDispatch();

  const onChangeHandler = (key, value, errorMessage = undefined) => {
    dispatch(updatePersonalInfo({ key, value }));
    if (errorMessage !== undefined) {
      dispatch(updateErrorMessages({ key, value: errorMessage }));
    }
  };

  return (
    <div className="container py-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="bg-light shadow rounded p-4">
        {/* Profile Picture Upload (Circle Frame + Upload Button) */}
        <div className="mb-4 text-center">
          <div
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto',
              border: '4px solid #ccc',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f8f9fa',
            }}
          >
            <ProfilePicUploadComponent />
          </div>
          <small className="text-muted d-block mt-2">Click image to upload/change</small>
        </div>

        {/* Personal Info Fields */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="firstname" className="form-label fw-bold">First Name*</label>
            <TextField
              type="text"
              elementId="firstname"
              placeholder="First name"
              value={personalHeads.firstName}
              onChange={(value, errorMessage) => onChangeHandler('firstName', value, errorMessage)}
              validation={{ required: true }}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="lastname" className="form-label fw-bold">Last Name</label>
            <TextField
              type="text"
              elementId="lastname"
              placeholder="Last name"
              value={personalHeads.lastName}
              onChange={value => onChangeHandler('lastName', value)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="staticEmail" className="form-label fw-bold">Email*</label>
            <TextField
              type="text"
              elementId="staticEmail"
              placeholder="users@example.com"
              value={personalHeads.Email}
              validation={{ checkType: 'email', required: true }}
              onChange={(value, errorMessage) => onChangeHandler('Email', value, errorMessage)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="mobile" className="form-label fw-bold">Mobile No.*</label>
            <TextField
              type="number"
              elementId="Mobile"
              value={personalHeads.Mobile}
              validation={{ maxLengthRequired: 10, required: true }}
              onChange={(value, errorMessage) => onChangeHandler('Mobile', value, errorMessage)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="inputAddress1" className="form-label fw-bold">Address 1</label>
            <TextField
              type="text"
              elementId="inputAddress1"
              value={personalHeads.Address1}
              onChange={value => onChangeHandler('Address1', value)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="inputAddress2" className="form-label fw-bold">Address 2</label>
            <TextField
              type="text"
              elementId="inputAddress2"
              value={personalHeads.Address2}
              onChange={value => onChangeHandler('Address2', value)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="inputCity" className="form-label fw-bold">City*</label>
            <TextField
              type="text"
              elementId="inputCity"
              value={personalHeads.City}
              validation={{ required: true }}
              onChange={(value, errorMessage) => onChangeHandler('City', value, errorMessage)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="inputState" className="form-label fw-bold">State</label>
            <select
              id="inputState"
              className="form-control"
              value={personalHeads.State}
              onChange={e => dispatch(updatePersonalInfo({ key: 'State', value: e.target.value }))}
            >
              <option>Select State</option>
              {stateNames.map((state, i) => (
                <option key={i} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="pin" className="form-label fw-bold">Pincode</label>
            <TextField
              type="number"
              elementId="pin"
              value={personalHeads.Pin}
              onChange={value => onChangeHandler('Pin', value)}
            />
          </div>

          <div className="col-12 mb-4">
            <label htmlFor="Textarea" className="form-label fw-bold">Objective</label>
            <TextArea
              elementId="Textarea"
              rows="3"
              value={personalHeads.Objective}
              onChange={value => onChangeHandler('Objective', value)}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-4">
          <BottomNavigation
            prevPagePath="/"
            nextPagePath="/detailsfillingpage/workex"
            isFormValid={props.isFormValid}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
