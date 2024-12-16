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
                  src="/cm.mp4"
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
                 Zone Control Unit Protection
                </h1>
              </div>
            </div>

            <div className="container fraud-h my-3" data-aos="fade-up">
              {/* <h2 className='text-center mb-3'>  Fraud Detection</h2> */}
              <div className="row d-flex justify-content-evenly align-items-center">
                <div className="col-md-6">
                  <h1 className='heading_check'>Brown Edge Technology Zone Control Unit Protection</h1>
                  <h4>Automotive zone control unit
                  cyber security</h4>
                  <p className='p'>
                  Brown edge Technology Zone Control Unit Protection is a key element in UNR 155 regulatory compliance, adding intrusion detection and firewall protection to zone controllers.
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-evenly align-items-center">
                <img src="/zonecontrol.png" style={{ width: "60%", borderRadius: "20px" }} />
                </div>
              </div>
            </div>


            <div className="container p-4">
              <div className='text-center fraud-box'>
               <div className='text-center'>
               <h4 className='mb-4'>
               Why Brownedge Technologies ZONE CONTROL UNIT PROTECTION?</h4>
               <h1>Brownedge Technologies’s is the world leader in automotive cyber security, with proven technology for end-to-end zonal protection</h1>
               </div>
              </div>
            </div>


            <div className="container p-4">
              <diiv className="row cards-box">
                <div className="col-md-4">
                <div class="card" >
  <img src="/fraudcyber.webp" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
    <h4>Full cyber protection</h4>
    <p class="card-text">Protects both the zone controller itself and its connected networks</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/carprotection.webp" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Meets Industry standards</h4>
    <p class="card-text">High security posture leveraging industry standards such as the AUTOSAR firewall specifications</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/regularity.webp" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Regulatory compliance</h4>
    <p class="card-text">Comply with UNR 155 and other automotive cyber security regulation and industry standards</p>
  </div>
</div>
                </div>
              </diiv>
            </div>


<div className="container p-4">
   <h2 className='text-center'>Proven Automotive-grade Solution
   </h2>
   {/* <h4 className='text-center'>Enhance fraud and risk management</h4> */}
   <div className="row ">
    <p className='p text-center'>
    ASPICE certified, and already in use in production projects in many different global brands and models
    </p>
    {/* <p className="p">
     brownedge technology Fraud Detection quickly and accurately alerts stakeholders to potential misuse. The solution’s deep analysis capabilities and embedded fraud playbooks help stakeholders take decisive action before the financial consequences escalate and business performance is affected.
    </p> */}

    <div className="row my-5 d-flex justify-content-center  align-items-center">
      <div className="col-md-6">
     <h2>Automatic configuration and validation</h2>
     {/* <h5>With scalable, highly automated connected car security</h5> */}
     <p className='p'>Brown edge Technology has made integration cheaper, simpler, and repeatable.</p>
      </div>
      <div className="col-md-6">
      <img src="/car.webp" alt="" style={{width:"100%",height:"300px",borderRadius:"30px"}} />
      </div>
    </div>

   {/* <div className="container">
 <div className="row">
 <div className="col-md-4">
     <div className="container">
      <div className="row d-grid">
      <div className="col-md-6 w-100">
                <div class="card" >
                <img src="https://img.freepik.com/free-vector/internet-things-iot-smart-connection-control-device-network-industry-resident-anywhere-anytime-anybody-any-business-with-internet-it-technology-futuristic-world_1150-61164.jpg?t=st=1731859518~exp=1731863118~hmac=90c1651e0e4bdc3bef342b87c112dba54c2bb4f440ed22e962366453beca936e&w=996" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Cyber Security
  Operations</h4>
    <p class="card-text">Domain expertise and on-call support to stay ahead of evolving threats to software-defined vehicle</p>
  </div>
</div>
                </div>
                <div className="col-md-6 w-100">
                <div class="card" >
                <img src="https://img.freepik.com/free-vector/internet-things-iot-smart-connection-control-device-network-industry-resident-anywhere-anytime-anybody-any-business-with-internet-it-technology-futuristic-world_1150-61164.jpg?t=st=1731859518~exp=1731863118~hmac=90c1651e0e4bdc3bef342b87c112dba54c2bb4f440ed22e962366453beca936e&w=996" class="card-img-top" style={{height:"100px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Cyber Security
  Operations</h4>
    <p class="card-text">Domain expertise and on-call support to stay ahead of evolving threats to software-defined vehicle</p>
  </div>
</div>
                </div>
      </div>
     </div>
    </div>
    <div className="col-md-4">
    <div className="row d-grid">
      <div className="col-md-6 w-100">
                <div class="card" >
                <img src="https://img.freepik.com/free-vector/internet-things-iot-smart-connection-control-device-network-industry-resident-anywhere-anytime-anybody-any-business-with-internet-it-technology-futuristic-world_1150-61164.jpg?t=st=1731859518~exp=1731863118~hmac=90c1651e0e4bdc3bef342b87c112dba54c2bb4f440ed22e962366453beca936e&w=996" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Cyber Security
  Operations</h4>
    <p class="card-text">Domain expertise and on-call support to stay ahead of evolving threats to software-defined vehicle</p>
  </div>
</div>
                </div>
                <div className="col-md-6 w-100">
                <div class="card" >
                <img src="https://img.freepik.com/free-vector/internet-things-iot-smart-connection-control-device-network-industry-resident-anywhere-anytime-anybody-any-business-with-internet-it-technology-futuristic-world_1150-61164.jpg?t=st=1731859518~exp=1731863118~hmac=90c1651e0e4bdc3bef342b87c112dba54c2bb4f440ed22e962366453beca936e&w=996" class="card-img-top" style={{height:"100px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Cyber Security
  Operations</h4>
    <p class="card-text">Domain expertise and on-call support to stay ahead of evolving threats to software-defined vehicle</p>
  </div>
</div>
                </div>
      </div>
    </div>
    <div className="col-md-4">
    <div className="row d-grid">
      <div className="col-md-6 w-100">
                <div class="card" >
                <img src="https://img.freepik.com/free-vector/internet-things-iot-smart-connection-control-device-network-industry-resident-anywhere-anytime-anybody-any-business-with-internet-it-technology-futuristic-world_1150-61164.jpg?t=st=1731859518~exp=1731863118~hmac=90c1651e0e4bdc3bef342b87c112dba54c2bb4f440ed22e962366453beca936e&w=996" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Cyber Security
  Operations</h4>
    <p class="card-text">Domain expertise and on-call support to stay ahead of evolving threats to software-defined vehicle</p>
  </div>
</div>
                </div>
                <div className="col-md-6 w-100">
                <div class="card" >
                <img src="https://img.freepik.com/free-vector/internet-things-iot-smart-connection-control-device-network-industry-resident-anywhere-anytime-anybody-any-business-with-internet-it-technology-futuristic-world_1150-61164.jpg?t=st=1731859518~exp=1731863118~hmac=90c1651e0e4bdc3bef342b87c112dba54c2bb4f440ed22e962366453beca936e&w=996" class="card-img-top" style={{height:"100px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Cyber Security
  Operations</h4>
    <p class="card-text">Domain expertise and on-call support to stay ahead of evolving threats to software-defined vehicle</p>
  </div>
</div>
                </div>
      </div>
    </div>
 </div>
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
