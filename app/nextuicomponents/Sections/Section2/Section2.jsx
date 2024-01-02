import React from "react";
import style from "./Section2.module.css";
import Image from "next/image";
import Link from "next/link";
import Visiting from "../Assets/visting.jpg";
import Docpng from "../Assets/doc.png";
import Flyers from "../Assets/flyers.jpg";
import Projefile from "../Assets/Project File22.png"
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
        <Image  alt="ran" src={props.src} 
        onClick={props.onclick}
        />
        {/* <p>{props.quotation}</p>
        <h1>{props.title}</h1>
        <button 
        key={props.keya}
        onClick={props.onclick}
        >SELCET THIS SERVICE</button> */}
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
          quotation=" ₹8.0 Per Page"
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
                <h1 style={{fontSize:"20px", fontWeight:"900",color:"white", backgroundColor:"#0e131a", textAlign:"center", borderRadius:"12px 12px 12px 12px", padding:"10px",fontWeight:"600"}}>
                  <h1
                  style={{
marginTop:"50px", marginBottom:"-30px"
                  }}
                  
                  >

                  Print Procedure
                  </h1>
              {/* Temprory */}

              <section >
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">UPLOAD YOUR DOCUMENT</h2>
          
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">MAKE PAYMENT</h2>
            
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">PRINT</h2>
          
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">DELIVER</h2>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">FINISH</h2>
          
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>
              
              {/* Temprory */}

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
            <td class="px-4 py-3">₹8.0 Per Page</td>

          </tr>
  
        </tbody>
      </table>
    </div>

  </div>
</section>


          <div className={style.divpay}>
            <h1>₹ 8 / Per Page Print &quot;We Will handle everything from design to print to delivery at doorstep.&quot;</h1>
                
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
