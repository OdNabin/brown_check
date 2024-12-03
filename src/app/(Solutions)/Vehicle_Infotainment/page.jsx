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
                 Vehicle Infotainment Cyber Guard
                </h1>
              </div>
            </div>

            <div className="container fraud-h my-3" data-aos="fade-up">
              {/* <h2 className='text-center mb-3'>  Fraud Detection</h2> */}
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <h1 className='heading_check'>Brownedgetechnologies in   Vehicle Infotainment Cyber Guard</h1>
                  <h4>Advanced Cyber Security for In-Vehicle Infotainment</h4>
                  <p className='p'>
                  Brownedgetechnologies  In-Vehicle Infotainment Cyber Guard leverages Brownedgetechnologies ’s cutting-edge cyber security products to provide robust and adaptive security for the wide attack surface of IVI systems, ensuring resilience against evolving cyber threats.
                  </p>
                </div>
                <div className="col-md-6">
                <img src="/vehicle.png" style={{ width: "95%", borderRadius: "20px" }} />
                </div>
              </div>
            </div>


            <div className="container p-4">
              <div className='text-center fraud-box'>
               <div className='text-center'>
               <h4 className='mb-4'>
               Why Brownedge Technologies In-Vehicle Infotainment Cyber Guard</h4>
               <h1>Brownedge Technologies’s embedded cyber security technologies address the unique requirements of IVI systems, blending advanced threat detection with system integrity assurance</h1>
               </div>
              </div>
            </div>


            <div className="container p-4">
              <diiv className="row cards-box">
                <div className="col-md-4">
                <div class="card" >
  <img src="/multi-layer.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
    <h4>Multi-Layer Protection</h4>
    <p class="card-text">Layered security for the unique challenges of IVI systems, protecting both the host ECU OS and the network</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/complience.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Regulatory Compliance</h4>
    <p class="card-text">Comply with UNR 155 and other automotive cyber security regulation and industry standards</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/user_exp.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Optimized for Performance</h4>
    <p class="card-text">Efficient resource utilization, preserving system performance and user experience</p>
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
    ASPICE certified and implemented in diverse range of global brands and models production projects
    </p>
    {/* <p className="p">
     brownedge technology Fraud Detection quickly and accurately alerts stakeholders to potential misuse. The solution’s deep analysis capabilities and embedded fraud playbooks help stakeholders take decisive action before the financial consequences escalate and business performance is affected.
    </p> */}

    <div className="row my-5 d-flex justify-content-center  align-items-center">
      <div className="col-md-6">
     <h2>Architecture Compatibility</h2>
     {/* <h5>With scalable, highly automated connected car security</h5> */}
     <p className='p'>Supports various IVI architectures, seamlessly integrating with both current and future systems</p>
      </div>
      <div className="col-md-6">
      <img src="/vision.jpg" alt="" style={{width:"100%",height:"300px",borderRadius:"30px"}} />
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
