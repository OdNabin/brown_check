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
                    Automotive Penetration Testing  
                </h1>
              </div>
            </div>

            <div className="container fraud-h my-3" data-aos="fade-up">
              {/* <h2 className='text-center mb-3'>  Fraud Detection</h2> */}
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <h1 className='heading_check'>  Automotive Penetration Testing</h1>
                  <h4>World-class leaders in automotive
cyber security pentesting, vulnerability
research, and remediation</h4>
                  <p className='p'>
                  PlaxidityX experts identify vulnerabilities in vehicle software and hardware throughout the development lifecycle. Using reverse engineering, code review, fuzz testing and other methods, we perform ECU-level and vehicle-level pentesting as well as Alexa security certifications to help you comply with industry regulations and standards.
                  </p>
                </div>
                <div className="col-md-6">
                <img src="/pent.png" style={{ width: "100%", borderRadius: "20px" }} />
                </div>
              </div>
            </div>


            <div className="container p-4">
              <div className='text-center fraud-box'>
               <div className='text-center'>
               <h4 className='mb-4'>Why Brown edge technology Automotive Penetration Testing?</h4>
               <h1>More than a decade of experience, hundreds of production projects with 100% success rate in penetration testing to strengthen your product’s security posture and comply with regulations</h1>
               </div>
              </div>
            </div>


            <div class="container ox">
    <h1 class="text-center mb-5">Services Offering</h1>
    <div class="row g-4 d-flex justify-content-center align-items-center">
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>ECU-Level
                    Penetration Testing</h4>
                    <p>Strengthen ECU cyber security and comply with regulations</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
    <div class="card-body text-center">
        <img src="/car-por.webp" alt="Car Image" style={{ width: "100%",height:"200px",objectFit:"cover" }} />
    </div>
</div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>Vehicle-Level Penetration Testing
                    </h4>
                    <p>Meet regulatory requirements and prepare for type approval</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <h4>Code Review</h4>
                    <p>Analyze your codebase, identify vulnerabilities and flaws, and remediate
                    </p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6">
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
        </div>
    </div>
</div>


<div className="container p-4">
   <h2 className='text-center'>ECU-Level Penetration Testing</h2>
   <h4 className='text-center'>Meet OEM and regulatory pentesting requirements</h4>
   <div className="row ">
    <p className='p'>
    Leveraging expert knowledge of automotive protocols, HW/SW, networks and interfaces, our ECU-level pentesting identifies and reports vulnerabilities in ECU interfaces, communication channels and security measures. We’ll help you strengthen your ECU cyber security while supporting your compliance process.
    </p>

    <h2 className='text-center'>Vehicle-Level Penetration Testing</h2>
    <h4 className='text-center'>Understand your vehicle’s
    security posture</h4>
    <p className="p">
    Aligned with UNR 155 requirements, vehicle-level pentesting identifies potential threats and vulnerabilities in the vehicle EE architecture that could be exploited to manipulate safety-critical components or break network segregation. This activity assures that OEMs are ready for vehicle type approval.
    </p>

    <div className="row my-5 d-flex justify-content-center  align-items-center">
      <div className="col-md-6">
     <h2>Fuzz Testing</h2>
     <h5>Scalable testing options for
     ECUs and vehicles/systems</h5>
     <p className='p'>PlaxidityX Fuzz testing combines proprietary technology with decades of research to enable automated, scalable and cost-effective pentesting. Our researchers find zero-day vulnerabilities and configuration errors over vehicle networks, protocolsand interfaces, while generating reports for error correction and type approval.</p>
      </div>
      <div className="col-md-6">
      <img src="/fuzz.png" alt="" style={{width:"100%",height:"300px",borderRadius:"30px"}} />
      </div>
    </div>
    <div className="container p-4">
              <diiv className="row cards-box">
                <div className="col-md-4">
                <div class="card" >
  <img src="/s1.png" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
    <h4>Laser-focused on automotive</h4>
    <p class="card-text">A team of automotive cyber security experts with extensive knowledge of ECUs, automotive use cases, standards and protocols.</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/s2.png" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Experience you
  can rely on</h4>
    <p class="card-text">Proven track record of 100% successful penetration testing projects for leading vehicle manufacturers and Tier 1s at the ECU and vehicle level.</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/s3.png" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>One-stop-shop
  security offering</h4>
    <p class="card-text">Full suite of services to meet all your pentesting needs, as well as other V-model cyber security activities.</p>
  </div>
</div>
                </div>
              </diiv>
            </div>
    <div className="row">
    <h2 className='text-center'>Amazon Alexa Certification</h2>
    <h4 className='text-center'>Enabling Alexa Voice Services (AVS) for OEMs</h4>
    <p className='p'>
    As an Amazon-certified security lab for Alexa integration, PlaxidityX conducts security assessments tailored to the AVS security requirements. We analyze and score your integration against each requirement, and prepare your report for submission to Amazon.
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
