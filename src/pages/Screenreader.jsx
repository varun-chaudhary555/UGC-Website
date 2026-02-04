import React from 'react'
import { FaCheckCircle, FaArrowCircleRight } from "react-icons/fa";


function Screenreader() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
                
                <button className='absolute top-6 left-18 text-orange-500 text-base font-medium'>Home / Screen Reader Access</button>
                {/* <h2 className='absolute top-14 left-18 text-white'>Genesis</h2> */}
                <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h2 className='w-220 mr-2 pl-14 pt-12 text-orange-500!'>Screen Reader Access</h2>
                    <p className='pl-14 mb-2 flex'>The University Grants Commission website complies with Guidelines for Indian Government Websites and World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.0 level A. This will enable people with visual impairments to access the website using technologies, such as screen readers. The information of the website is accessible with different screen readers, such as JAWS, NVDA, Supernova and Window-Eyes. <br /><br />

                        Following table lists the information about different screen readers: <br /><br />

                        Information related to the various screen readers</p>
                    <table className='table-auto ml-14 border-2 mt-8 mb-12 border-gray-400'>
                        <thead className='border-b-2! pt-6!'>
                            <tr>
                                <th className='border-r-2! pl-4! py-2'>Screen Reader</th>
                                <th className='border-r-2! pl-4!'>Website</th>
                                <th className='px-4!'>Free / Commercial</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b-2!'>
                                <td className='border-r-2! px-6'>Non Visual Desktop Access (NVDA)</td>
                                <td className='border-r-2! py-2 pl-4 pr-40'>http://www.nvda-project.org/ <br />
                                    (External website that opens in a new window)</td>
                                <td className='pl-4 -pt-2!'>Free</td>
                            </tr>
                            <tr className='border-b-2!'>
                                <td className='border-r-2! px-4'>System Access To Go</td>
                                <td className='border-r-2! py-2 pl-4'>http://www.satogo.com/ <br />
                                    (External website that opens in a new window)</td>
                                <td className='pl-4 -pt-2!'>Free</td>
                            </tr>
                            <tr className='border-b-2!'>
                                <td className='border-r-2! px-4'>Hal</td>
                                <td className='border-r-2! py-2 pl-4'>http://www.yourdolphin.co.uk/productdetail.asp?id=5 <br />
                                    (External website that opens in a new window)</td>
                                <td className='pl-4 -pt-2!'>Commercial</td>
                            </tr>
                            <tr className='border-b-2!'>
                                <td className='border-r-2! px-4'>JAWS</td>
                                <td className='border-r-2! py-2 pl-4'>http://www.freedomscientific.com/jaws-hq.asp<br />
                                    (External website that opens in a new window)</td>
                                <td className='pl-4 -pt-2!'>Commercial</td>
                            </tr>
                            <tr className='border-b-2!'>
                                <td className='border-r-2! px-4'>Supernova</td>
                                <td className='border-r-2! py-2 pl-4'>http://www.yourdolphin.co.uk/productdetail.asp?id=1<br />
                                    (External website that opens in a new window)</td>
                                <td className='pl-4 -pt-2!'>Commercial</td>
                            </tr>
                            <tr className='border-b-2!'>
                                <td className='border-r-2! px-4'>Window-Eyes</td>
                                <td className='border-r-2! py-2 pl-4'>http://www.gwmicro.com/Window-Eyes/<br />
                                    (External website that opens in a new window)</td>
                                <td className='pl-4 -pt-2!'>Commercial</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Screenreader