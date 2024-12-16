"use client"
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 50,
      easing: 'ease-in-out',
      once: true,
    });
    setLoader(true);
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
              <h1 style={{ color: "#FFF", fontWeight: "500" }} className="about-data">
                Fraud Detection
              </h1>
            </div>
          </div>

          {/* Fraud Detection Section */}
          <div className="container fraud-h my-3" data-aos="fade-up">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6">
                <h1 className="heading_check">Fraud Detection</h1>
                <h4>Automatic fraud detection for connected car security</h4>
                <p className="p">
                  Fraud Detection identifies fraudulent activity in software-defined vehicles to minimize financial and reputational damages to manufacturers and their suppliers.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <img
                  src="/fraud.png"
                  style={{ width: "100%", borderRadius: "20px" }}
                  alt="Fraud Detection"
                />
              </div>
            </div>
          </div>

          {/* Why Fraud Detection Section */}
          <div className="container p-4" data-aos="fade-up">
            <div className="text-center fraud-box">
              <h4 className="mb-4">Why Fraud Detection?</h4>
              <h1>Reduce the risk of fraud in software-defined vehicles</h1>
            </div>
          </div>

          {/* Cards Section */}
          <div className="container p-4">
            <div className="row cards-box">
              {[
                {
                  img: "/damage.jpg",
                  title: "Minimize financial and reputational damage",
                  desc: "Shorten time to detection of fraudulent activity indicators within software-defined, connected vehicles.",
                },
                {
                  img: "/Uncover.jpg",
                  title: "Uncover hidden scams in connected cars",
                  desc: "Combining use case engineering and machine learning techniques, powered by BrownEdge Technology.",
                },
                {
                  img: "/person-car.jpg",
                  title: "Real-time view of the fleet’s fraud posture",
                  desc: "Continuous data monitoring and analysis present a real-time view of current fraud activity levels.",
                },
              ].map((card, index) => (
                <div
                  className="col-md-4"
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 100}`}
                  key={index}
                >
                  <div className="card">
                    <img
                      src={card.img}
                      className="card-img-top"
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                        borderTopRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                      }}
                      alt={card.title}
                    />
                    <div className="card-body text-center">
                      <h4>{card.title}</h4>
                      <p className="card-text">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-Time Insights Section */}
          <div className="container p-4">
            <h2 className="text-center">Monitor and respond to vehicle fraud</h2>
            <h4 className="text-center">Enhance fraud and risk management</h4>
            <div className="row my-5 d-flex justify-content-center align-items-center">
              <div className="col-md-6" data-aos="fade-right">
                <h2>Control your fleet with real-time insights</h2>
                <h5>With scalable, highly automated connected car security</h5>
                <p className="p">
                  The BrownEdge Technology solution provides fraud detection based on pre-built scenarios and deep understanding of our customers’ needs.
                </p>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <img
                  src="/control.jpg"
                  alt="Control"
                  style={{ width: "100%", height: "300px", borderRadius: "30px" }}
                />
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="container p-4">
            <h2 className="text-center">Leverage BrownEdge Technology Expertise</h2>
            <h4 className="text-center">Across an exponentially growing attack surface</h4>
            <p className="p" data-aos="fade-up">
              BrownEdge Technology brings together years of comprehensive expertise in fraud detection, helping manufacturers and service providers understand their fraud risk, signs of misuse, and practical next steps for remediation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
