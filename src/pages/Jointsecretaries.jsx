import React from 'react'
import { FaCheckCircle, FaArrowCircleRight, FaCaretRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';


function Jointsecretaries() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Joint Secreatries</button>
                <h1 className='absolute top-14 left-18 text-white'>Joint Secreatries</h1>
                <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h3 className='w-220 mr-2 pl-18 pt-10 text-orange-500! pb-2'>Joint Secreatries</h3>
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
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500 whitespace-nowrap'>
                                        Dr.(Mrs.) <br /> Archana Thakur
                                    </a><br />
                                    Room No: 217<br />
                                    Extn: No: 217
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23239597</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>archana.ugc@nic.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Institutional Development Plan (IDP)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />International Cooperation (IC)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Promotion of Indian Languages (Bhartiya Bhasha)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Science and Research</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Yoga</a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>2</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. Jitendra Kumar Tripathi
                                    </a><br />
                                    Room No: 216<br />
                                    Extn: No: 216
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23239200</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>jitendratripathi.ugc@gov.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />AMPC (Anti Mal Practice Cell)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Educational Multimedia Research Center (EMMRCs)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Green Matters / VIP Reference</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Inter University Center (IUC)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Legal</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Malaviya Mission – Teachers Training Programme (MM-TTP)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />National Facilities Center (NFCs)</a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>3</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. G.S. Chauhan
                                    </a><br />
                                    Room No: 218<br />
                                    Extn: No: 218
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>NULL</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>chauhan.ugc@nic.in, chauhanugc@gmail.com</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />ASIHSS</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />ASSIST</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Career Oriented Courses (COC)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Coaching Classes for SC/ST/OBC & Minority Students</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Computer and Technology</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />HEPSN</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Innovative</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />NFE</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Raj Bhasha</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Receipt & Issue (UGC Office at 35 F.S. Road)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Remedial Coaching for SC/ST/OBC & Minority</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />SC/ST/OBC, Minorities & PWD Matters</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />TEPSE</a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>4</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. Avichal Raj Kapur
                                    </a><br />
                                    Room No: 219<br />
                                    Extn: No: 219
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23230040</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>avichal.ugc@nic.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Academic Bank of Credits</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Coordination Policy and Planning (CPP-II)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Equivalence Cell</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />HECI</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />NAD (National Academic Depository)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />NEP Coordination and Implementation</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />NEP SAARTHI</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Skill Education Bureau (NSQF)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />UTSAH Portal</a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>5</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Mr. Deepak Vats
                                    </a><br />
                                    Room No: 221<br />
                                    Extn: No: 221
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23232568</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>deepakvats.ugc@gov.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Basic Science Research (BSR)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Deemed to be University (DU)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />National Eligibility Test (NET)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />UGC Scholarship Fellowship Research Grants for Teachers at a Glance</a>
                                </td>
                            </tr>
                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>6</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Colonel Vipin Kaushal, SM
                                    </a><br />
                                    Room No: 226<br />
                                    Extn: No: 225
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23238865</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>vipinkaushal@ugc.gov.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Administration-I/A-B</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Administration-I/C</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Colleges With Potential for Excellence (CPE)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />General Admin</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Meeting Cell</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />MRP (Major Research Projects) (SR)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />MRP (Major Research Projects)(HRP)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Private University</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Receipt and Issue (UGC Main Office)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Research and Development Cell</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />SAP (Special Assistance Program)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />TG (Travel Grant)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />UGC Travel Desk</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Universities With Potential for Excellence (UPE)</a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>7</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. Mantha Srinivasu
                                    </a><br />
                                    Room No: 224<br />
                                    Extn: No: 224
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23231814</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>mantha@ugc.gov.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Annual Report</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Indian Knowledge System</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Publication</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Quality Improvement Programme</a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>8</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. Diksha Rajput
                                    </a><br />
                                    Room No: 220<br />
                                    Extn: No: 220
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604220</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>diksha.ugc@nic.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Capacity Building Cell (CBC)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />E-Content</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Environment Education</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Life Skills</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />MOOCs</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />SWAYAM</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Unnat Bharat Abhiyan</a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>9</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. Amol M. Andhare
                                    </a><br />
                                    Room No: 223<br />
                                    Extn: No: 223
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23232055</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>amol.ugc@gov.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />College Development Bureau (CDB)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Internship</a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>10</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. Gopi Chand Merugu
                                    </a><br />
                                    Room No: 323<br />
                                    Extn: No: 323
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604323</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>gopichand.ugc@gov.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Delhi Colleges (DC)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Funded Colleges (DC) (Delhi, BHU etc.)</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Inclusion of Colleges under Section 2(f) and 12B</a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Inclusion of Universities under Section 2(f) and 12B</a>
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
                                        Dr. R. Manoj Kumar
                                    </a><br />
                                    Room No: 201<br />
                                    Extn: No: 679
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23381422</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>rmkumar.ugc@nic.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />Autonomous College
                                    </a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>2</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. Madhukar Maruti Waware
                                    </a><br />
                                    Room No: 129<br />
                                    Extn: No: 678
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23386128</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>mwaware.ugc@gov.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />Computer and Networking Cell
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />Distance Education Bureau (ODL and Online)
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />E-Governance
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />Human Rights Value Education (HRVE)
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />ICT
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />UGC Website
                                    </a>
                                </td>
                            </tr>

                            <tr className='border-b!'>
                                <td className='border-r-2! pl-4! align-top pt-2'>3</td>
                                <td className='pl-4 align-top border-r-2! py-2 pb-2'>
                                    <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
                                        Dr. Ashima Mangla
                                    </a><br />
                                    Room No: 203<br />
                                    Extn: No: 652
                                </td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604652</td>
                                <td className='border-r-2! pl-4! pb-3 align-top pt-2'>amangla@ugc.gov.in</td>
                                <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />Centre for Data Analytics and Research
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />Establishment of Centre for Study of Social Inclusion in Universities (CSSIU)
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />I and S (Information and Statistics)
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />Task Force (Gender Sensitization)
                                    </a><br />
                                    <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
                                        <FaCaretRight className='inline-flex text-black' />Women’s Studies
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
                            <tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>1</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>
            Dr. Sunita Siwach
        </a><br />
        Room No: 01<br />
        Extn: No: 201
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-24110082</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>ssiwach.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Anti Ragging Cell
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Common University Entrance Test (CUET)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Fee Nivaran (Refund of Fee and Non-Retention of Academic Certificates)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Internal Complaint Committee (ICC)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Sports
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />State University
        </a>
    </td>
</tr>



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

export default Jointsecretaries