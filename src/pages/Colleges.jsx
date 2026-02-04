import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";


function Colleges() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Colleges</button>
                {/* <h1 className='absolute top-14 left-18 text-white'>University Details</h1> */}
                <h5 className='absolute top-20 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='mt-16'>
                <h4 className='text-gray-700! mt-6 ml-8 font-bold!'>Colleges under section 2 (f)& 12(B) of the UGC Act 1956</h4>
                <h3 className='border-[0.9px] ml-8 mr-20 mb-1!'></h3>
                <p className='ml-8 mr-20'>The University Grants Commission (UGC) provides financial assistance to eligible colleges which are included under Section 2(f)* and declared fit to receive central assistance (UGC grant) under Section 12 (B)** of UGC Act, 1956 as per approved pattern of assistance under various schemes...</p>
            </div>
            <div className='flex'>
                <Link to="/collegesreadmore" className="bg-[#ff6c3a] no-underline! duration-500 hover:bg-gray-100 text-white hover:text-[#2e2b42]! px-4 py-2 rounded-full! mr-16! ml-8">Read More</Link>
            </div>
            <div>
                <div className='flex'>
                    <div className='flex mt-4 ml-10'>
                        <p className='text-sm'>show</p>
                        <p className='flex ml-1 text-sm border-[0.9px] rounded px-1! h-6'>25 <MdKeyboardArrowDown className='mt-1' /></p>
                        <p className='text-sm ml-1'>entries</p>
                        <a className='ml-2 border mb-8! border-black no-underline! text-black px-2.5 text-center py-1 bg-gray-200'>CSV</a>
                        <a className='ml-2 border mb-8! border-black no-underline! text-black px-2.5 text-center py-1 bg-gray-200'>Excel</a>
                        <a className='ml-2 border mb-8! border-black no-underline! text-black px-2.5 text-center py-1 bg-gray-200'>Copy</a>
                        <p className=' ml-160 flex'>Search: <p className='ml-1 border h-6  w-40'></p></p>

                    </div>
                </div>
                <div>
                    <table className=' ml-10 border -mt-6! mb-12 border-gray-400'>
                        <thead className='border-b-2!'>
                            <tr>
                                <th className='border-r! text-white bg-orange-500 pl-4! w-10 pr-4 py-2'>Sr <br /> No</th>
                                <th className='border-r! text-white bg-orange-500 pl-4! py-2 pr-4 w-52'>Name of the college</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pt-4 pr-4 w-52! whitespace-nowrap'>Affilated to University</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-4 w-160!'>College Address</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-4! w-16'>District</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-4! w-26'>State</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-4! w-10'>Status</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-4! w-14'>Year of Estb.</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-4! w-20'>Teaching Upto</th>
                                <th className='border-r! text-white bg-orange-500 px-4! pr-4! w-20'>Govt or Non Govt</th>
                                <th className='px-4! text-white bg-orange-500 pr-10! w-20!'>Aided or Unaided</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>1</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Aldel Education Trust’s St. John College of Humanities & Science, St. John Technical and Educational Campus,</td>
  <td className='border-r! pl-4! pr-10 pt-2'>University of Mumbai, Mumbai</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Vevoor, Manor Road, Palghar (East), District Palghar-401 404</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Palghar</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Maharashtra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2011</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non-Government</td>
  <td className='pl-4! pr-10!'>Unaided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>2</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Govt Degree College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Sardar Patel University Mandi Himachal Pradesh</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Khundian, Vill: Sihoti, PO & Tehsil Khundian, Distt. Kangra-176 031</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Kangra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Himachal Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2014</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Government</td>
  <td className='pl-4! pr-10!'>Aided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>3</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Lachi Devi Mahila Mahavidyalaya</td>
  <td className='border-r! pl-4! pr-10 pt-2'>V.B.S. Purvanchal University, Jaunpur</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Chakhabibullah Mitthapara, Ghazipur-233227</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Ghazipur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Uttar Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2016</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non-Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>4</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A M A L College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Andhra University, Visakhapatnam</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Anakapalli, District Visakhapatnam - 531 001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Visakhapatnam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1953</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Master's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>5</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A Veeriya Vendayar Memorial Sri Pushpam College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Bharathidasan University, Tiruchirapalli</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Poondi, District Thanjavur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Thanjavur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1956</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>
