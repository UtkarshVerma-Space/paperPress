"use client"
import React from 'react'
import style from "./refund.module.css"
import Navbars from '@/app/nextuicomponents/Navbar/Nav'
import Section1 from '@/app/nextuicomponents/Sections/Section1/Section1'
import SubNav from '@/app/Pricing/components/Nav'
import Link from 'next/link'



export default function page() {
  return (
<>
<Navbars/>
<Section1
abtstatus="tab "

servicstatus="tab"

qualstatus="tab tab-active"
/>
<div className={style.wrapper}>
<SubNav

firstnav="Shipping"
secondnav="Privacy"
thirdnav="Refund"
firstlink="/"
/>

      <div className={style.container}>

        <h1>RETURN POLICY</h1>
        <h2>Last updated October 30, 2023</h2>

        <p>Thank you for your purcnase. We nope you are nappy with your purcnase. However, if you are not completely satisfied with your purchase for any reason, you may return it to us for a full refund, store credit, or an exchange. Please see below for more information on our return policy.</p>

<h3>RETURNS</h3>
<p>All returns must be postmarked Within seven 7 days of the purcnase date. All returned items must be in new and unused condition, with all original tags and labels attached</p>

<h3>RETURN PROCESS</h3>
<p>To return an item, please email customer service at contactutkarshverma@proton.me to obtain a
Return Mercnandise Authorization RMA number. After receiving a RMA number, Place the item
securely in its original packaging and include your proof of purchase, then mail your return to the
following address:
<br /> <hr />
kindlecave_store | Call or Contact for retum
<br /> <hr />

Attn: Returns
RMA#
Awas Vikas Colony, Phase3, Khaira, Gonda, const [first, setfirst] = useState(second)ttar Pradesh 271001
<br /> <hr />

contactutkarshverma@proton.me
<br /> <hr />

Gonda, Uttar Pradesh 271001
<br /> <hr />

India
<br /> <hr />

You may also use the prepaid shipping label enclosed with your package. Return shipping charges
will be paid or reimbursed by us.</p>

<h3>REFUNDS</h3>
<p>After receiving your return and inspecting the condition of your item, we will process your return or
exchange. Please allow at least seven 7 days trom the receipt of your item to process your return
or exchange. Refunds may take 1-2 billing cycles to appear on your credit card statement,
depending on your credit card company. We will notity you by email when your retum has been
processed.</p>

<h3>EXCEPTIONS</h3>
<p>The following items cannot be returned or exchanged:
    <li>Printed Notes</li>
    <li>Printed PDFs Books</li>
    <li>Customized Clothes</li>
    <li>Customized Notebooks</li>
    <li>Customized Books</li>
    <li>Visiting Card | or any other customized marketing material or any customization done on any product .</li>
    <p>For defective or damaged products, please contact us at the contact details below to arrange a
refund or exchange.</p>
</p>

<h3>QUESTIONES</h3>
<p>If you have any questions concerning our return policy, please contact us at:
    <li>
7985748915
    </li>
<li>contactutkarshverma@proton.me
</li></p>
    </div>
    </div>
</>

  )
}