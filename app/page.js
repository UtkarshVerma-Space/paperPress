"use client"


import {NextUIProvider} from "@nextui-org/react";


import Navbars from "./nextuicomponents/Navbar/Nav";
import Section1 from "./nextuicomponents/Sections/Section1/Section1";
import Section2 from "./nextuicomponents/Sections/Section2/Section2";


export default function Home() {
  return (

<NextUIProvider>
   <Navbars/>
   <Section1
abtstatus="tab"

servicstatus="tab tab-active"

qualstatus="tab"
/>
   <Section2/>



   
</NextUIProvider>
  )
}
