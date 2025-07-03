import React from 'react';
import { useSelector } from 'react-redux';
const shortid = require('shortid');

function Template5() {
  const dataStore = useSelector(state => state.dataStore);

  return (
    <div className="w-100 min-vh-100" style={{ fontFamily: 'Roboto, sans-serif', backgroundColor: '#1a1a1a', color: '#e0e0e0', padding: '2rem' }}>
      <div className="text-center mb-5">
        <img
          src={dataStore.imageFile}
          alt="profile"
          className="rounded-circle shadow"
          style={{ width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #4caf50' }}
        />
        <h1 className="mt-3" style={{ color: '#4caf50' }}>{dataStore.personalInfo.firstName + ' ' + dataStore.personalInfo.lastName}</h1>
        <h4 style={{ color: '#9e9e9e' }}>{dataStore.workEx[dataStore.workEx.length - 1]?.title}</h4>
      </div>

      <hr style={{ borderColor: '#4caf50' }} />

      <div className="mb-4">
        <h3 style={{ color: '#4caf50' }}>Profile</h3>
        <p>{dataStore.personalInfo.Objective}</p>
      </div>

      <div className="mb-4">
        <h3 style={{ color: '#4caf50' }}>Experience</h3>
        {dataStore.workEx.map((item) => (
          <div key={shortid.generate()} className="mb-3">
            <h5>{item.title} @ {item.orgName}</h5>
            <p style={{ color: '#bdbdbd' }}>{item.startYear} - {item.endYear}</p>
            <p>{item.jobDescription}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 style={{ color: '#4caf50' }}>Education</h3>
        {dataStore.education.map((item) => (
          <div key={shortid.generate()} className="mb-3">
            <h5>{item.Degree}</h5>
            <p>{item.Type} from <b>{item.University}</b></p>
            <p>Duration: {item.Start} - {item.End}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 style={{ color: '#4caf50' }}>Skills</h3>
        <ul>
          {dataStore.skills.map((skill) => (
            <li key={shortid.generate()}>{skill.skillName}</li>
          ))}
        </ul>
      </div>

      <hr style={{ marginTop: '2rem', borderColor: '#4caf50' }} />
      <div style={{ fontSize: '0.9rem', color: '#757575' }}>
        <b>Contact:</b> {dataStore.personalInfo.Email} | {dataStore.personalInfo.Mobile} <br />
        {dataStore.personalInfo.Address1}, {dataStore.personalInfo.Address2}, {dataStore.personalInfo.City}, {dataStore.personalInfo.State}, {dataStore.personalInfo.Pin}
      </div>
    </div>
  );
}

export default Template5;
