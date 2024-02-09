import React from "react";
import style from "./Section2.module.css";
import Image from "next/image";
import Link from "next/link";
import ServicesCard from "./components/Card/ServicesCard";


import BlackAndWhite from "../Assets/blackWhte.png"
import ColorFull from "../Assets/colorFull.png"


export default function Section2() {

















  return (
    <>
      <div className={style.services}>
     
<ServicesCard
src={BlackAndWhite}
/>

<ServicesCard
src={ColorFull}
/>            
    







    
      </div>
    </>
  );
}
