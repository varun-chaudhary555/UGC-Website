import React from 'react'
import { FaCheckCircle, FaArrowCircleRight, FaCaretRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';

function Educationofficers() {
 return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Education Officers</button>
                <h1 className='absolute top-14 left-18 text-white'>Education Officers</h1>
                <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h3 className='w-220 mr-2 pl-18 pt-10 text-orange-500! pb-2'>Education Officers</h3>
                    <h5 className='w-220 mr-2 pl-18 text-gray-700!'>UGC Main Office, New Delhi</h5>
                    <table className=' ml-18 border border-gray-400'>
                        <thead className='border-b-2!'>
                            <tr>
                                <th className='border-r! text-white bg-orange-500 pl-4! pr-4 py-2 w-14'>S.NO.</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-10 w-40'>Name of the Officer</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-8 w-24'>Contact Number</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-10 w-60'>E-Mail Address</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-8! w-68'>Scheme(s) dealt with</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>1</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Kishor Kumar</a><br />
        Room No: 212<br />
        Extn: No: 212
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604212</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>kkumar.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Secretary Secretariat</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>2</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Ms. Vamsika.C</a><br />
        Room No: 205<br />
        Extn: No: 181
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604181</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>vamsikac.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Equivalence Cell</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>3</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Supriya Dahiya</a><br />
        Room No: 322<br />
        Extn: No: 334
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604334</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>supriya.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Pay Scale</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>4</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Dinesh Chand</a><br />
        Room No: 319<br />
        Extn: No: 319
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604319</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>dineshchand.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Raj Bhasha</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Sanskrit Cell</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>5</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Amit Kumar Verma</a><br />
        Room No: 205<br />
        Extn: No: 205
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604205</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>akverma.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Institutional Development Plan (IDP)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />International Cooperation (IC)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Promotion of Indian Languages (Bhartiya Bhasha)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Science and Research</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Yoga</a>
    </td>
</tr>






                        </tbody>
                    </table>
                    <h5 className='w-220 mr-2 pl-18 text-gray-700! py-2'>UGC Office at 35 Feroz Shah Road, New Delhi</h5>
                    <table className=' ml-18 border border-gray-400'>
                        <thead className='border-b-2!'>
                            <tr>
                                <th className='border-r! text-white bg-orange-500 pl-4! pr-4 py-2 w-14'>S.NO.</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-10 w-40'>Name of the Officer</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-8 w-24'>Contact Number</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-10 w-60'>E-Mail Address</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-8! w-68'>Scheme(s) dealt with</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>1</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Ravindra Kumar</a><br />
        Room No: 205<br />
        Extn: No: 683
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604683</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>ravindrakr.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Task Force (Gender Sensitization)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Task Force(Faculty Shortage)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Women’s Studies
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>2</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Latha KC</a><br />
        Room No: 205<br />
        Extn: No: 693
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604693</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>latha.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Autonomous College
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>3</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Naresh Pal Meena</a><br />
        Room No: 110<br />
        Extn: No: 694
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604694</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>nmeena.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Distance Education Bureau (ODL and Online)
        </a>
    </td>
</tr>



                        </tbody>
                    </table>
                    <h5 className='w-220 mr-2 pl-18 text-gray-700! py-2'>UGC NET Office, South Campus of Delhi University, New Delhi</h5>
                    <table className=' ml-18 border border-gray-400 mb-16'>
                        <thead className='border-b-2!'>
                            <tr>
                                <th className='border-r! text-white bg-orange-500 pl-4! pr-4 py-2 w-14'>S.NO.</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-10 w-40'>Name of the Officer</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-8 w-24'>Contact Number</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-3 pr-10 w-60'>E-Mail Address</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-8! w-68'>Scheme(s) dealt with</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>

                </div>
                <div className='w-94'>
                    <div className='pl-10 pt-16 w-80 mr-60 pr-10 h-98'>
                        <div className='border h-full border-gray-400'>
                            <div className="border-t-4 border-orange-500">
                                <h5 className="pt-4 pl-4 font-semibold">ORGANIZATION</h5>
                                <div className="w-12 ml-4 h-1 bg-orange-500 mt-2"></div>
                                <div>
                                    <Link to="/chairman" style={{ textDecoration: "none" }} className='text-sm mt-4 ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Chairman</Link>
                                    <Link to="/vicechairman" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Vice Chairman</Link>
                                    <Link to="/secretary" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Secretary</Link>
                                    <Link to="/financialadvisor" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Financial Advisior</Link>
                                    <Link to="/jointsecretaries" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Joint Secretaries</Link>
                                    <Link to="/deputysecretaries" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Deputy Secretaries</Link>
                                    <Link to="/undersecretaries" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Under Secretaries</Link>
                                    <Link to="/educationofficers" style={{ textDecoration: "none" }} className='text-sm mt-2.5  ml-4 flex mb-1 text-black hover:text-orange-500! duration-500'><FaArrowCircleRight className='mt-1 mr-1 text-orange-500' />Education Officers</Link>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Educationofficers