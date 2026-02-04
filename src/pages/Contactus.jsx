import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp, IoCall } from "react-icons/io5";


function Contactus() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />
                
                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home/Contact Us</button>
                <h2 className='absolute top-14 left-18 text-white'>Contact Us</h2>
                <h5 className='absolute top-26 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3502.0127489302454!2d77.2398!3d28.62938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2d35edd7a7%3A0x777d1eb52e811567!2sUniversity%20Grants%20Commission!5e0!3m2!1sen!2sus!4v1767720291763!5m2!1sen!2sus" width="600" height="280" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='ml-26 mt-26 rounded'></iframe>
                </div>
                <div>
                    <h2 className='w-220 mr-2 pl-10 pt-26 text-orange-500!'>Address</h2>
                    <h6 className='text-sm pl-10 mt-2 flex'><IoLocationSharp className='mt-1 mr-2 text-orange-500' />University Grants Commission (UGC)</h6>
                    <h6 className='text-sm  pl-10'>Bahadur Shah Zafar Marg,</h6>
                    <h6 className='text-sm  pl-10'>New Delhi - 110002.</h6>
                    <h6 className='text-sm pl-10 flex'><IoCall className='mt-1 mr-2 text-orange-500' />011-23604127, 011-23604200</h6>
                    <h6 className='text-sm  pl-10 flex'><IoMdMail className='mt-1 mr-2 text-orange-500' />contact.ugc@nic.in</h6>
                </div>
            </div>
            <div className='flex'>
                <div className='border h-48 w-1/2 ml-20 mt-4 mb-12'>
                    <h6 className='text-sm pl-8 mt-6! text-orange-500!'>University Grants Commission (UGC)</h6>
                    <p className='text-sm  pl-12'>35- Ferozeshah Road</p>
                    <p className='text-sm -mt-4! pl-12'>New Delhi - 110001.</p>
                    <p className='text-sm pl-12 -mt-4! flex'><IoCall className='mt-1 mr-2 text-orange-500' />011-23604650</p>
                </div>
                <div className='border h-52 w-1/2 ml-6 mt-4 mb-12 mr-10'>
                    <h6 className='text-sm pl-8 mt-6! text-orange-500!'>University Grants Commission (UGC)</h6>
                    <p className='text-sm  pl-12'>NET Bureau,</p>
                    <p className='text-sm -mt-4! pl-12'>South Campus of Delhi University,</p>
                    <p className='text-sm -mt-4! pl-12'>Benito Jhuarez Marg,</p>
                    <p className='text-sm -mt-4! pl-12'>New Delhi - 110021.</p>
                    <p className='text-sm -mt-4! pl-12'>Near Dhola Kuan</p>
                    <p className='text-sm pl-12 -mt-4! flex'><IoCall className='mt-1 mr-2 text-orange-500' />011-24115426, 011-24112276</p>
                </div>
                
            </div>
            <div className='flex'>
                <div className='border h-48 w-1/2 ml-20 mt-2 mb-4'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>General enquiries</h5>
                    <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-23604446, 011-23604200</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'>contact.ugc@nic.in</p></h6>
                </div>
                <div className='border h-48 w-1/2 ml-6 mt-2 mb-4 mr-10'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>Central University enquiries</h5>
                   <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-23604310</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'>socu.ugc@gmail.com</p></h6>
                </div>
                <div className='border h-48 w-1/2 -ml-4 mt-2 mr-10'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>State University enquiries</h5>
                    <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-23604643</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'>subureau@yahoo.in</p></h6>
                </div>
                
            </div>
            <div className='flex'>
                <div className='border h-48 w-1/2 ml-20'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>Deemed to be university enquiries</h5>
                    <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-23604314/011-23604329</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'>socppi.ugc@gmail.com</p></h6>
                </div>
                <div className='border h-48 w-1/2 ml-6 mr-10'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>State Private University enquiries</h5>
                   <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-23604407</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'> pu-cell@ugc.gov.in</p></h6>
                </div>
                <div className='border h-48 w-1/2 -ml-4 mr-10'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>2(f) 12(B) Colleges enquiries</h5>
                    <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-23604414, 23604240</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'>socpp1colleges@gmail.com</p></h6>
                </div>
                
            </div>
            <div className='flex'>
                <div className='border h-54 w-1/2 mt-4 mb-20 ml-20'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>DEB enquiries</h5>
                    <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-2360-4694, 011-2360-4687, 011-23604693</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'> neethuthulasi.ugc@gov.in</p></h6>
                </div>
                <div className='border h-48 w-1/2 ml-6 mt-4 mb-24 mr-10'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>NET enquiries</h5>
                   <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-24115416, 24115419</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'> ugcnetonline.in3@gmail.com</p></h6>
                </div>
                <div className='border h-48 w-1/2 -ml-4  mt-4 mb-24 mr-10'>
                    <h5 className='text-sm pl-8 mt-6! text-orange-500!'>2(f) 12(B)Press & PR</h5>
                    <h6 className='text-sm  pl-8 flex'>Phone: <p className='font-medium'>011-23604157</p> </h6>
                    <h6 className='text-sm pl-8 mt-4 flex'>Email: <p className='font-medium'>dwarka.ugc@nic.in</p></h6>
                </div>
                
            </div>
            
        </div>
    )
}

export default Contactus