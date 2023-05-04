import React from "react"
import Tools from "./tools.png"
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div style={{height: "100vh",display:'flex', justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <h1 className="header">Website is under construction </h1>
      <br/>
      <Image className="tools" alt="tools" src={Tools}/>
    </div>
    
    </>
  )
}