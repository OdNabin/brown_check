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
          UNR 155 and ISO 21434 Cyber Security Compliance for Motorcycles
                </h1>
              </div>
            </div>

            <div className="container fraud-h my-3" data-aos="fade-up">
              {/* <h2 className='text-center mb-3'>  Fraud Detection</h2> */}
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <h1 className='heading_check'>UNR 155 and ISO 21434 Cyber Security Compliance for Motorcycles</h1>
                  <h4>Achieve comprehensive automotive cyber security compliance for your motorcycles, scooters, and electric bicycles with customized processes, and expert guidance</h4>
                  <p className='p'>
                  Brown Edge Technology helps motorcycles, OEMs and Tier 1s establish management systems mandated by UNR 155 or ISO 21434. With Brown Edge Technology CSMS and ISO 21434 consulting services, vehicle type approval support and cyber security maintenance framework, Two-Wheelers OEMs can achieve   comprehensive compliance.
                  </p>
                </div>
                <div className="col-md-6">
                <img src="/um1.png" style={{ width: "100%", borderRadius: "20px" }} />
                </div>
              </div>
            </div>


            <div className="container p-4">
              <div className='text-center fraud-box'>
               <div className='text-center'>
               <h4 className='mb-4'>Why Brown edge technology Compliance?</h4>
               <h1>Your trusted partner in achieving regulatory compliance and type approval, benefiting from our expert guidance, aligned with your goals.</h1>
               </div>
              </div>
            </div>


            <div class="container">
    <h1 class="text-center mb-5">Services Offering</h1>
    <div class="row g-4 d-flex justify-content-center align-items-center">
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>CSMS Consulting
and Compliance
 </h4>
                    <p>Establish a CSMS in compliance with UNR 155 for CSMS compliance support for OEMs</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
    <div class="card-body text-center">
        <img src="/um2.png" alt="Car Image" style={{ width: "100%",height:"200px",objectFit:"cover" }} />
    </div>
</div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>ISO 21434 Consulting
                    and Compliance
                    </h4>
                    <p>ISO 21434 compliance support for Tier 1s</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>Vehicle Type Approval</h4>
                    <p>Prepare your organization for Vehicle Type Approval (VTA)
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>Cyber Security
Maintenance Framework
 </h4>
                    <p>Proven approach for ongoing cyber security

</p>
                </div>
            </div>
        </div>
        {/* <div class="col-lg-4 col-md-6">
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
   <h2 className='text-center'>CSMS Consulting and Compliance for motorcycles</h2>
   <h4 className='text-center'>Meet UNR 155
   compliance requirements</h4>
   <div className="row ">
    <p className='p'>
    Our experts work with OEMs to establish the processes needed to meet CSMS and type approval requirements at the vehicle and ECU levels per UNR 155.  CSMS support includes gap analysis, processes definition and implementation, and pre-audit assessment.
    </p>

    <h2 className='text-center'>ISO 21434 Consulting and Compliance</h2>
   <h4 className='text-center'>Address demands from OEMs
   for ISO 21434 compliance</h4>
    <p className="p">
    Part of the ISO 21434 committee, Brown Edge Technology has deep knowledge of the ISO 21434 regulation. We help Tier 1s analyze and build the required cyber security processes, including support for implementing Cybersecurity Interface Agreements (CIAs) and certification efforts.
    </p>

    <div className="row my-5 d-flex justify-content-center  align-items-center">
      <div className="col-md-6">
     <h2>Vehicle Type Approval</h2>
     <h5>Build your cyber security case the right way</h5>
     <p className='p'>To help OEMs prepare their Cyber Security Case for vehicle type approval audit,  Brown Edge Technology collects and ensures proper documentation of all required evidence (e.g.,CIA agreements, TARA, Vulnerability Management Report, V&R Report) to establish compliance at the vehicle and ECU levels.</p>
      </div>
      <div className="col-md-6">
      <img src="/um3.png" alt="" style={{width:"100%",height:"300px",borderRadius:"30px"}} />
      </div>
    </div>
    <div className="container p-4">
              <diiv className="row cards-box">
                <div className="col-md-4">
                <div class="card" >
  <img src="/um4.png" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
    <h4>Holistic
    understanding</h4>
    <p class="card-text">A deep understanding of the automotive cyber security lifecycle and CSMS processes to cover all your compliance and type approval needs.</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/um5.png" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Comprehensive
  compliance</h4>
    <p class="card-text">Our skilled team of regulatory,  process and E/E architecture experts provide full support for your UNR 155/156 or ISO 21434 compliance project.</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/um6.png" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Regulatory
  experts</h4>
    <p class="card-text">In-depth knowledge and wide experience in UNR 155/156 and ISO 21434 compliance projects, including CSMS certification and vehicle type approval.</p>
  </div>
</div>
                </div>
              </diiv>
            </div>
    <div className="row">
    <h2 className='text-center'>Cyber Security Maintenance Framework</h2>
    <h4 className='text-center'>Maintain cyber security throughout the vehicle lifecycle</h4>
    <p className='p'>
    UNR 155 mandates cyber security maintenance (CSM) throughout the vehicle lifecycle (up to 10 years). Brown Edge Technology supports OEMs in planning and implementing CSM-related tasks such as vulnerability scans, event monitoring, incident response, remediation, and delivery of new release.


    </p>
  
    </div>
   </div>
</div>


           

          </div>
        )
      }
    </div>
  )
}

export default Page;
