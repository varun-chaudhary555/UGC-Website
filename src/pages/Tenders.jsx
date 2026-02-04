import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

function Tenders() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/Tenders</button>
                <h2 className='absolute top-14 left-18 text-white'>Tenders</h2>
                <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
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
                            <th className='border-r! text-white bg-orange-500 pl-4! pr-16 pt-4'>Tender Code</th>
                            <th className='border-r! text-white bg-orange-500 px-4! pt-4 pr-130! whitespace-nowrap'>Tender Title</th>
                            <th className='border-r! text-white bg-orange-500 px-4! pr-10!'>Start <br /> Date</th>
                            <th className='px-4! text-white bg-orange-500 pr-10!'>Last <br /> Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>1</td>
                            <td className='border-r-2! px-4 pb-8!'>GEM/2024/B/4695275 <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'><a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'> Notice for inviting Bids Proposals for the Internet Bandwidth and Replication Service-Internet Leased Line at the University Grants Commission on Government e-Marketplace (GeM) "https://gem.gov.in".</a></td>
                            <td className='pl-3! border-r-2! pb-4'>28-02- <br />
                                2024</td>
                            <td className='pl-3! pb-4'>11-03- <br />
                                2024</td>
                        </tr>
                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>2</td>
                            <td className='border-r-2! px-4 pb-8!'>GEM/2023/B/4167918 <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Notice for inviting Bids Proposals for the Supply of Manpower Services at the University Grants Commission on Government e-Marketplace (GeM) "https://gem.gov.in".
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>08-11- <br />2023</td>
                            <td className='pl-3! pb-4'>28-11- <br />2023</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>3</td>
                            <td className='border-r-2! px-4 pb-8!'>GEM/2023/B/3734352 <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Corrigendum-I for BID No: GEM/2023/B/3734352 Dated: 27.07.2023 for setting up Wi-Fi Enabled Campus Network at UGC Head Office at its two Offices in New Delhi Govt. e-Marketplace (GeM)
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>21-08- <br />2023</td>
                            <td className='pl-3! pb-4'>28-08- <br />2023</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>4</td>
                            <td className='border-r-2! px-4 pb-8!'>GEM/2023/B/3734352 <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Advertisement for Supply, Installation, Configuration, Testing and Commissioning of Secured Wi-Fi Network in UGC, New Delhi
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>28-07- <br />2023</td>
                            <td className='pl-3! pb-4'>17-08- <br />2023</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>5</td>
                            <td className='border-r-2! px-4 pb-8!'>FNo: 5-6/1993 (NET/G <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Public Notice regarding: Engaging an Online Agency for UGC-NET to regularly develop, update and maintain the requisite software(s), process(es), and procedure(s), existing database during the period of the contract.
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>12-06- <br />2023</td>
                            <td className='pl-3! pb-4'>16-06- <br />2023</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>6</td>
                            <td className='border-r-2! px-4 pb-8!'>15-2/2021(ARC) <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Invitation for online request for proposal for setting up complete infrastructure in UGC South Campus & operation of a contact centre to redress the complaints of Ragging & Racial Discrimination from students of higher education
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>03-09- <br />2021</td>
                            <td className='pl-3! pb-4'>27-09- <br />2021</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>7</td>
                            <td className='border-r-2! px-4 pb-8!'>14-2/2022(Admn.I/C <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Public Notice regarding: Technical evaluation of the firms applied in the tender for Supply of Manpower Services in UGC.
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>24-11- <br />2022</td>
                            <td className='pl-3! pb-4'>30-11- <br />2022</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>8</td>
                            <td className='border-r-2! px-4 pb-8!'>F.No: 10-2/2019 (GA) <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    UGC Public Notice regarding: Inviting Tender for empanelment of Printers in the UGC offices.
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>19-06- <br />2023</td>
                            <td className='pl-3! pb-4'>26-06- <br />2023</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>9</td>
                            <td className='border-r-2! px-4 pb-8!'>07012022 <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Notice inviting e-Tender for preparation of Annual Accounts of UGC
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>07-01- <br />2022</td>
                            <td className='pl-3! pb-4'>04-02- <br />2022</td>
                        </tr>

                        <tr className='border-b-2!'>
                            <td className='border-r-2! pl-2! -mt-4! pb-8!'>10</td>
                            <td className='border-r-2! px-4 pb-8!'>F.14-2/2022 <br /></td>
                            <td className='pl-4 -pt-2! border-r-2! w-90'>
                                <a href="" style={{ textDecoration: "none" }} className='text-orange-500! hover:text-green-300! duration-500'>
                                    Corrigendum regarding : e-Tender for Supply of Manpower Services posted on 29-Sep-2022
                                </a>
                            </td>
                            <td className='pl-3! border-r-2! pb-4'>15-10- <br />2022</td>
                            <td className='pl-3! pb-4'>28-10- <br />2022</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='flex'>
                <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 10 of 131 entries</p>
                <p className='ml-122 -mt-6! '>previous</p>
                <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
                <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
                <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
                <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p>
                <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p>
                <p className='ml-6 -mt-5! text-sm! '>...</p>
                <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>14</p>
                <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
            </div>
        </div>
    )
}

export default Tenders