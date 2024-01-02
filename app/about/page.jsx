"use client"

import React from 'react'
import Section1 from '../nextuicomponents/Sections/Section1/Section1'

import Navbars from '../nextuicomponents/Navbar/Nav'

import SubNav from '../Pricing/components/Nav'

import style from "./abouts.module.css"

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";



export default function About() {
  return (
<>


<Navbars/>
<Section1
abtstatus="tab "

servicstatus="tab"

qualstatus="tab tab-active"
/>


<div className={style.main}>

<h1 className={style.heading}>How We Work?</h1>


<SubNav
firstnav="Shipping"
secondnav="Privacy"
thirdnav="Refund"
thirdlink="/About/refund"
/>




<div style={{
  margin:"70px 20px  20px 20px"
}
}>

<Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Ayush Singh</TableCell>
          <TableCell>Co-Founder & CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Utkarsh Verma</TableCell>
          <TableCell>Co-Founder & CTO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        
      </TableBody>
    </Table>

</div>



</div>


<div className={style.wrapper}>
<div className={style.container}>

{/* <h1>About Us</h1> */}
<p>Welcome to paperPress, your premier destination for hassle free, high-quality print-on-demand services. We understand the importance of bringing your ideas to life, whether it&apos;s through custom school project files, eye-catching business cards, impactful posters, or effective marketing materials. At PaperPress, we&apos;re not just a printing service; we are your creative partner.</p>

<h2>Our Services:</h2>
<p>Print on Demand: Embrace the freedom of on-demand printing. Whether it is a personal project or a business requirement, we empower you to print only what you need when you need it. No more excess inventory or storage hassles.</p>

<p>
School Project File Design and Print: Elevate your school projects with our dedicated design and printing services. Our professional designers ensure that your project files are not just informative but visually appealing, leaving a lasting impression.  
</p>


<p>Home Delivery: Convenience is key. We take care of the entire process, from design to delivery. Sit back, relax, and let PaperPress bring your creations right to your doorstep.</p>


<p>Visiting Cards: Make a memorable first impression with our custom-designed visiting cards. Our printing quality ensures that your contact information stands out, leaving a lasting impact on potential clients and associates.</p>

<p>Posters and Marketing Materials: Whether you're promoting an event, product, or service, our posters and marketing materials are crafted to captivate your audience. Let your message shine with paperPress.</p>

<h2>Why Choose PaperPress:</h2>
<li>Quality Assurance: We believe in delivering nothing but the best. Our state-of-the-art printing technology guarantees sharp, vibrant, and professional results every time.</li>

<li>Professional Designers: Our team of experienced designers is here to transform your ideas into visually stunning creations. From concept to completion, we've got you covered.</li>

<li>Customer-Centric Approach: Your satisfaction is our priority. We value your time, ideas, and feedback. Our customer support team is always ready to assist you throughout the process.</li>





<h2>Join the PaperPress family and experience the ease of online print-on-demand services like never before. Your vision, our expertise – together, we make it happen.</h2>

<p>Have questions, feedback, or special requests? We&apos;re here for you. Feel free to reach out to our dedicated support team, who will assist you with any queries you may have.</p>
<p>Thank you for choosing paperPress as your trusted educational partner. We look forward to supporting you on your academic journey.</p>


</div>
</div>




</>
    )
}
