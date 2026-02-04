import { FaHome, FaPencilAlt } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { BiSolidBank } from "react-icons/bi";
import { IoInformationCircle } from "react-icons/io5";
import { PiNotebookFill } from "react-icons/pi";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link,} from "react-router-dom";


function Navbar() {
    return (
        <div id="main-content">
            <nav className="relative z-10 bg-[#FF6C3A] flex  justify-center h-14  items-center -space-x-4 ">
                <a href="/" style={{ textDecoration: "none" }} className="items-center px-3 py-3 text-base font-medium   hover:bg-gray-200 hover:text-orange-600! text-white flex justify-center transition delay-75"><FaHome className="mr-1 mt-1" />Home</a>
                {/* --------- dropdown----------- */}
                <div className="relative group inline-block">
                    <button className="inline-flex justify-center gap-x-1.5 px-3 py-3 text-sm font-semibold text-white hover:text-orange-600! hover:bg-gray-200 transition delay-75">
                        <IoInformationCircle className="mt-1 -mr-1" />
                        About Us
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 mt-1 -ml-1 size-5" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute hidden group-hover:block z-10 w-72 origin-top divide-y divide-black/20 bg-white outline-black/20 outline-1 outline-offset-1">
                        <div className="py-1">
                            <Link to="/genesis" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium hover:text-orange-500! transition"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" /> Genesis
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/mandate" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Mandate
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/ugcact" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />UGC Act
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/logo" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Logo
                            </Link>
                        </div>
                        <div className="py-1">
                            <a href="/UGC_Organisational_Chart.pdf" target='_blank' style={{textDecoration:"none"}}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />UGC Organisational Chart
                            </a>
                        </div>
                        <div className="py-1">
                            <Link to="/ugcbureaus" style={{ textDecoration: "none" }} target="_blank"
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />UGC Bureaus
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/ugcoffices" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />UGC office
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/interuniversitycentre" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Inter University Centres
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/nationalfacilities" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />National Facilities
                            </Link>
                        </div>
                        <div className="py-1">
                            <a
                                href="/UGC_Certificate.pdf" target="_blank" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Website Security Audit Certificate
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative group inline-block">
                    <button className="inline-flex justify-center gap-x-1.5 px-3 py-3 text-sm font-semibold text-white hover:text-orange-600! hover:bg-gray-200 transition delay-75">
                        <BsBuilding className=" mt-1 -mr-1" />Organizations
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 mt-1 -ml-1 size-5" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute hidden group-hover:block z-10 w-6xl h-72 -ml-58 bg-white outline-black/20 outline-1 outline-offset-1 divide-y divide-black/20">
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="flex pl-4 pt-4 text-xl text-orange-500! font-semibold transition"
                            >
                                Comissions
                            </a>
                            <Link to="/Comissionmember" 
                    
                        
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center px-4 pt-3 text-sm text-black font-medium  transition "
                >
                                <span className="inline-flex items-center hover:text-orange-500!"><FaArrowRightLong className="mr-1 -ml-2" /> Comission Members</span>
                            
                            </Link>
                            <Link to="/comissiondecision" 
                                style={{ textDecoration: "none" }}
                                className="flex items-center px-4 pt-2 pb-28 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden "
                            >
                               <span className="inline-flex items-center hover:text-orange-500!"><FaArrowRightLong className="mr-1 -ml-2" />Comission Decisions</span>
                            </Link>
                        </div>
                        <div>
                            <a
                                href="#" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 pt-3 text-md text-black font-large data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden "
                            >
                             <Link to="chairpersons"> <span className="inline-flex items-center hover:text-orange-500! text-black">Former Chairpersons | Former Vice - Chairpersons | Former Secrataries</span></Link>
                            </a>
                        </div>
                    </div>
                    <div className=" absolute hidden group-hover:block z-10 w-80 ml-30 bg-transparent">
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="flex pl-17 pt-4 text-xl text-orange-500! font-semibold   transition"
                            >
                                Administration
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="flex items-center pl-20 pt-3 text-sm text-black font-medium  transition"
                            >
                                <Link to="chairman"><span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Chairman</span></Link>
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="flex items-center pl-20 pt-2 text-sm text-black  font-medium  transition"
                            >
                               <Link to="vicechairman"> <span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Vice Chairman</span></Link>
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="flex items-center pl-20 pt-2 text-sm text-black font-medium  transition"
                            >
                             <Link to="/secretary"> <span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Secretary</span></Link>  
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="flex items-center pl-20 pt-2 text-sm  text-black font-medium  transition"
                            >
                                <Link to="/financialadvisor">
                                <span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Financial Advisior</span></Link>
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="inline-flex whitespace-nowrap items-center pl-20 pt-2 text-sm text-black font-medium  transition"
                            >
                              <Link to="/additionalsecretaries"><span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Additional Secretaries</span></Link>  
                            </a>
                        </div>
                    </div>
                    <div className="absolute hidden group-hover:block w-80 z-10 ml-130 bg-transparent">
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-20 pt-5 text-sm w-fit  text-black font-medium "
                            >
                             <Link to="/jointsecretaries"> <span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Joint Secretaries </span></Link> 
                            </a>
                        </div>
                        <span>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-20 pt-1 w-fit text-sm  text-black font-medium "
                            >
                             <Link to="/deputysecretaries"> <span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Deputy Secretaries</span></Link>  
                            </a>
                        </span>
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-20 pt-1 text-sm text-black font-medium "
                            >
                             <Link to="/educationofficers">   <span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Education Officers</span></Link>
                            </a>
                        </div>
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-20 pt-1 text-sm text-black font-medium "
                            >
                                <Link to="/undersecretaries">
<span className="inline-flex items-center hover:text-orange-500! text-black"><FaArrowRightLong className="mr-1 -ml-2" /> Under Secretaries</span></Link>
                            </a>
                        </div>
                    </div>
                </div>
                <Link to="/keyinitiative" target="_blank" style={{ textDecoration: "none" }} class="items-center px-3 py-3 text-base font-medium   hover:bg-gray-200 hover:text-orange-600! text-white flex justify-center transition delay-75"><FaPencilAlt className="mr-1" />Key Initatives</Link>
                <Link to="/guidelines" style={{ textDecoration: "none" }} class="items-center px-3 py-3 text-base font-medium   hover:bg-gray-200 hover:text-orange-600! text-white flex justify-center transition delay-75"><IoInformationCircle className="mr-1" />Guidelines</Link>
                <Link to="/regulations" style={{ textDecoration: "none" }} class="items-center px-3 py-3 text-base font-medium   hover:bg-gray-200 hover:text-orange-600! text-white flex justify-center transition delay-75"><TfiMenuAlt className="mr-1" />Regualtions</Link>
                <div className="relative group inline-block">
                    <button className="inline-flex  justify-center gap-x-1.5 px-3 py-3 text-sm font-semibold text-white  hover:text-orange-600! hover:bg-gray-200 transition delay-75">
                        <BsBuilding className="-mr-1 mt-1" />HEIs
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 mt-1 -ml-1 size-5" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute  hidden group-hover:block z-10 w-6xl h-72 -ml-190 bg-white outline-black/20 outline-1 outline-offset-1">
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="flex pl-4 pt-4 text-xl text-orange-500! font-semibold   transition"
                            >
                                Universities
                            </a>
                        </div>
                        <div>
                            <Link to="/universities/centraluniversity"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center px-4 pt-3 hover:text-orange-500! text-base text-black font-normal  transition"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Central Universities
                            </Link>
                        </div>
                        <div>
                            <Link to="/universities/stateuniversities" style={{ textDecoration: "none" }}
                                className="inline-flex items-center px-4 pt-2 text-base text-black font-normal data-focus:bg-white/5 hover:text-orange-500! data-focus:text-white data-focus:outline-hidden"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />State Universities
                            </Link>
                        </div>
                        <div>
                            <Link to="/universities/deemedtobeuniversities" style={{ textDecoration: "none" }}
                                className="inline-flex items-center px-4 pt-2 text-base text-black font-normal data-focus:bg-white/5 hover:text-orange-500! data-focus:text-white data-focus:outline-hidden"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" /> Deemed to be Universities
                            </Link>
                        </div>
                        <div>
                            <Link to="/universities/stateprivateuniversities" style={{ textDecoration: "none" }}
                                className="inline-flex items-center px-4 pt-2 text-base text-black font-normal data-focus:bg-white/5 hover:text-orange-500! data-focus:text-white data-focus:outline-hidden"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" /> State Private Universities
                            </Link>
                        </div>
                        <div>
                            <Link to="/fakeuniversities" style={{ textDecoration: "none" }}
                                className="inline-flex items-center px-4 pt-2 text-base text-black font-normal data-focus:bg-white/5 hover:text-orange-500! data-focus:text-white data-focus:outline-hidden"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" /> Fake Universities
                            </Link>
                        </div>
                    </div>
                    <div className="absolute hidden group-hover:block z-10 -ml-45 bg-transparent">
                        <div >
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="inline-flex pt-4 text-xl text-orange-500! font-semibold   transition px-2"
                            >
                                Institution
                            </a>
                        </div>
                        <div >
                            <a
                                href="https://www.education.gov.in/institutions-national-importance-hi" target="_blank"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-4 pt-3 text-base hover:text-orange-500! text-black font-normal "
                            >
                                <FaArrowRightLong className="mr-1 -mt-4 -ml-2" />Institutions of National <br />Importance
                            </a>
                        </div >
                        <div >
                            <a
                                href="https://ioe.ugc.ac.in/?_gl=1*qohjf2*_ga*MjMxOTE4MjQ2LjE3NjAzNDUwNTY.*_ga_FGHYECNLXB*czE3NjgxMzg3Mjkkbzg0JGcxJHQxNzY4MTQ2ODEyJGo2MCRsMCRoMA..*_ga_Q0MS75D115*czE3NjgxMzg3Mjkkbzg0JGcxJHQxNzY4MTQ2ODEyJGo2MCRsMCRoMA.."
                                target="_blank"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-4 pt-2 hover:text-orange-500! text-base text-black font-normal  transition"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" /> Institutions of Eminence
                            </a>
                        </div>
                    </div>
                    <div className="absolute hidden group-hover:block z-10 -ml-115 bg-transparent">
                        <div >
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="inline-flex pt-4 text-xl text-orange-500! font-semibold   transition px-2"
                            >
                                Colleges
                            </a>
                        </div>
                        <div >
                            <Link to="/colleges"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-4 pt-3 hover:text-orange-500!  text-base text-black font-normal  transition"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" /> Colleges (12(B)/2(f))
                            </Link>
                        </div>
                        <div >
                            <Link to="/autonomouscolleges"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-4 pt-2 hover:text-orange-500! text-base text-black font-normal  transition"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Autonomous Colleges
                            </Link>
                        </div>
                    </div>
                    <div className="absolute hidden group-hover:block z-10 w-80 ml-30 bg-transparent">
                        <div>
                            <a
                                href="#"
                                style={{ textDecoration: "none" }}
                                className="inline-flex pt-4 text-xl text-orange-500! font-semibold   transition px-2"
                            >
                                HEIs Violating Regulations
                            </a>
                        </div>
                        <div>
                            <Link to="/violatingregulations/listoffakeuniversities"
                            target="_blank"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-4 pt-3 text-base hover:text-orange-500! text-black font-normal "
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />List of Fake Universities
                            </Link>
                        </div>
                        <div>
                            <Link to="/violatingregulations/phdregulations"
                            target="_blank"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-4 pt-2 text-base hover:text-orange-500! text-black font-normal  transition"
                            >
                                <FaArrowRightLong className="mr-1 -mt-4 -ml-2" />List of HEIs not Following Ph.D <br /> Regulations
                            </Link>
                        </div>
                        <div>
                            <Link to="/violatingregulations/ombudsperson"
                            target="_blank"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-4 pt-2 text-base hover:text-orange-500! text-black font-normal  transition"
                            >
                                <FaArrowRightLong className="mr-1 -mt-4 -ml-2" /> List of HEIs not appointed  <br /> Ombudsperson
                            </Link>
                        </div>
                        <div>
                            <Link to="/violatingregulations/defaulterstateuniversities"
                            target="_blank"
                                style={{ textDecoration: "none" }}
                                className="inline-flex items-center pl-4 pt-2 text-base  hover:text-orange-500! text-black font-normal  transition"
                            >
                                <FaArrowRightLong className="mr-1 -mt-4 -ml-2" />
                                List of Defaulter State (Private)  <br /> Universities
                            </Link>
                        </div>
                    </div>
                </div>
                <Link to="/fheilist" style={{ textDecoration: "none" }} class="items-center px-3 py-3 text-base font-medium   hover:bg-gray-200 hover:text-orange-600! text-white flex justify-center transition delay-75"><BiSolidBank className="mr-1" />FHEI List  </Link>
                <div className="relative group inline-block">
                    <button className="inline-flex justify-center gap-x-1.5 px-3 py-3 text-sm font-semibold text-white hover:text-orange-600! hover:bg-gray-200 transition delay-75">
                        <PiNotebookFill className="flex items-center mt-1.5 -mr-1" />e-Publications
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 mt-1 -ml-1 size-5" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute hidden group-hover:block z-10 w-68 origin-top divide-y divide-black/20 bg-white outline-black/20 outline-1 outline-offset-1 ">
                        <div className="py-1">
                            <Link to="/ebooks" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden hover:text-orange-500!"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />e-Books
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/annualreports" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white hover:text-orange-500! data-focus:outline-hidden"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Anuual Reports/Annual Accounts
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/pressrelease" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white hover:text-orange-500! data-focus:outline-hidden"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Press Release
                            </Link>
                        </div>
                        <div className="py-1">
                            <Link to="/archivespublication" style={{ textDecoration: "none" }}
                                className="flex items-center px-4 py-2 text-sm text-black font-medium data-focus:bg-white/5 data-focus:text-white hover:text-orange-500! data-focus:outline-hidden"
                            >
                                <FaArrowRightLong className="mr-1 -ml-2" />Archives Publication
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar