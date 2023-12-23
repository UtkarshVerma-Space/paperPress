import React from "react";
import style from "./Section2.module.css";
import Image from "next/image";
import Link from "next/link";
import Visiting from "../Assets/visting.jpg";
import Docpng from "../Assets/doc.png";
import Flyers from "../Assets/flyers.jpg";
import Projefile from "../Assets/Project File.png"
// Temprory
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
// Temprory


export default function Section2() {

// Temprory
const {isOpen, onOpen, onClose} = useDisclosure();
const [size, setSize] = React.useState('md')
const [scrollBehavior, setScrollBehavior] = React.useState("inside");
const sizes = ["full"];


const handleOpen = (size) => {
  setSize(size)
  onOpen();
}
// Temprory










  function ReturnServices(props) {
    return (
      <>
        <div className={style.card}>
          <Image alt="ran" src={props.src} />
          <p>{props.quotation}</p>
          <h1>{props.title}</h1>
          <button 
          key={props.keya}
          onClick={props.onclick}
          >SELCET THIS SERVICE</button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={style.services}>
     


            
     

{/* // Temprory */}

<div className="flex flex-wrap gap-3">
        {sizes.map((size) => (

          
    <ReturnServices
          src={Projefile}
          quotation=" ₹7.1 Per Page"
          title="SCHOOL PROJECT FILE"
          key={size} 
          onclick={() => handleOpen(size)}
          keys={size}
          />
          
        ))}  
      </div>

      <Modal 
        size={size} 
        isOpen={isOpen} 
        onClose={onClose}
        scrollBehavior={scrollBehavior}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">School Project File Print &quot;A4&quot;</ModalHeader>
              <ModalBody>
              <Image alt="hkj"className={style.Modalmage}  src={Projefile} />

                <p> 
                <h1 style={{fontSize:"25px", color:"white", backgroundColor:"#0e131a", textAlign:"center", borderRadius:"12px 12px 12px 12px", padding:"10px",fontWeight:"300"}}>
                  Project File Design and Print
                  <p style={{fontSize:"15px", textAlign:"justify", marginTop:"10px", padding:"10px",color:"white", fontWeight:"300"}}>After making the payment, our team will reach out to you. They will request the project file in PDF format. If you already have one, great! If not, no worries! We can design one for you. Once the design is ready, we will ensure it's of the highest quality. Finally, we'll deliver your school project file straight to your home. This way, you can focus on your studies while we take care of bringing your project to life.</p>
                  </h1>
                </p>

<div className={style.statsu}>

                <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">

    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Info</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Quality</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Design</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Page</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
          </tr>
          
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">A4 Page</td>
            <td class="px-4 py-3">Color</td>
            <td class="px-4 py-3">You or Designed By Professionals (Us)</td>
            <td class="px-4 py-3">100GSM</td>
            <td class="px-4 py-3">₹7.1 Per Page</td>

          </tr>
          <tr>
            <td class="px-4 py-3">Standard</td>
            <td class="px-4 py-3">Best Quality</td>
            <td class="px-4 py-3">Free</td>
            <td class="px-4 py-3">Best</td>
            <td class="px-4 py-3">Quality First</td>

          </tr>
        </tbody>
      </table>
    </div>

  </div>
</section>


          <div className={style.divpay}>
            <h1>₹ 6 / Per Page Print &quot;We Will handle everything from design to print to delivery at doorstep.&quot;</h1>
                
                <button className={style.pay}>
                <Link href="https://rzp.io/l/4ISnONfDDX">
                  Pay | Design and Print 
                </Link>
                  </button>
          </div>

          </div>
                
              </ModalBody>
            
            </>
          )}
        </ModalContent>
      </Modal>


      {/* // Temprory */}

      
      
      
      








    
      </div>
    </>
  );
}
