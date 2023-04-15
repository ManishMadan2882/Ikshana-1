import React, { useState } from 'react';
import '../css/Organdonation.css'; // Import the CSS file for styling

function OrganDonationForm() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
  const [donationType, setDonationType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit} className="organ-donation-form">
      {/* {/* <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label> */}
      <h1>Find an Organ!</h1>
      <br></br>
      <div><h2> Choose an Organ</h2></div>
      <label>
        {/* <h1>Find an Organ!</h1> */}
        {/* Choose an Organ */}
        <select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
          <option value="">Choose an Organ</option>
          <option value="pancreas">Pancreas</option>
          <option value="Lungs">Lungs</option>
          <option value="heart">Heart</option>
          <option value="brain">Brain</option>
          <option value="Plasma">Plasma</option>
          <option value="liver">Liver</option>
          <option value="intestine">Intestine</option>
          <option value="Kidney">Kidney</option>
          <option value="Eyes">Eyes</option>
        </select>
      </label>
    
      <br></br>
      <div><h2> Choose the Blood Type</h2></div>
      <label>
        {/* <h1>Find an Organ!</h1> */}
        {/* Choose an Organ */}
        <select value={donationType} onChange={(e) => setDonationType(e.target.value)}>
          <option value="">Choose Blood Group</option>
          <option value="O+">O+</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="B-">B-</option>
          <option value="O-">O-</option>
          {/* <option value="Eyes">Eyes</option> */}
        </select>
      </label>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default OrganDonationForm;