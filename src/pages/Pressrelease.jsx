import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Pressrelease() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / e - Publications / Press Release</button>
                <h2 className='absolute top-14 left-18 text-white'>University Grants Commission</h2>
                {/* <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5> */}
            </div>
            <div className='flex'>
                <div className='flex mt-14 ml-20'>
                    <p className='text-sm'>show</p>
                    <p className='flex ml-1 text-sm border-[0.9px] rounded px-1! h-6'>10 <MdKeyboardArrowDown className='mt-1' /></p>
                    <p className='text-sm ml-1'>entries</p>
                    <p className=' ml-190 flex'>Search: <p className='ml-1 border h-6  w-40'></p></p>

                </div>
            </div>
            <div>
                <table className=' ml-20 border -mt-6! mb-12 border-gray-400'>
                    <thead className='border-b-2!'>
                        <tr>
                            <th className='border-r! text-white bg-orange-500 pl-4! pr-10 py-2'>Sr <br /> No</th>
                            <th className='border-r! text-white bg-orange-500 px-4! pt-4 pr-1! whitespace-nowrap'>Title</th>
                            <th className='border-r! text-white bg-orange-500 px-4! pr-10!'>Published <br /> on</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>1</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press Release regarding: SWAYAM Courses for July 2022 Semester
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2022-06-28</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>2</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press release regarding: Declaration of UGC-NET results
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2022-02-16</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>3</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press Release regarding: SWAYAM Courses for January 2022 Semester
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2021-12-10</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>4</td>
                            <td className='pl-4 pb-2! align-top pt-2 border-r-2! w-232'>UGC Press Release regarding: Celebration of 7th International Day of Yoga on 21st June, 2021 <br />
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Hindi <br /> English
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2021-06-20</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>5</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press Release regarding: 78 UG and 46 PG Non-Engineering SWAYAM MOOCS to be offered in January-2021 semester
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2020-12-24</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>6</td>
                            <td className='pl-4 pb-2! align-top pt-2 border-r-2! w-232'>UGC Press Release regarding: Terminal Semester(s)/Final Year Examinations for the Universities <br />
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Hindi <br /> English
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2020-07-18</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>7</td>
                            <td className='pl-4 align-top pb-2! pt-2 border-r-2! w-232'>UGC Press Release on : Examinations and Academic Calendar for the Universities in view of COVID-19 Pandemic <br />
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press-Release-English <br />Press-Release-Hindi</a>

                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2020-07-06</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>8</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release for Inviting Online Information regarding Minority Status of candidates qualified in the UGC-NET and Joint CSIR-UGC Test held in June 2019
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2020-06-02</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>9</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press Release on : Examinations & Academic Calendar
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2020-04-25</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>10</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    University Grants Commission organized a 3 days Conference on ‘Research and Innovation’ for the Vice-Chancellors & Directors of Higher Educational Institutions from 26th July, 2018 to 28th July, 2018.
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2018-07-28</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>11</td>
                            <td className='pl-4 align-top pt-2 pb-2! border-r-2! w-232'>UGC observes the Fourth International Day of Yoga, 2018 <br />
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    English-Press-Release-IDY-2018 <br />
                                    Hindi-Press-Release-IDY-2018
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2018-06-25</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>12</td>
                            <td className='pl-4 align-top pt-2 pb-2! border-r-2! w-232'>Flag Hoisting by Prof D P Singh, Chairman UGC to mark the 69th Republic Day <br />
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press-Release-English <br />
                                    Press-Release-Hindi
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2018-01-26</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>13</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press Release reg. : Prof. D. P. Singh assuming charge as Chairman, UGC on 01/01/2018
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2018-01-01</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>14</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press Release reg. : Initiative for recognition/establishment of Institutions of Eminence
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2017-09-12</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>15</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release reg.: UGC clarification on Reservation Policy for SC/ST/OBC in faculty positions
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2016-06-08</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>16</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release reg.: Appointment of 102 New Faculty under Faculty Recharge Program of the UGC
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2015-05-29</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>17</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release regarding Result of UGC-NET June 2013
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2013-10-30</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>18</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release Reg.: Result of NET held on 30th June, 2013
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2013-10-21</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>19</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release UGC NET June 2013
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2013-06-30</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>20</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press Release
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2013-06-24</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>21</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Press Release re : Appointment of Prof. Ved Prakash, as Chairman, University Grants Commission, New Delhi
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2013-01-19</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>22</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release regarding Notification for procedure and criteria for declaration of result of UGC NET December, 2012
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2012-12-26</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>23</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release: Status regarding UGC Online Registration December 2012
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2012-11-17</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>24</td>
                            <td className='pl-4 align-top pt-2 border-r-2! w-232'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Press Release Reg: UGC declared the Result of NET held on 24th June, 2012
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>2012-09-20</td>
                        </tr>



                    </tbody>
                </table>
            </div>
            <div className='flex'>
                <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 24 of 24 entries</p>
                <p className='ml-170 -mt-6! '>previous</p>
                <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
                {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p> */}
                {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p> */}
                {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p> */}
                {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p> */}
                {/* <p className='ml-6 -mt-5! text-sm! '>...</p> */}
                {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>36</p> */}
                <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
            </div>
        </div>
    )
}

export default Pressrelease