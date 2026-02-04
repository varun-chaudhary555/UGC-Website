import { FaLaptop, FaRegHandPointUp, FaGlobeAsia } from "react-icons/fa";
import { FaGraduationCap, FaUsers } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

function UpperBody() {
    return (
        <div>
            <div className='w-[1260px] h-[230px] bg-[#2e2b41] mt-10 inline-flex'>
                <div className="relative bg-white h-34 w-43 rounded-lg hover:rounded-b-none hover:rounded-tl-none mt-14 ml-18 mr-2 overflow-hidden group">
                    {/* Orange line animation */}
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-[#ff6c3a] -translate-x-full group-hover:translate-x-0 duration-500"></div>

                    {/* Content section */}
                    <Link to="/e-governence" style={{ textDecoration: "none" }}>
                        <div className="duration-500 group-hover:translate-x-1">
                            <FaLaptop className="mx-18 mt-6 h-9 w-9 text-[#ff6c3a]" />
                            <p className="text-center mt-2 text-[#5e5964] font-bold">
                                e-Governance <br /> @UGC
                            </p>
                        </div>
                    </Link>
                </div>

                <Link to="/key-initiatives" style={{ textDecoration: "none" }}>
                    <div className='bg-white relative h-34 w-43 rounded-lg mt-14 mx-2 hover:rounded-b-none hover:rounded-tl-none overflow-hidden group'>
                        <div className=" absolute h-full w-1.5 bg-[#ff6c3a] -translate-x-full group-hover:translate-x-0 left-0 top-0 duration-500"></div>
                        <div className="group-hover:translate-x-1 duration-500">
                            <FaRegHandPointUp className="mx-18 mt-6 h-9 w-9 text-[#ff6c3a]" /><p className="text-center mt-2 text-[#5e5964] font-bold">
                                Key <br /> Initiatives
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/student-corner" style={{ textDecoration: "none" }}>
                    <div className='bg-white relative h-34 w-43 rounded-lg mt-14 mx-2 hover:rounded-b-none hover:rounded-tl-none overflow-hidden group'>
                        {/* Orange line animation */}
                        <div className=" absolute h-full w-1.5 bg-[#ff6c3a] -translate-x-full group-hover:translate-x-0 left-0 top-0 duration-500"></div>
                        <div className="group-hover:translate-x-1 duration-500">
                            <FaGraduationCap className="mx-18 mt-6 h-9 w-9 text-[#ff6c3a]" /><p className="text-center mt-2 text-[#5e5964] font-bold">
                                Student <br /> Corner
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/faculty-corner" style={{ textDecoration: "none" }}>
                    <div className='bg-white relative h-34 w-43 rounded-lg mt-14 mx-2 hover:rounded-b-none hover:rounded-tl-none overflow-hidden group'>
                        {/* Orange line animation */}
                        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#ff6c3a] -translate-x-full group-hover:translate-x-0 duration-500"></div>

                        {/* Content section */}

                        <div className="duration-500 group-hover:translate-x-1">
                            <FaUsers className="mx-18 mt-6 h-9 w-9 text-[#ff6c3a]" /><p className="text-center mt-2 text-[#5e5964] font-bold">
                                Faculty Corner/ <br /> Non-Teaching Staff
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/detailofhei" style={{ textDecoration: "none" }}>
                    <div className='bg-white relative h-34 w-43 rounded-lg mt-14 mx-2 hover:rounded-b-none hover:rounded-tl-none overflow-hidden group'>
                        {/* Orange line animation */}
                        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#ff6c3a] -translate-x-full group-hover:translate-x-0 duration-500"></div>

                        {/* Content section */}
                        <div className="duration-500 group-hover:translate-x-1">
                            <BsBank2 className="mx-18 mt-6 h-9 w-9 text-[#ff6c3a]" /><p className="text-center mt-2 text-[#5e5964] font-bold">
                                Details of <br />HEIs
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/ugcgreeninitiatives" style={{ textDecoration: "none" }}>
                    <div className='bg-white relative h-34 w-43 rounded-lg
                 mt-14 mx-2 hover:rounded-b-none hover:rounded-tl-none overflow-hidden group'>
                        {/* Orange line animation */}
                        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#ff6c3a] -translate-x-full group-hover:translate-x-0 duration-500"></div>

                        {/* Content section */}
                        <div className="duration-500 group-hover:translate-x-1">
                            <FaGlobeAsia className="mx-18 mt-6 h-9 w-9 text-[#ff6c3a]" /><p className="text-center mt-2 text-[#5e5964] font-bold">
                                UGC <br />Green Initiatives
                            </p>
                        </div>


                    </div>
                    </Link>

            </div>
            <Outlet />




        </div>
    )
}

export default UpperBody