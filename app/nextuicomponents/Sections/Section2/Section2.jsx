import style from "./Section2.module.css";
import Image from "next/image";
import Link from "next/link";
import Visiting from "../Assets/visting.jpg";
import Docpng from "../Assets/doc.png";
import Flyers from "../Assets/flyers.jpg";
import Projefile from "../Assets/Project File1.png"
export default function Section2() {
  function ReturnServices(props) {
    return (
      <>
        <div className={style.card}>
          <Image  src={props.src} />
          <p>{props.quotation}</p>
          <h1>{props.title}</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={style.services}>
     


      <ReturnServices
          src={Projefile}
          quotation=" ₹6 Per Page"
          title="SCHOOL PROJECT FILE"
          />

        <ReturnServices
          src={Visiting}
          quotation=" ₹2 Per Card"
          title="Visiting Card"
        />

        <ReturnServices
          src={Docpng}
          quotation=" ₹0.5 Per Page"
          title="Document / Paper Printing"
        />

    
      </div>
    </>
  );
}
