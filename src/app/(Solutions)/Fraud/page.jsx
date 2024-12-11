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
                    Fraud Detection
                </h1>
              </div>
            </div>

            <div className="container fraud-h my-3" data-aos="fade-up">
              {/* <h2 className='text-center mb-3'>  Fraud Detection</h2> */}
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <h1 className='heading_check'>  Fraud Detection</h1>
                  <h4>Automatic fraud detection for connected car security</h4>
                  <p className='p'>
                    Fraud Detection identifies fraudulent activity in software-defined vehicles to minimize financial and reputational damages to manufacturers and their suppliers.
                  </p>
                </div>
                <div className="col-md-6">
                <img src="/fraud.png" style={{ width: "100%", borderRadius: "20px" }} />
                </div>
              </div>
            </div>


            <div className="container p-4">
              <div className='text-center fraud-box'>
               <div className='text-center'>
               <h4 className='mb-4'>Why Fraud Detection?</h4>
               <h1>Reduce the risk of fraud in software-defined vehicles</h1>
               </div>
              </div>
            </div>


            <div className="container p-4">
              <diiv className="row cards-box">
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
              </diiv>
            </div>


<div className="container p-4">
   <h2 className='text-center'>Monitor and respond to vehicle fraud</h2>
   <h4 className='text-center'>Enhance fraud and risk management</h4>
   <div className="row ">
    <p className='p'>
    The potential for vehicle related fraud is constantly increasing, with the growth of software-defined vehicles on the road. Using  brownedge technology’s advanced algorithms and heuristics, stakeholders can pinpoint suspicious behaviors that point to warranty fraud, petrol theft, identification fraud, car theft and more.
    </p>
    <p className="p">
     brownedge technology Fraud Detection quickly and accurately alerts stakeholders to potential misuse. The solution’s deep analysis capabilities and embedded fraud playbooks help stakeholders take decisive action before the financial consequences escalate and business performance is affected.
    </p>

    <div className="row my-5 d-flex justify-content-center  align-items-center">
      <div className="col-md-6">
     <h2>Control your fleet with real-time insights</h2>
     <h5>With scalable, highly automated connected car security</h5>
     <p className='p'>The Brown Edge Technology  solution provides fraud detection based on pre-built scenarios and deep understanding of our customers’ needs. Data is ingested and analyzed in real-time to correlate with pre-built rules and investigation scenarios. Real-time alerts and notifications are sent out as needed. Best practices and playbooks are available in order to resolve the detected cases quickly and efficiently.</p>
      </div>
      <div className="col-md-6">
      <img src="/control.jpg" alt="" style={{width:"100%",height:"300px",borderRadius:"30px"}} />
      </div>
    </div>

    <div className="row">
    <h2 className='text-center'>Leverage Brown Edge Technology ’ vehicle fraud detection expertise</h2>
    <h4 className='text-center'>Across an exponentially growing attack surface</h4>
    <p className='p'>
    Brown Edge Technology  brings together years of comprehensive expertise in fraud detection, helping manufacturers and service providers understand their fraud risk, signs of misuse, and practical next steps for remediation.
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
