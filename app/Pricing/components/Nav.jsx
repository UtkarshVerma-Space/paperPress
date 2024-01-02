import React from "react";
import {Tabs, Tab} from "@nextui-org/react";
import Link from "next/link";

const firstlink = "/"
const secondlink = "/"
const thirdlink = "/"

export default function SubNav(props) {
  return (
    <>
    <div
    style={{marginTop:"50px"}}
    >

    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}} className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" variant="bordered">
        <Tab
          key="Page"
          title={
            <Link href={props.firstlink|| firstlink }>
              <div className="flex items-center space-x-2">
              <span>{props.firstnav}</span>
            </div>
            </Link>
          }
          />
        <Tab
          key="Color"
          title={
            <Link href={props.secondlink|| secondlink }>
              <div className="flex items-center space-x-2">
              <span>{props.secondnav}</span>
            </div>
</Link>
          }
          />
        <Tab
          key="School"
          title={
            <Link href={props.thirdlink || thirdlink }>
              <div className="flex items-center space-x-2">
              <span>{props.thirdnav}</span>
            </div>
            </Link>
          }
          />





      </Tabs>
   
    </div>  
          </div>
          </>
  );
}
