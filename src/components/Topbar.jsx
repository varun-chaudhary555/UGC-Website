import { FaArrowUp, FaArrowDown, FaHome, FaSearch } from "react-icons/fa";
import { GiSpeaker } from "react-icons/gi";
import { RxDash } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";


function Topbar() {
    const[textsize,settextsize]=useState(16)

    const getTextSizeClass = () => {
    if (textsize <= 12) return "text-xs";
    if (textsize <= 14) return "text-sm";
    if (textsize <= 16) return "text-base";
    if (textsize <= 20) return "text-lg";
    if (textsize <= 24) return "text-xl";
    if (textsize <= 28) return "text-2xl";
    return "text-3xl";
  };
    return (
        <div className={getTextSizeClass() + " text-white"}>
            <nav className="relative bg-[#3d344b] flex justify-center h-7  items-center">
                        <a href="#" aria-current="page" className="flex items-center rounded-md ml-16  py-1 text-sm font-medium text-white hover:text-orange-600"><FaHome className="text-orange-500" /><span className="ml-3">|</span></a>
                        <a href="#main_content" aria-current="page" style={{textDecoration:"none"}} className="flex items-center rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600 "><FaArrowDown className="mr-1 ml-1" />Skip to main content <span className="ml-1 mr-2">|</span></a>
                        <a href="#main-content" style={{textDecoration:"none"}}  className="flex items-center rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600 no-underline"><FaArrowUp className="mr-1" />Skip to Navigation   <span className="ml-1 mr-2">|</span></a>
                        <Link to="/screenreader" style={{textDecoration:"none"}} className="flex items-center rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600"><GiSpeaker className="mr-1" />Screen Reader   <span className="ml-1 mr-2">|</span></Link>
                        <a href="#" style={{textDecoration:"none"}} className="rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600 mr-4">Text Size:</a>
                        <button className="flex items-center rounded-md  py-1 font-medium text-white hover:text-orange-600 mr-1" onClick={()=>settextsize(textsize-2)}>A<RxDash className="-ml-1" /></button>
                        <a href="#" style={{textDecoration:"none"}} className="rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600 mr-3" >A</a>
                        <button className="flex items-center rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600 mr-3" onClick={()=>settextsize(textsize+2)}>A<IoIosAdd className="-ml-1 -mt-1"/></button>
                        <a href="#" style={{textDecoration:"none"}} className="rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600">Hindi   <span className="ml-1 mr-1">|</span></a>
                        <Link to="/contactus" style={{textDecoration:"none"}} className="rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600">Contact Us   <span className="ml-1 mr-2">|</span></Link>
                        <Link to="/faqs" style={{textDecoration:"none"}} className="rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600">FAQs   <span className="ml-1 mr-2">|</span></Link>
                        <a href="https://eprocure.gov.in/eprocure/app" target="_blank" style={{textDecoration:"none"}} className="rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600">e-Procurement   <span className="ml-1 mr-2">|</span></a>
                        <Link to="/tenders" style={{textDecoration:"none"}} className="rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600">Tenders   <span className="ml-1 mr-2">|</span></Link>
                        <Link to="/jobs" style={{textDecoration:"none"}} className="rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600">Jobs   <span className="ml-1 mr-2">|</span></Link>
                        <Link to="/search" style={{textDecoration:"none"}} className="flex items-center rounded-md  py-1 text-sm font-medium text-white hover:text-orange-600"><FaSearch /><span className="ml-1 mr-2">|</span></Link>
            </nav>
        </div>
    )
}

export default Topbar