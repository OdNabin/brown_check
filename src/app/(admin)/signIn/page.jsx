"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [responseError, setResponseError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Invalid email address';
        } else {
          error = '';
        }
        break;
      case 'password':
        error = value.length >= 6 ? '' : 'Password must be at least 6 characters';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = Object.values(errors).every((error) => error === '') && Object.values(formData).every((field) => field !== '');
    if (isValid) {
      try {
        const response = await axios.post('https://node-bqys.onrender.com/login/signin', formData);
        if (response.data.status === '400') {
          setResponseError(response.data.message);
          toast.error('Login failed');
        } else {
          toast.success('Login successful');
          localStorage.setItem('token', response.data.token);
          setTimeout(() => {
            router.push('/dashboard');
          }, 3000);
        }
      } catch (error) {
        setResponseError(error.response?.data?.message || 'An error occurred while submitting the form');
      }
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div>
      <Container className=''>
        <Row className='d-flex justify-content-center align-items-center my-5'> 
          <Col md={6} className='box-container d-flex justify-content-center align-items-center'>
            <div>
              <h1 style={{ fontWeight: 800 }}>Welcome Back !</h1>
              <br />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-danger">{errors.email}</span>}
                </Form.Group>
                <br />
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <span className="text-danger">{errors.password}</span>}
                </Form.Group>
                <br />
                {responseError && <div className="text-danger">{responseError}</div>}

                <Button type="submit" className='button'> Sign In</Button>
                <ToastContainer />
              </Form>
              <br />
              <p className='text-sign'>Don't have an account? <u onClick={() => router.push('/signUp')}><b>Sign up</b></u></p>
            </div>
          </Col>
          {/* <Col md={6}>
            <Image src={signin} alt="loginform" className='imageworld' />
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;