import { useState } from 'react';
import OrganDonationForm from './Components/patient';
// import './App.css'

function MyForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname:'',
    gender:'',
    email: '',
    message: '',
    age:'',
  });
//   const [date, setDate] = useState('');
//   const dateInputRef = useRef(null);

//   const handleChange = (e) => {
//     setDate(e.target.value);
//   };


  //  const handleInputChange = (event) => {
  //    const { name, value } = event.target;
  //    setFormData({ ...formData, [name]: value });
  //  };

  //  const handleSubmit = (event) => {
  //    event.preventDefault();
  //    console.log(formData); // Do something with the form data
  //  };

  return (
    <OrganDonationForm/>
//      <form onSubmit={handleSubmit}>
//       <div className="card">
//         <h2>Donate Organ</h2>
//         <div className="row">
//           <div className="col">
//             <div className="form-group">
//       <label htmlFor="fname">First Name:</label>
//       <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleInputChange} />
//       </div>
//       </div>
//       <div className="col">
//         <div className="form-group">
//       <label htmlFor="lname">Last Name:</label>
//       <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleInputChange} />
//       </div>
//       </div>
// <div className="col">
//   <div className="form-group">
//       <label htmlFor="email">Hospital Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
//       </div>
//       </div>
//       <div className="col">
//       <div className="form-group">
//       <label htmlFor="age">Year of Birth</label>
//       <input type="text" id="age" name="age" value={formData.age} onChange={handleInputChange} />
//       </div>
//       </div>

//       {/* <div className="col">
//         <div className="form-group">
//       <label htmlFor="dob">Date of Birth</label>
//       <input
//         type="date"
//         onChange={handleChange}
//         ref={dateInputRef}
//       />
// </div>
// </div> */}
//       {/* <input type="dob" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} /> */}
//        <div className="col"> 
//          <div className="form-group"> 
//       <label htmlFor="gender">Gender</label>
//       <br></br>
//       <br></br>
//       <input type="radio" value="Male" name="gender" /> Male
//       <br></br>
//       <br></br>
//         <input type="radio" value="Female" name="gender" /> Female
//         <br></br>
//         <br></br>
//         <input type="radio" value="Other" name="gender" /> Other
//         <br></br>
//         <br></br>
//          </div>  
//         </div> 
//       {/* <input type="gender" id="gender" name="gender" value={formData.email} onChange={handleInputChange} /> */}
// <div className="col">
//   <div className="form-group">
//       <label htmlFor="message">Message:</label>
//       <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
//       </div>
//       </div>
//       {/* <div className="but"> */}

//       <button type="submit" className='but'>Submit</button>
//       </div>
//       </div>
//       {/* </div> */}
//     </form>
//   );
// }
// export  default MyForm
  )
}
export default MyForm