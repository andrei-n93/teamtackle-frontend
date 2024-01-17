import React, { useState } from 'react';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit} className="registration-form">
            <input type="text" name="username" className="input-field" value={formData.username} onChange={handleChange} placeholder="Username" />
            <input type="email" name="email" className="input-field" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" className="input-field" value={formData.password} onChange={handleChange} placeholder="Password" />
            <input type="password" name="confirmPassword" className="input-field" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
            <button type="submit" className="submit-button">Register</button>
        </form>
    );
}

export default RegistrationForm;

