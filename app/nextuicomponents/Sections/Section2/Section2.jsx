import style from "./Section2.module.css";
import Image from "next/image";
import Link from "next/link";
import Visiting from "../Assets/visting.jpg";
import Docpng from "../Assets/doc.png";
import Flyers from "../Assets/flyers.jpg";
import Projefile from "../Assets/Project File.png"
export default function Section2() {
  function ReturnServices(props) {
    return (
      <>
        <div className={style.card}>
          <Image src={props.src} />
          <p>{props.quotation}</p>
          <h1>{props.title}</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={style.services}>
<Link href="https://rzp.io/l/kindlecave">
      <ReturnServices
          src={Projefile}
          quotation=" ₹6 Per Page"
          title="FLYERS OR LEAFLETS"
          
          />
          </Link>


      <ReturnServices
          src={Flyers}
          quotation=" ₹2 Per Flyer"
          title="FLYERS OR LEAFLETS"
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
