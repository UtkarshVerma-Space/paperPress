"use client"

import React from 'react'
import Section1 from '../nextuicomponents/Sections/Section1/Section1'

import Navbars from '../nextuicomponents/Navbar/Nav'
import SubNav from './components/Nav'
import style from "./pricing.module.css"
export default function page() {
  return (
<>


<Navbars/>
<Section1
abtstatus="tab tab-active"

servicstatus="tab"

qualstatus="tab"
/>



<h1 className={style.heading}>Pricing</h1>


<div className={style.main}>

<SubNav
firstnav="Normal Print"
secondnav="Color Print"
thirdnav="School Project"


/>



</div>

</>
    )
}
