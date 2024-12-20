import Image from 'next/image';
import React, { useEffect } from 'react';
import automative from '../asserts/home/automotive.webp';
import verification from "../asserts/home/verification.webp";
import security from "../asserts/home/security.webp";
import integration from "../asserts/home/integration.webp";
import development from "../asserts/home/development.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-cubic' });
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: '#040716', color: '#FFF' }}>
        <div className='container'>
          <div className='row'>
            <div 
              className='col-md-6 order-md-1 order-2 d-flex justify-content-center align-items-center' 
              data-aos="fade-right" style={{overflowX:"hidden"}}
            >
              <div>
                <h1>Automotive</h1>
                <p>Dive into the realm of cars with our comprehensive coverage of automotive advancements. From engine efficiency and dynamic handling to state-of-the-art technology, we provide enthusiasts and professionals alike with in-depth insights and updates. Explore the intersection of design, performance, and innovation in the ever-evolving world of automobiles.</p>
              </div>
            </div>
            <div 
              className='col-md-6 order-md-2 order-1 d-flex justify-content-center align-items-center' 
              data-aos="fade-left" style={{overflowX:"hidden"}}
            >
              <Image src={automative} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#FFF', color: '#000' }}>
        <div className='container'>
          <div className='row'>
            <div 
              className='col-md-6 order-md-1 order-2 d-flex justify-content-center align-items-center' 
              data-aos="fade-right" style={{overflowX:"hidden"}}
            >
              <Image src={integration} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div 
              className='col-md-6 order-md-2 order-1 d-flex justify-content-center align-items-center' 
              data-aos="fade-left" style={{overflowX:"hidden"}}
            >
              <div>
                <h1>Integration</h1>
                <p>Experience seamless integration in automotive design and technology. From advanced infotainment systems to intelligent driver-assist features, our focus is on enhancing your driving experience. Discover how innovation meets practicality, ensuring connectivity, safety, and comfort on every journey. Explore the future of integrated automotive solutions with us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#181e2c', color: '#FFF' }}>
        <div className='container'>
          <div className='row'>
            <div 
              className='col-md-6 order-md-1 order-2 d-flex justify-content-center align-items-center' 
              data-aos="fade-right" style={{overflowX:"hidden"}}
            >
              <div>
                <h1>Cyber Security</h1>
                <p>Ensure your vehicle's safety with cutting-edge cyber security solutions. Safeguard against digital threats with advanced encryption and secure software updates. Discover how we protect your car's connectivity and data integrity, providing peace of mind on the road. Explore our cyber security features for a smarter, safer driving experience.</p>
              </div>
            </div>
            <div 
              className='col-md-6 order-md-2 order-1 d-flex justify-content-center align-items-center' 
              data-aos="fade-left" style={{overflowX:"hidden"}}
            >
              <Image src={security} style={{ width: '70%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#0c2237', color: '#FFF' }}>
        <div className='container'>
          <div className='row'>
            <div 
              className='col-md-6 order-md-1 order-2 d-flex justify-content-center align-items-center' 
              data-aos="fade-right" style={{overflow:"hidden"}}
            >
              <Image src={development} style={{ width: '70%', height: 'auto' }} />
            </div>
            <div 
              className='col-md-6 order-md-2 order-1 d-flex justify-content-center align-items-center' 
              data-aos="fade-left" style={{overflowX:"hidden"}}
            >
              <div>
                <h1>Development</h1>
                <p>Explore the evolution of automotive development with us. From concept to creation, we innovate with advanced engineering and sustainable design. Discover how we shape the future of mobility, integrating cutting-edge technology and eco-friendly solutions. Join us on the journey of automotive excellence and progress.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#000000', color: '#FFF' }}>
        <div className='container'>
          <div className='row'>
            <div 
              className='col-md-6 order-md-1 order-2 d-flex justify-content-center align-items-center' 
              data-aos="fade-right" style={{overflowX:"hidden"}}
            >
              <div>
                <h1>Verification & Validation</h1>
                <p>Ensure reliability and safety through rigorous verification and validation processes. We meticulously test every component and system to meet stringent quality standards. From simulated environments to real-world scenarios, our commitment to excellence ensures your peace of mind on the road. Experience trusted verification and validation practices that redefine automotive safety and performance.</p>
              </div>
            </div>
            <div 
              className='col-md-6 order-md-2 order-1 d-flex justify-content-center align-items-center' 
              data-aos="fade-left" style={{overflowX:"hidden"}}
            >
              <Image src={verification} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
