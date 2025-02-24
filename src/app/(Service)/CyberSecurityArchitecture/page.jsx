"use client"
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Image } from 'react-bootstrap';
import { FaArrowRight, FaHome } from "react-icons/fa";

const Page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setLoader(true);
  }, []);

  return (
    <div style={{overflow:"hidden"}} className='pad'>
      {
        !loader ? (
          <div className="loaderbox">
            <div className="loader"></div>
          </div>
        ) : (
          <div>
            <div className="position-relative video-container">
              <div className="embed-responsive embed-responsive-16by9">
                <video
                  className="embed-responsive-item"
                  src="/service.mp4"
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
              <div
                className="position-absolute w-100 h-100"
                style={{ top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              ></div>
              <div className="container sec position-absolute top-50 start-50 translate-middle text-center" data-aos="fade-up">
                <h1
                  style={{ color: "#FFF", fontWeight: "500" }}
                  className="about-data"
                >
                  Cyber Security Architecture Design 
                </h1>
              </div>
            </div>

            <div className="container fraud-h my-3" data-aos="fade-up">
              {/* <h2 className='text-center mb-3'>  Fraud Detection</h2> */}
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <h1 className='heading_check'>Cyber Security Architecture Design</h1>
                  <h4>Threat analysis & risk assessment
for vehicle architectures, systems
and components</h4>
                  <p className='p'>
                  Brown Edge Technology helps you ensure secure-by-design vehicle architectures by embedding robust cyber security from the early development stages. Using a holistic methodology compliant with ISO 21434 and ASPICE, our services cover TARA (Threat analysis & risk assessment), cyber security concept, security requirements specification and architecture review.
                  </p>
                </div>
                <div className="col-md-6">
                <img src="/c1.png" style={{ width: "100%", borderRadius: "20px" }} />
                </div>
              </div>
            </div>


            <div className="container p-4">
              <div className='text-center fraud-box'>
               <div className='text-center'>
               <h4 className='mb-4'>Why Brown edge technology for Cyber Security?</h4>
               <h1>Get clear insight into your system’s security posture during development steps, fortifying your defenses with precision and foresight.</h1>
               </div>
              </div>
            </div>


            <div class="container ox">
    <h1 class="text-center mb-5">Services Offering</h1>
    <div class="row g-4 d-flex justify-content-center align-items-center">
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>TARA and Security
Concept
 </h4>
                    <p>Embed robust cyber security in the early design stage</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
    <div class="card-body text-center">
        <img src="/c2.png" alt="Car Image" style={{ width: "100%",height:"200px",objectFit:"cover" }} />
    </div>
</div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>Security
Requirements
 
                    </h4>
                    <p>Define requirements and guidelines for all vehicle security aspects</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>Architecture
Review
 </h4>
                    <p> 
                    Final, pre-audit assessment of vehicle ecosystem
                    </p>
                </div>
            </div>
        </div>
        {/* <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>Fuzz Testing</h4>
                    <p>Protocol-aware interface fuzzing for automotive</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>Amazon Alexa Certification
                    </h4>
                    <p>
                    Ensure your Alexa integration meets AWS security requirements</p>
                </div>
            </div>
        </div> */}
    </div>
</div>


<div className="container p-4">
   <h2 className='text-center'>TARA and Security Concept</h2>
   <h4 className='text-center'>Secure your vehicle
   architectures by design</h4>
   <div className="row ">
    <p className='p'>
    Brown Edge Technology performs threat analysis & risk identification, categorization and assessment, supporting the creation of work products, with compliance to the regulation, for vehicle architectures, systems and components. Following the TARA, we define the security concept and goals including suggested mitigations and measures.
    </p>
    <h2 className='text-center'>Security Requirements</h2>
   <h4 className='text-center'>Put your security
   concept into practice</h4>
    <p className="p">
    Once the TARA and the security concept and goals are complete for all vehicle components and systems, Brown Edge Technology drafts and defines the cyber security requirements. These requirements are documented in the Security Requirements Specification and used to develop the security mechanisms.
    </p>

    <div className="row my-5 d-flex justify-content-center  align-items-center">
      <div className="col-md-6">
     <h2>Architecture Review</h2>
     <h5>Final check of your vehicle ecosystem</h5>
     <p className='p'>To help you prepare for type approval, Brown Edge Technology conducts a comprehensive, pre-audit assessment of the planned vehicle’s E/E architecture and connected services infrastructure. We identify any remaining security gaps and suggest practical steps for remediation.</p>
      </div>
      <div className="col-md-6">
      <img src="/c3.png" alt="" style={{width:"100%",height:"300px",borderRadius:"30px"}} />
      </div>
    </div>
    <div className="container p-4">
              {/* <diiv className="row cards-box">
                <div className="col-md-4">
                <div class="card" >
  <img src="/damage.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
    <h4>Minimize financial and reputational damage</h4>
    <p class="card-text">By shortening time to detection of fraudulent activity indicators within software-defined, connected vehicles.</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/Uncover.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Uncover hidden scams in connected cars</h4>
    <p class="card-text">Through the combination of use case engineering and machine learning techniques, powered by  brownedge technology’s SDV cyber security expertise.</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/person-car.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Real-time view of the fleet’s fraud posture</h4>
    <p class="card-text">Continuous data monitoring and analysis present a real-time view of current fraud activity levels.</p>
  </div>
</div>
                </div>
              </diiv> */}
            </div>
    {/* <div className="row">
    <h2 className='text-center'>Leverage Brown Edge Technology ’ vehicle fraud detection expertise</h2>
    <h4 className='text-center'>Across an exponentially growing attack surface</h4>
    <p className='p'>
    Brown Edge Technology  brings together years of comprehensive expertise in fraud detection, helping manufacturers and service providers understand their fraud risk, signs of misuse, and practical next steps for remediation.
    </p>
  
    </div> */}
   </div>
</div>


           

          </div>
        )
      }
    </div>
  )
}

export default Page;
