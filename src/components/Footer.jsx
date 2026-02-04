import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
    return (
        <div>
            <div className='bg-[#232c3b] inline-flex h-90 w-full'>
                <div className='pt-16'>
                    <p className='text-white ml-16 font-bold pb-2'>For UGC Officials</p>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-16 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />e-Office <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-16 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />NIC mail <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-16 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />RTI online <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-16 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />PG portal <br /></p></a>

                </div>
                <div className="pt-28">
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] -ml-2 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />Professional Councils <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] -ml-2 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />State Higher Education Councils <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] -ml-2 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />MoE <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] -ml-2 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />AICTE <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] -ml-2 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />National Testing Agency (NTA) <br /></p></a>
                </div>
                <div className='pt-16'>
                    <p className='text-white ml-14 font-bold pb-2'>Quick links</p>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-14 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />Web portal for Fellowship/Scholarship Legacy<br /> Cases<br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-14 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' /> Rashtriya Uchchatar Shiksha Abhiyan <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-14 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />University Activity Monitoring Portal<br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-14 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />Deemed to be University Portal<br /></p></a>

                </div>
                <div className='pt-28'>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-8 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />DEB<br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-8 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />UGC NET Online <br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-8 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' /> UGC Regulations<br /></p></a>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-8 text-sm my-0 py-1 hover:text-white'><IoIosArrowForward className='inline-flex text-orange-500' />UGC Circulars<br /></p></a>
                </div>
                <div className='pt-16'>
                    <p className='text-white ml-10 font-bold pb-2'>Contact Us</p>
                    <p className='text-[#adafc7] ml-10 text-m my-0 py-1 hover:text-white'>University Grants Commission (UGC) <br />
                        Bahadur Shah Zafar Marg, <br />
                        New Delhi - 110002.<br /></p>
                    <p className='text-[#adafc7] ml-10 text-m my-0 py-4 hover:text-white'>Phone: 011-23604446, 011-23604200<br /></p>
                    <a href="" style={{ textDecoration: "none" }}><p className='text-[#adafc7] ml-10 text-sm my-0 py-1 hover:text-white'>Email: contact.ugc@nic.in<br /></p></a>
                    <div className=' ml-10 my-0 py-1'>
                        <img src="photos/TotalVisitors.png" className='h-10' alt="" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer