import React from 'react'
import Marquee from "react-fast-marquee";

function TopMarquee() {
  return (
    <div>
        <Marquee className='h-14' speed={100} >
  <div className='whitespace-pre'>
 <a  href="https://deemed.ugc.ac.in/" target='_blank' style={{textDecoration:"none",color:"#ff6c3a",fontSize:"18px",fontWeight:"600"}}>Invitation of applications from eligible colleges for Deemed to be University status, may apply on the portal at https://deemed.ugc.ac.in/ </a><a href=" https://aucollege.ugc.ac.in" target='_blank' style={{textDecoration:"none",color:"#ff6c3a",fontSize:"18px",fontWeight:"600"}}>|Invitation of applications from eligible colleges for conferment/extension of Autonomous status, colleges may apply on the portal at https://aucollege.ugc.ac.in                                                                                                                                                                                                                                                                      </a></div>
</Marquee>

    </div>
  )
}

export default TopMarquee





