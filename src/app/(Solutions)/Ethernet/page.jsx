"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaHome } from "react-icons/fa";
const Page = () => {
  const [loader,setloader] = useState(false)
  useEffect(()=>{
    setloader(true)
  })
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
                  Ethernet Switch Protection
                </h1>
              </div>
            </div>

            <div className="container fraud-h my-3" data-aos="fade-up">
              {/* <h2 className='text-center mb-3'>  Fraud Detection</h2> */}
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <h1 className='heading_check'>Ethernet Switch Protection</h1>
                  <h4>Automotive Ethernet switch
                  cyber security protection</h4>
                  <p className='p'>
                  brownedge technology Ethernet Switch Protection solution helps OEMs and Tier-1 suppliers comply with UNR 155 regulation by providing IDPS and firewall capabilities which meet the AUTOSAR firewall standard.
                  </p>
                </div>
                <div className="col-md-6">
                <img src="/ethernet.png" style={{ width: "100%", borderRadius: "20px" }} />
                </div>
              </div>
            </div>


         


            <div className="container p-4">
              <diiv className="row cards-box">
                <div className="col-md-4">
                <div class="card" >
  <img src="/Hardware.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
    <h4>Hardware optimization</h4>
    <p class="card-text">Utilizes hardware features for best network performance</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/industry.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Industry standards</h4>
    <p class="card-text">Complies with automotive industry standard such as the AUTOSAR firewall specifications</p>
  </div>
</div>
                </div>
                <div className="col-md-4">
                <div class="card" >
                <img src="/regulatory.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
  <div class="card-body text-center">
  <h4>Regulatory compliance</h4>
    <p class="card-text">Comply with UNR 155 and other automotive cyber security regulation and industry standards</p>
  </div>
</div>
                </div>
              </diiv>
            </div>

            <div className="container p-4">
              <div className='text-center fraud-box'>
               <div className='text-center'>
               <h4 className='mb-4'>WHY ETHERNET SWITCH PROTECTION?</h4>
               <h1>Brownedge  is is collaborating with leading switch manufacturers such as Marvell and NXP for seamless hardware integration
               </h1>
               </div>
              </div>
            </div>




<div className="container p-4">
   <h2 className='text-center'>Proven automotive-grade solution</h2>
   {/* <h4 className='text-center'>Enhance fraud and risk management</h4> */}
   <div className="row ">
    <p className='p'>
    ASPICE certified, and already in use in production projects in many different global brands and models
    </p>
    <p className="p">
     brownedge technology Fraud Detection quickly and accurately alerts stakeholders to potential misuse. The solution’s deep analysis capabilities and embedded fraud playbooks help stakeholders take decisive action before the financial consequences escalate and business performance is affected.
    </p>

    <div className="row my-5 d-flex justify-content-center  align-items-center">
      <div className="col-md-6">
     <h2>Pre integrated in switch firmware
     </h2>
     <p className='p'>No integration efforts needed, brownedge technology Ethernet Switch Protection is already integrated in a switch firmware solutions such asEB zoneo SwitchCore Shield</p>
      </div>
      <div className="col-md-6">
      <img src="/switch.jpg" alt="" style={{width:"100%",height:"300px",borderRadius:"30px"}} />
      </div>
    </div>

   
   </div>
</div>
           

          </div>
        )
      }

      <div className="container p-5">
        <div className="row cardss d-flex justify-content-center alignn-items-center">
          <div className="col-md-8">
<div className="row d-flex justify-content-center align-items-center">
  <div className="col-md-4">
  <div class="card cards" >
              
  <div class="card-body text-center " style={{height:"180px"}}>
  <h4>Deep Packet Inspection</h4>
    <p class="card-text">Automotive application protocols inspection</p>
  </div>
</div>
  </div>
  <div className="col-md-4">
  <div class="card cards" >
              
  <div class="card-body text-center" style={{height:"180px"}}>
  <h4>Automatic Rule Generation</h4>
    <p class="card-text">Cyber inspection rules generated based on vehicle system description</p>
  </div>
</div>
  </div>
  <div className="col-md-4">
  <div class="card cards" >
            
  <div class="card-body text-center" style={{height:"180px"}}>
  <h4>Stateful Inspection</h4>
    <p class="card-text">Track stateful protocols’ connections and alert on or discard state violations</p>
  </div>
</div>
  </div>
  <div className="col-md-6 ">
  <div class="card  check" >
            
  <div class="card-body text-center" style={{height:"150px"}}>
  <h4>Ethernet Firewall</h4>
    <p class="card-text">Support AUTOSAR firewall standard features
    and platforms</p>
  </div>
</div>
  </div>
  <div className="col-md-6 ">
  <div class="card  check" >
            
  <div class="card-body text-center" style={{height:"150px"}}>
  <h4>Automotive-grade</h4>
    <p class="card-text">Brownedge Technologies Ethernet IDPS is ASPICE Level 2 certified including the cyber security extension</p>
  </div>
</div>
  </div>
 
</div>
          </div>
          <div className="col-md-4">
                <div class="card" >
                <img src="/cyber.jpg" class="card-img-top" style={{height:"250px",width:"100%",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}} alt="..."/>
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
  )
}

export default Page
