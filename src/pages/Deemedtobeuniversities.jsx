import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Deemedtobeuniversities() {
  return (
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
              <th className='border-r! text-white bg-orange-500 pl-4! pr-10 py-2'>Sr <br /> No</th>
              <th className='border-r! text-white bg-orange-500 pl-4! py-2 w-20'>Type</th>
              <th className='border-r! text-white bg-orange-500 px-4! pt-4 w-30! whitespace-nowrap'>Name of the University</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-10 w-30!'>Address</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-4!'>Zip</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-4!'>State</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-4!'>Status</th>
              <th className='px-4! text-white bg-orange-500 pr-10! w-48!'>URL</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b!'>
              <td className='border-r! pl-4! pt-2'>1</td>
              <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
              <td className='border-r! pl-4! pr-10 pt-2'>Academy of Maritime Education and Training</td>
              <td className='border-r! pl-4! pr-10! w-45 pt-2'>135, East Coast Road, Kanathur</td>
              <td className='border-r! pl-4! pr-4! pt-2'>603112</td>
              <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
              <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
              <td className='pl-4! pr-10!'>
                <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
                  View Website <p className='text-black inline-flex'> | </p> View Other Details
                </a>
              </td>
            </tr>

            <tr className='border-b!'>
              <td className='border-r! pl-4! pt-2'>2</td>
              <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
              <td className='border-r! pl-4! pr-10 pt-2'>Amrita Vishwa Vidyapeetham</td>
              <td className='border-r! pl-4! pr-10! w-45 pt-2'>Amritanagar, Ettimadai, Coimbatore</td>
              <td className='border-r! pl-4! pr-4! pt-2'>641112</td>
              <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
              <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
              <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website <p className='text-black inline-flex'> | </p> View Other Details</a></td>
            </tr>

            <tr className='border-b!'>
              <td className='border-r! pl-4! pt-2'>3</td>
              <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
              <td className='border-r! pl-4! pr-10 pt-2'>Audisankara (Deemed to be University)</td>
              <td className='border-r! pl-4! pr-10! w-45 pt-2'>NH-16, Bypass Road, Gudur, Tirupati Dist</td>
              <td className='border-r! pl-4! pr-4! pt-2'>524101</td>
              <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
              <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
              <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website <p className='text-black inline-flex'> | </p> View Other Details</a></td>
            </tr>
<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>4</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Aurora Higher Education and Research Academy</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Uppal, Hyderabad</td>
  <td className='border-r! pl-4! pr-4! pt-2'>500001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Telangana</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>5</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Avinashilingam Institute for Home Science & Higher Education for Women</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Bharathi Park Rd, Saibaba Colony, Coimbatore</td>
  <td className='border-r! pl-4! pr-4! pt-2'>641043</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>6</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>B.L.D.E.</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Bangaramma Sajjan Campus, B M patil road, Vijayapura</td>
  <td className='border-r! pl-4! pr-4! pt-2'>586103</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Karnataka</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>7</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>B.S. Abdur Rahman Institute of Science and Technology</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>G.S.T.Road, Vandalur, Chennai</td>
  <td className='border-r! pl-4! pr-4! pt-2'>600048</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>8</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Banasthai Vidyapith</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Vanasthali Rd, Aliyabad</td>
  <td className='border-r! pl-4! pr-4! pt-2'>304022</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Rajasthan</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>9</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Bharath Institute of Higher Education & Research</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>No. 173, Agharam Road, Selaiyur, Chennai</td>
  <td className='border-r! pl-4! pr-4! pt-2'>600073</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>10</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Bharati Vidyapeeth</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>LBS Road Next to Alka Talkies, Sadashiv Peth, Pune</td>
  <td className='border-r! pl-4! pr-4! pt-2'>411030</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Maharashtra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>
<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>11</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Birla Institute of Technology</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>BIT Mesra, Ranchi</td>
  <td className='border-r! pl-4! pr-4! pt-2'>835215</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Jharkhand</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>12</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Birla Institute of Technology & Science</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Vidya Vihar, Pilani</td>
  <td className='border-r! pl-4! pr-4! pt-2'>333031</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Rajasthan</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>13</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Central Institute of Buddhist Studies (CIBS)</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Choglamsar, Leh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>194104</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Ladakh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>14</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Central Institute of Fisheries Education</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Panch Marg, Off Yari Road, Versova, Andheri (West), Mumbai</td>
  <td className='border-r! pl-4! pr-4! pt-2'>400061</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Maharashtra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>15</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Central Institute of Higher Tibetan Studies</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Sarnath, Varanasi</td>
  <td className='border-r! pl-4! pr-4! pt-2'>221007</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Uttar Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>16</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Central Institute of Technology (CIT)</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Balagaon, Kokrajhar (BTAD)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>783370</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Assam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>17</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Chaitanya</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Kishanpura, Hanamkonda, Distt-Warangal</td>
  <td className='border-r! pl-4! pr-4! pt-2'>506001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Telangana</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>18</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Chennai Mathematical Institute</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>H1, SIPCOT IT Park, Siruseri, Kelambakkam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>603103</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>19</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Chettinad Academy of Research and Education (CARE)</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Rajiv Gandhi Salai, Kelambakkam, Chengalpattu District, Chennai</td>
  <td className='border-r! pl-4! pr-4! pt-2'>603103</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>20</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Chinmaya Vishwavidyapeeth</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Adi Sankara Nilayam, Ernakulum</td>
  <td className='border-r! pl-4! pr-4! pt-2'>682313</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Kerala</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>21</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Christ</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Hosur Road, DRC Post, Bangalore</td>
  <td className='border-r! pl-4! pr-4! pt-2'>560029</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Karnataka</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>22</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>D. Y. Patil</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Sector - 07, Nerul, Navi Mumbai</td>
  <td className='border-r! pl-4! pr-4! pt-2'>400706</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Maharashtra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>23</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>D.Y Patil Educational Society</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>869 E ward Line Bazar, Kasaba Bavada, Kolhapur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>416006</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Maharashtra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>24</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Datta Meghe Institute of Higher Education and Research</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Sawangi (Meghe), Wardha</td>
  <td className='border-r! pl-4! pr-4! pt-2'>442107</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Maharashtra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>25</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Deemed to be Universities</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Dayalbagh Educational Institute</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Dayalbagh, Agra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>282005</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Uttar Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Section-III & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>



          </tbody>
        </table>
      </div>
      <div className='flex'>
        <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 25 of 150 entries</p>
        <p className='ml-122 -mt-6! '>previous</p>
        <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p>
        {/* <p className='ml-6 -mt-5! text-sm! '>...</p> */}
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>6</p>
        <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
      </div>
    </div>
  )
}

export default Deemedtobeuniversities