import React from 'react'
import { FaCheckCircle, FaArrowCircleRight, FaCaretRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';

function Deputysecretaries() {
 return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Deputy Secreatries</button>
                <h1 className='absolute top-14 left-18 text-white'>Deputy Secreatries</h1>
                <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h3 className='w-220 mr-2 pl-18 pt-10 text-orange-500! pb-2'>Deputy Secreatries</h3>
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
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Ms. Monika</a><br />
        Room No: 325<br />
        Extn: No: 325
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604325</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>monika.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Deemed to be University (DU)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Deemed to be University Funded</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Industry Connect</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Innovative</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Public Grievances</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Research and Development Cell</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />RTI (Right To Information Act)</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>2</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Shalini</a><br />
        Room No: 326<br />
        Extn: No: 326
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604326</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>shalini.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Chairs</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Equivalence Cell</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>3</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Vinod Singh Yadav</a><br />
        Room No: 106<br />
        Extn: No: 141
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604141</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>vsyadav.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Computer and Networking Cell</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />E-Governance</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Human Rights Value Education (HRVE)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />ICT</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Institutions of Eminence</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />PARAMARSH</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Pradhan Mantri Uchchatar Shiksha Abhiyan (PM-USHA)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />UGC Website</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>4</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Jitendra</a><br />
        Room No: 422<br />
        Extn: No: 422
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604422</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>jitendra.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />CARE Journals</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Finance</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Integrated Finance Division</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>5</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Megha Kaushik</a><br />
        Room No: F-6<br />
        Extn: No: 701, 731
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604731</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>megha.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Basic Science Research (BSR)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Selection and Awards-I (SA-I)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Selection and Awards-II (SA-II)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Selection and Awards-III (SA-III)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Selection and Awards-IV (SA-IV)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />STRIDE</a>
    </td>
</tr>
<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>6</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Ms. Pooja Bhaumick</a><br />
        Room No: 324<br />
        Extn: No: 324
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604324</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>pooja.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Institutional Development Plan (IDP)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />International Cooperation (IC)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Promotion of Indian Languages (Bhartiya Bhasha)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Science and Research</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Yoga</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>7</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Smita Bidani</a><br />
        Room No: 419<br />
        Extn: No: 429
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604431</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>smitabidani.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Coordination Policy and Planning (CPP-II)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />e-Samadhaan</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />National Eligibility Test (NET)</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>8</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Mriganka Sekhar Sarma</a><br />
        Room No: 423<br />
        Extn: No: 438
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604438</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>mssarma.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Central University (CU)</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>9</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Prashant Dwivedi</a><br />
        Room No: 424<br />
        Extn: No: 424
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604424</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>prashantdwivedi.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Equivalence Cell</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>10</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Salil S.</a><br />
        Room No: 105<br />
        Extn: No: 105
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604105</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>salils.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Distance Education Bureau (ODL and Online)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Social Media</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>11</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Nikhil Kumar</a><br />
        Room No: S-6<br />
        Extn: No: 702, 761
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604761</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>nikhil.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Educational Multimedia Research Center (EMMRCs)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Inter University Center (IUC)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Joint Cadre Review Cell (JCRC)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />National Facilities Center (NFCs)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Parliament</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Pay Scale</a>
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
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Ms. Neethu S. Thulaseedharan
                                    </a><br />
                                    Room No: 101
<br />
                                    Extn: No: 658
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604658</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>neethuthulasi.ugc@gov.in	
</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                   
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

export default Deputysecretaries