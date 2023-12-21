import style from "./Section1.module.css"
import daisyui from "daisyui";
export default function Section1() {
  return (
    <>
    <div className={style.hero}>Prints that define your business.</div>
    <div className={style.hero2}></div>

    <div id={style.tabs} role="tablist" className="tabs tabs-lifted">
  <a role="tab" className="tab">About</a>
  <a role="tab" className="tab tab-active">Our Services</a>
  <a role="tab" className="tab">Quality</a>
</div>

    </>
  )
}
