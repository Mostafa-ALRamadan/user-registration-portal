import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const initialFormData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: '',
    terms: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // This effect handles the overall form validity.
    const validateForm = () => {
      const newErrors = {};
      // Same validation logic as before
      if (!formData.fullName) newErrors.fullName = 'Full Name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is not valid';
      }
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^[0-9+()\s-]+$/.test(formData.phone)) {
        newErrors.phone = 'Phone number contains invalid characters';
      }
      if (!formData.role) newErrors.role = 'Role is required';
      if (!formData.terms) newErrors.terms = 'You must accept the terms';
      
      setErrors(newErrors);
      setIsFormValid(Object.keys(newErrors).length === 0);
    };
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      // Mark all fields as touched to show errors on submit attempt
      const allTouched = Object.keys(formData).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {});
      setTouched(allTouched);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Redirect based on role
      if (formData.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isSubmitted) {
    return (
      <div className="form-container success-message">
        <h3>Thank you for registering!</h3>
        <p>Your account has been created successfully.</p>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            name="fullName" 
            placeholder="Enter your full name" 
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullName && touched.fullName && <p className="error-message">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group password-group">
          <label htmlFor="password">Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.password && touched.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className="form-group password-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            id="confirmPassword" 
            name="confirmPassword" 
            placeholder="Confirm your password" 
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.confirmPassword && touched.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Enter your phone number" 
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select 
            id="role" 
            name="role"
            value={formData.role}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && touched.role && <p className="error-message">{errors.role}</p>}
        </div>

        <div className="form-group terms-group">
          <input 
            type="checkbox" 
            id="terms" 
            name="terms" 
            checked={formData.terms}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor="terms">I agree to the Terms & Conditions</label>
        </div>
        {errors.terms && touched.terms && <p className="error-message">{errors.terms}</p>}

        <button type="submit" disabled={!isFormValid || isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
