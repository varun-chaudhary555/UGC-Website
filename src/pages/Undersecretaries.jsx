import React from 'react'
import { FaCheckCircle, FaArrowCircleRight, FaCaretRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link, NavLink, Outlet } from 'react-router-dom';

function Undersecretaries() {
   return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Under Seceratries</button>
                <h1 className='absolute top-14 left-18 text-white'>Under Seceratries</h1>
                <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
            </div>
            <div className='flex'>
                <div>
                    <h3 className='w-220 mr-2 pl-18 pt-10 text-orange-500! pb-2'>Under Seceratries</h3>
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
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Ms. Manju Paharia</a><br />
        Room No: 201<br />
        Extn: No: 201
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604201</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>msp.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Administration-I/A-B
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>2</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Dalbir Singh</a><br />
        Room No: Null<br />
        Extn: No: Null
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>Null</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>dalbir.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Joint Cadre Review Cell (JCRC)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Pay Scale
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>3</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Sunita Bhatia</a><br />
        Room No: 306<br />
        Extn: No: 306
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604306</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>sunitabhatia.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Deemed to be University (DU)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Finance
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>4</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Shyam Bahadur</a><br />
        Room No: 417<br />
        Extn: No: 417
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604417</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>shyam.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        {/* No schemes listed */}
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>5</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Mangat Ram</a><br />
        Room No: 404<br />
        Extn: No: 441
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604441</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>mangat.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Green Matters/VIP Reference
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Malaviya Mission- Teachers Training Programme (MM-TTP)
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>6</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. B. Ravi Narayanan</a><br />
        Room No: 322<br />
        Extn: No: 322
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604322</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>ravi.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Coordination Policy and Planning (CPP-II)
        </a>
    </td>
</tr>
<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>7</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Beena Menon</a><br />
        Room No: 319<br />
        Extn: No: 327
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604327</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>beena.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Common University Entrance Test (CUET)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />NEP Coordination and Implementation</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />NEP SAARTHI</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Skill Education Bureau (NSQF)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />UTSAH Portal</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>8</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Anurag</a><br />
        Room No: 206<br />
        Extn: No: 240
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604240</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>anurag.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Annual Report</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Indian Knowledge System</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Publication</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Quality Improvement Programme</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>9</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. R.I.S. Bhardwaj</a><br />
        Room No: 424<br />
        Extn: No: 424
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604424</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>bhardwaj.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        {/* No schemes listed */}
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>10</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Anju Mohan Galhotra</a><br />
        Room No: 319<br />
        Extn: No: 140
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604140</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>amgalhotra.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Central University (CU)</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>11</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. V.K. Sudharsana Devi</a><br />
        Room No: 112<br />
        Extn: No: 112
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23236350</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>—</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Chairman’s Secretariat</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>12</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Anil Kumar</a><br />
        Room No: 404<br />
        Extn: No: 433
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604433</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>anilk.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />MRP (Major Research Projects) (SR)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />MRP (Major Research Projects)(HRP)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Research and Development Cell</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />SAP (Special Assistance Program)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />SC/ST/OBC, Minorities, PWD along with their Commission and Parliamentary Standing Committee Matters</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />TG (Travel Grant)</a>
    </td>
</tr>
<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>13</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Neera Chopra</a><br />
        Room No: 316<br />
        Extn: No: 199
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604199</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>neerac.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Finance</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>14</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. V. Jayaprakash</a><br />
        Room No: 206<br />
        Extn: No: 206
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604206</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>jayaprakash.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Administration-I/C</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Meeting Cell</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />UGC Travel Desk</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>15</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Achal Kumar</a><br />
        Room No: 316<br />
        Extn: No: 336
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604336</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>achal.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Finance</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>16</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Lokesh Kumar Jangra</a><br />
        Room No: 404<br />
        Extn: No: 404
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604404</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>lokesh.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Private University</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>17</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Parmod Kumar</a><br />
        Room No: 415<br />
        Extn: No: 450
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604450</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>pramod.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Finance</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>18</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Poonam Arora</a><br />
        Room No: F1<br />
        Extn: No: 586
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604586</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>parora.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Basic Science Research (BSR)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Selection and Awards-II (SA-II)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Selection and Awards-III (SA-III)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Selection and Awards-IV (SA-IV)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />STRIDE</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>19</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Sanjay Negi</a><br />
        Room No: 415<br />
        Extn: No: 442
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604442</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>sanjaynegi.ugc@gov.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Parliament</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>20</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. S. Bhanumathi</a><br />
        Room No: 421<br />
        Extn: No: 444
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604444</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>sbhanu.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Inclusion of Colleges under Section 2(f) and 12B</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Inclusion of Universities under Section 2(f) and 12B</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>21</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Sanjay Kumar</a><br />
        Room No: 212<br />
        Extn: No: 660
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-2360660</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>sanjay.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Distance Education Bureau (ODL and Online)</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>22</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Anuja Saxena</a><br />
        Room No: 121<br />
        Extn: No: 121
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23239337</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>anuja.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />AMPC (Anti Mal Practice Cell)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Vigilance Cell</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>23</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Raj Kumari</a><br />
        Room No: 205<br />
        Extn: No: 333
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604333</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>rajkumari.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Delhi Colleges (DC)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Funded Colleges (DC) (Delhi, BHU etc.)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Inclusion of Colleges under Section 2(f) and 12B</a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>24</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Rajni Khanna</a><br />
        Room No: 207<br />
        Extn: No: 640
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604640</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>rkhanna.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />Establishment of Centre for Study of Social Inclusion in Universities (CSSIU)</a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'><FaCaretRight className='inline-flex text-black' />I and S (Information and Statistics)</a>
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
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Bhushan Minj</a><br />
        Room No: 123<br />
        Extn: No: 688
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604688</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>bhaushan.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Legal
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>2</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Dr. Nand Kishore</a><br />
        Room No: 206<br />
        Extn: No: 698
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604698</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>nandkishor.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Distance Education Bureau (ODL and Online)
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>3</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Kamal Kishore</a><br />
        Room No: 509<br />
        Extn: No: 509
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604509</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>kamalkishore.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Equivalence Cell
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />National Eligibility Test (NET)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Selection and Awards-I (SA-I)
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
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mrs. Rachna Verma</a><br />
        Room No: 117<br />
        Extn: No: 669
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-23604669</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>vermarachna.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />State University
        </a>
    </td>
</tr>

<tr className='border-b!'>
    <td className='border-r-2! pl-4! align-top pt-2'>2</td>
    <td className='pl-4 align-top border-r-2! py-2 pb-2'>
        <a href="" className='text-orange-500! no-underline! hover:text-green-400! duration-500'>Mr. Ajay Kumar Joshi</a><br />
        Room No: 202 (NET Office)<br />
        Extn: No: 011-24112087
    </td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>011-24112087</td>
    <td className='border-r-2! pl-4! pb-3 align-top pt-2'>akjoshi.ugc@nic.in</td>
    <td className='pl-4 align-top border-r-2! pt-2 pb-8'>
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Anti Ragging Cell
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />College Development Bureau (CDB)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Fee Nivaran (Refund of Fee and Non-Retention of Academic Certificates)
        </a><br />
        <a href="" className='no-underline! text-orange-500! hover:text-green-400! duration-500'>
            <FaCaretRight className='inline-flex text-black' />Internal Complaint Committee (ICC)
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

export default Undersecretaries