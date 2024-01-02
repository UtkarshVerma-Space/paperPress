"use client"


import {NextUIProvider} from "@nextui-org/react";


import Navbars from "./nextuicomponents/Navbar/Nav";
import Section1 from "./nextuicomponents/Sections/Section1/Section1";
import Section2 from "./nextuicomponents/Sections/Section2/Section2";
import Alert from "./alet/alert";
import style from "./page.module.css"
export default function Home() {
  return (
<NextUIProvider>
{/* <Alert/> */}
   <Navbars/>
   <Section1
abtstatus="tab"





servicstatus="tab tab-active"

qualstatus="tab"
/>




<h1 className={style.heading}>Our Services</h1>

   <Section2
   
   />

   {/* <Alert/> */}



   
</NextUIProvider>
  )
}
