import React, { useState } from 'react';
import './SignIn.css';
import Login from './Login';

const SignIn = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [pass, setPass] = useState('');

  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    age: '',
    email: '',
    gender: '',
    pass: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {
      fname: '',
      lname: '',
      age: '',
      email: '',
      gender: '',
      pass: '',
    };

    if (!fname.trim()) {
      newErrors.fname = 'First Name is required';
    }

    if (!lname.trim()) {
      newErrors.lname = 'Last Name is required';
    }

    if (age<0) {
      newErrors.age = 'Age must be greater than 0';
    }
    else if (age>100){
      newErrors.age = 'Age must be lesser than 100';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    const validatePassword = (pass) => {
      const newErrors = {};
    
      if (!pass.trim()) {
        newErrors.pass = 'Password is required';
      } else {
        // Check for at least one uppercase letter
        if (!/[A-Z]/.test(pass)) {
          newErrors.pass = 'Password must contain at least one uppercase letter';
        }
    
        // Check for at least one special character
        if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(pass)) {
          newErrors.pass = 'Password must contain at least one special character';
        }
    
        // Check for a minimum length of 8 characters
        if (pass.length < 8) {
          newErrors.pass = 'Password must be at least 8 characters long';
        }
      }
    
      return newErrors;
    };


    if (!gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);

    // If there are no errors, proceed with form submission
    if (Object.values(newErrors).every((error) => !error)) {
      const userData = {
        fname: fname,
        lname: lname,
        email: email,
        password: pass,
        age: age,
        gender: gender,
      };

      if (postData(userData)) {
        // Handle successful submission, e.g., redirect to login page
        // You might want to replace the following line with your actual redirection logic
        window.location.href = '/Login';
      }
    }
  };

  const postData = async (Data) => {
    const post = await fetch('http://localhost:3000/signIn', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Data),
    });
    return true;
  };

  return (
    <div className='s-content'>
      <div className='s-wrapper'>
        <form action='/Login'>
          <div>
            <h1>WELCOME TO SIGN IN PAGE</h1>
          </div>
          <div>
            <label htmlFor='firstname'>First Name:</label>
            <input
              type='text'
              id='btn1'
              name='firstname'
              onChange={(e) => setFname(e.target.value)}
            />
            <div className='error'>{errors.fname}</div>
          </div>
          <div>
            <label htmlFor='lastname'>Last Name:</label>
            <input
              type='text'
              id='btn1'
              name='lastname'
              onChange={(e) => setLname(e.target.value)}
            />
            <div className='error'>{errors.lname}</div>
          </div>
          <div>
            <label htmlFor='age'>Age:</label>
            <input
              type='number'
              id='btn1'
              name='age'
              onChange={(e) => setAge(e.target.value)}
            />
            <div className='error'>{errors.age}</div>
          </div>
          <div>
            <label htmlFor='email'>E-mail:</label>
            <input
              type='email'
              id='btn1'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='error'>{errors.email}</div>
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='btn1'
              name='password'
              onChange={(e) => setPass(e.target.value)}
            />
            <div className='error'>{errors.pass}</div>
          </div>
          <div>
            <label htmlFor='gender'>Gender:</label>
            <input
              type='radio'
              id='btn1'
              name='gender'
              value='male'
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor='male'>Male</label>
            <input
              type='radio'
              name='gender'
              value='female'
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor='female'>Female</label>
            <div className='error'>{errors.gender}</div>
          </div>
          <div>
            <button type='submit' onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
