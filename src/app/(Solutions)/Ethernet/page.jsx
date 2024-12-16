"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaHome } from "react-icons/fa";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div style={{ overflow: "hidden" }} className="pad">
      {!loader ? (
        <div className="loaderbox">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {/* Video Section */}
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
            <div
              className="container sec position-absolute top-50 start-50 translate-middle text-center"
              data-aos="fade-up"
            >
              <h1
                style={{ color: "#FFF", fontWeight: "500" }}
                className="about-data"
              >
                Ethernet Switch Protection
              </h1>
            </div>
          </div>

          {/* Description Section */}
          <div className="container fraud-h my-3" data-aos="fade-up">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="heading_check">Ethernet Switch Protection</h1>
                <h4>Automotive Ethernet switch cyber security protection</h4>
                <p className="p">
                  BrownEdge Technology's Ethernet Switch Protection solution
                  helps OEMs and Tier-1 suppliers comply with UNR 155 regulation
                  by providing IDPS and firewall capabilities which meet the
                  AUTOSAR firewall standard.
                </p>
              </div>
              <div className="col-md-6" data-aos="zoom-in">
                <img
                  src="/ethernet.png"
                  style={{ width: "100%", borderRadius: "20px" }}
                />
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="container p-4">
            <div className="row cards-box">
              <div className="col-md-4" data-aos="fade-right">
                <div className="card">
                  <img
                    src="/Hardware.jpg"
                    className="card-img-top"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                    }}
                    alt="Hardware Optimization"
                  />
                  <div className="card-body text-center">
                    <h4>Hardware Optimization</h4>
                    <p className="card-text">
                      Utilizes hardware features for best network performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up">
                <div className="card">
                  <img
                    src="/industry.jpg"
                    className="card-img-top"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                    }}
                    alt="Industry Standards"
                  />
                  <div className="card-body text-center">
                    <h4>Industry Standards</h4>
                    <p className="card-text">
                      Complies with automotive industry standards such as the
                      AUTOSAR firewall specifications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-left">
                <div className="card">
                  <img
                    src="/regulatory.jpg"
                    className="card-img-top"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                    }}
                    alt="Regulatory Compliance"
                  />
                  <div className="card-body text-center">
                    <h4>Regulatory Compliance</h4>
                    <p className="card-text">
                      Comply with UNR 155 and other automotive cyber security
                      regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Ethernet Switch Section */}
          <div className="container p-4">
            <div className="text-center fraud-box" data-aos="fade-up">
              <h4 className="mb-4">WHY ETHERNET SWITCH PROTECTION?</h4>
              <h1>
                BrownEdge is collaborating with leading switch manufacturers
                such as Marvell and NXP for seamless hardware integration.
              </h1>
            </div>
          </div>

          {/* Proven Solution Section */}
          <div className="container p-4">
            <h2 className="text-center" data-aos="fade-up">
              Proven Automotive-Grade Solution
            </h2>
            <div className="row">
              <p className="p" data-aos="fade-right">
                ASPICE certified, and already in use in production projects for
                many global brands and models.
              </p>
              <p className="p" data-aos="fade-left">
                BrownEdge Technology's Fraud Detection quickly and accurately
                alerts stakeholders to potential misuse. The solution’s deep
                analysis capabilities and embedded fraud playbooks help
                stakeholders take decisive action before consequences escalate.
              </p>
            </div>

            {/* Additional Features */}
            <div
              className="row my-5 d-flex justify-content-center align-items-center"
              data-aos="zoom-in"
            >
              <div className="col-md-6">
                <h2>Pre-Integrated in Switch Firmware</h2>
                <p className="p">
                  No integration efforts needed. BrownEdge Technology's Ethernet
                  Switch Protection is already integrated in switch firmware
                  solutions such as EB zoneo SwitchCore Shield.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/switch.jpg"
                  alt="Switch"
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "30px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Final Features Section */}
          <div className="container p-5">
            <div className="row cardss d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-md-4" data-aos="fade-up">
                    <div className="card cards">
                      <div className="card-body text-center">
                        <h4>Deep Packet Inspection</h4>
                        <p className="card-text">
                          Automotive application protocols inspection.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="fade-up">
                    <div className="card cards">
                      <div className="card-body text-center">
                        <h4>Automatic Rule Generation</h4>
                        <p className="card-text">
                          Cyber inspection rules generated based on vehicle
                          system description.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="fade-up">
                    <div className="card cards">
                      <div className="card-body text-center">
                        <h4>Stateful Inspection</h4>
                        <p className="card-text">
                          Track stateful protocol connections and alert or
                          discard state violations.
                        </p>
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

              <div className="col-md-4" data-aos="zoom-in">
                <div className="card">
                  <img
                    src="/cyber.jpg"
                    className="card-img-top"
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                    }}
                    alt="Cyber Security"
                  />
                  <div className="card-body text-center">
                    <h4>Cyber Security Operations</h4>
                    <p className="card-text">
                      Domain expertise and on-call support to stay ahead of
                      evolving threats.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
