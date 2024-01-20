import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [validationErrors, setValidationErrors] = useState({ password: '' });
    const validatePassword = (password) => {
    let errors = '';
    if (password.length < 8) {
        errors += 'Password must be at least 8 characters. ';
    }
    // Add more conditions as needed (e.g., regex for special characters)
    return errors;
    };
    const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
    const errors = validatePassword(value);
    setValidationErrors({...validationErrors, password: errors});
    };



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

	const headers = {
    	    'Content-Type': 'application/json',
    	    'Authorization': 'Basic ' + btoa('user:cce74602-b41b-4d43-838a-fc005ffc44d5')
     	};

        // backend url endpoint
        const url = 'http://localhost:8080/users'; 

        fetch(url, {
            method: 'POST',
    	    headers: headers,
    	    body: JSON.stringify(formData),
	})
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="registration-form">
            <input type="text" name="username" className="input-field" value={formData.username} onChange={handleChange} placeholder="Username" required/>
	    <input type="email" name="email" className="input-field" value={formData.email} onChange={handleChange} placeholder="Email" required />   
            <input type="password" name="password" className="input-field" value={formData.password} onChange={handlePasswordChange} placeholder="Password" required />
            {validationErrors.password && <div className="error-message">{validationErrors.password}</div>}
 	    <input type="password" name="confirmPassword" className="input-field" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
	    <button type="submit" className="submit-button">Register</button>
        </form>
    );
}

export default RegistrationForm;