<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>6</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A. K. Singh College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Nilamber-Pitamber University, Madininagar, Palamu</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Vill. Japla, Dist. Palamau - 822 116, Jharkhand</td>
  <td className='border-r! pl-4! pr-4! pt-2'></td>
  <td className='border-r! pl-4! pr-4! pt-2'>Jharkhand</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1984</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'>Unaided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>7</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A. V. Patel Commerce College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Veer Narmad South Gujarat University, Surat</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Bilimora, Dist. Valsad - 396 321</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Valsad</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Gujarat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1977</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>8</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.B.M. College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Ranchi University, Ranchi</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Singhbhum, Dist. Purbi Singhbhum</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Purbi Singhbhum</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Jharkhand</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1981</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>9</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.B.M. Degree College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Acharya Nagarjuna University, Nagarjuna Nagar</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Ongole, District Prakasam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Prakasam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1981</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>10</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.B.N & P.R.R. College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Adikavi Nannaya University, Rajahmundry</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Kovvur – 534 350, W.G. Dist., Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'></td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1999</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Master's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'>Unaided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>11</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.B.R. College of Engineering & Technology</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Jawaharlal Nehru Technological University, Kakinada</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Chinairlapadu (V), Kangiri(M), Dt. Prakasam-523 254</td>
  <td className='border-r! pl-4! pr-4! pt-2'></td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2008</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Master's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'>Unaided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>12</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.B.R.L. Degree College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Deen Dayal Upadhyay Gorakhpur University, Gorakhpur</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Githini, Chandhar, Sant Kabir Nagar</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Sant Kabir Nagar</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Uttar Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2006</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>13</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.C.T. College of Engineering and Technology</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Anna University, Chennai</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Bukkathurai-Uthiramerur High Road, Nelvoy Village, Manduranthagam Taluk, Dist. Kancheepuram – 603 107</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Kancheepuram</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2008</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'>Unaided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>14</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.D. Biligowda First Grade College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Mysore University, Mysore</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Koppa, Dist. Mandya</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Mandya</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Karnataka</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1992</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>15</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.D. Mahavidyalaya</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Utkal University, Bhubaneswar</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Brahmagiri, Puri, District Puri</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Puri</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Odisha</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1986</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>
<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>16</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.D. Patel Institute of Technology</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Gujarat Technological University, Ahmedabad</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>P.O. Box No. 52, Vitthal Udyognagar, New Vallabh Vidyanagar – 388 121</td>
  <td className='border-r! pl-4! pr-4! pt-2'></td>
  <td className='border-r! pl-4! pr-4! pt-2'>Gujarat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2000</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'>Unaided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>17</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.D.M. College for Women</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Bharathidasan University, Tiruchirapalli</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Nagapattinam, District Quaide-E-Milleth</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Nagapattinam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1975</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>18</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.D.P. College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Gauhati University, Guwahati</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Nowgong, District Nagon</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Nagaon</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Assam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1956</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>19</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.D.V.S. First Grade College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Kuvempu University, Shankaraghatta</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Sasvehally, Honnali Taluk, Dist. Devangere</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Davanagere</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Karnataka</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1990</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>20</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.E.S. College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Sambalpur University, Sambalpur</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Tarbha-767 016, District Sonepur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Sonbhadra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Odisha</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1989</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>21</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.E.S. National College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Bangalore University, Bangalore</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Gawribidanur, Dist. Kolar - 561 208</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Kolar</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Karnataka</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1964</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>22</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.G Padmavathi College of Nursing</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Pondicherry University, Pondicherry</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>No. 142/3, Savarayalu Reddy Road, Bahour, Bahour Commune, Pondicherry – 607 402</td>
  <td className='border-r! pl-4! pr-4! pt-2'></td>
  <td className='border-r! pl-4! pr-4! pt-2'>Puducherry</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2013</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'>Unaided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>23</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.G. Hashmi Degree College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Siddharth University, Kapilvastu</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Utraula, Dist. Balrampur - 271 307</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Balrampur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Uttar Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2016</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'>Unaided</td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>24</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.G.K.M. College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Acharya Nagarjuna University, Nagarjuna Nagar</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Sattenapalli, District Guntur - 522 403</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Guntur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1978</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2 align-top'>25</td>
  <td className='border-r! pl-4! pr-4 pt-2'>A.I. Jat Heroe's Memorial College</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Maharishi Dayanand University, Rohtak</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Rohtak, Dist. Rohtak</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Rohtak</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Haryana</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) and 12(B)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>1944</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bachelor's</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Non Government</td>
  <td className='pl-4! pr-10!'></td>
</tr>

                        </tbody>
                    </table>
                </div>
                <div className='flex'>
                    <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 25 of 14725 entries</p>
                    <p className='ml-122 -mt-6! '>previous</p>
                    <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
                    <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
                    <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
                    <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p>
                    <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p>
                    <p className='ml-6 -mt-5! text-sm! '>...</p>
                    <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>589</p>
                    <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
                </div>
            </div>

        </div>
    )
}

export default Colleges