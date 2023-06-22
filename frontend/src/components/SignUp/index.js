import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function SignUp() {

    const [submissionSuccess, setSubmissionSuccess] = useState(false); // Form submission success flag
    const [formData, setFormData] = useState({ // Form data in the structure of the schema defined in the backend
      email: '',
      firstName: '',
      surname: '',
      dateOfBirth: '',
      password: '',
      location: ''
    });

    async function postData(url = '', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        return response.json();
      }

    // Updates form data by adding new key-value pair using the input name and value
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
    
        e.preventDefault(); // preventDefault prevents the default behaviour of the form which is to refresh the page on submission
    
        try {
          // Make POST request to /users endpoint and pass form data state as the body
          const response = await postData('http://localhost:4000/users', formData);
          console.log(response);
          // Set submission success flag
          setSubmissionSuccess(true);
          // Reset form data
          setFormData({
            email: '',
            firstName: '',
            surname: '',
            dateOfBirth: '',
            password: '',
            location: ''
          });
        } catch (error) {
          console.error(error);
          // Show error prompt
          alert('Signup submission failed. Please try again.');
        }
      };



    return(
         <div className="signup_overlay">
            <div className="header">
                <h1 className="header__title">Welcome To Neighbourhood Nomad</h1>
            </div>
            <div className="signup_container">
                <div className="signup_container__title">
                    <h3>Sign Up</h3>
                </div>
                <div className="signup_container__formcontainer">


                    <div className="signup_container__form">
                    <form>
                        <input 
                            type="text" 
                            placeholder="First Name" 
                            value={formData.firstName}
                            name="firstName"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Surname" 
                            value={formData.surname}
                            name="surname"
                            onChange={handleChange}
                         />
                        <input 
                            type="date" 
                            placeholder="Date of Birth"
                            value={formData.date}
                            name="dateOfBirth"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Location"
                            value={formData.location}
                            name="location"
                            onChange={handleChange} 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            placeholder="Password" 
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                        />
                        <Link to="/login">
                            <button type="submit" onClick={handleSubmit}>Sign Up</button>
                        </Link>
                        {submissionSuccess && 
                            <p className="success-message">Form submitted successfully!</p>}
                        </form>
                    </div>
                </div>
            </div>
         </div>
    )

}

export default SignUp;