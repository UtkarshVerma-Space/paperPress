import style from "./Section1.module.css"
import daisyui from "daisyui";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Section1(props) {
  return (
    <>
    <div 
    className={style.hero}>Prints that define your business.</div>
    <div className={style.hero2}></div>

    <div id={style.tabs} role="tablist" className="tabs tabs-lifted">

    
  <Link href="/Pricing" role="tab" className={props.abtstatus}>Pricing</Link>
  <Link  href="/" role="tab" className={props.servicstatus}>Our Services</Link>
  <Link  href="/Abouts" role="tab" className={props.qualstatus}>About</Link>
</div>
{/* Active : tab tab-active
unactive :  tab  */}
    </>
  )
}
