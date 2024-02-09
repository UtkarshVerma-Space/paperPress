import style from "./card.module.css"
import Image from "next/image"
export default function ServicesCard(props) {
  return (
    <>
    <div className={style.card}>
      <Image  alt="ran" src={props.src} 
      onClick={props.onclick}
      />
    </div>
  </>
  )
}

