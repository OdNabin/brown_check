"use client"
import { useEffect, useState } from "react";
import Blogs from "./compoents/Blogs";
import HeroSection from "./compoents/HeroSection";
import Offering from "./compoents/Offering";
import Services from "./compoents/Services";
import { DiVim } from "react-icons/di";

export default function Home() {
  const [loader,setloader] = useState(false)
  useEffect(()=>{
    setloader(true)
  })
  return (
  <div>
   {
    !loader? <div className="loaderbox">
      <div className="loader"></div>
    </div> : <>
    <HeroSection />

    <br />
    <br />
    <Offering />
    <br />
    <br />
    <Services />
    <br />
    <br />

    <div
      className="container"
      style={{
        borderTop: "8px solid #964B00",
        backgroundColor: "#FFF",
        borderRadius: "25px",
        boxShadow:
          "0 1px 2px rgba(32, 33, 36, 0.15), 0 1px 8px rgba(32, 33, 36, 0.08)",
        position: "relative",
        height: "auto",
        left: "0px",
      }}
    >
      <Blogs />
    </div>
    <br />
    <br />
  </>
   }
  </div>
  );
}