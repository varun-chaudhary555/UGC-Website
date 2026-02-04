import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

function Stateprivateuniversities() {
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
                <th className='px-4! text-white bg-orange-500 pr-10! w-74!'>URL</th>
              </tr>
              
            </thead>
            <tbody>
              <tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>1</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>A.K.S. University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>SherGanj, Satna</td>
  <td className='border-r! pl-4! pr-4! pt-2'>485001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Madhya Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>2</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>A.P.G. (Alakh Prakash Goyal) Shimla University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Shogi- Mehli Bypass Road, Shimla, H.P 171013</td>
  <td className='border-r! pl-4! pr-4! pt-2'>171009</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Himachal Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website <p className='text-black inline-flex'> | </p> View Other Details</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>3</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>AAFT University of Media and Arts</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Vill-Maath, Tehsil-Tilda, Dist-Raipur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>493225</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Chhattisgarh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website <p className='text-black inline-flex'> | </p> View Other Details</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>4</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Abhilashi University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Chailchowk (Chaichiot) Tehsil Chachyot, Distt. Mandi</td>
  <td className='border-r! pl-4! pr-4! pt-2'>175045</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Himachal Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website <p className='text-black inline-flex'> | </p> View Other Details</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>5</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Abhyuday University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Garam Magriya, Khandwa Road, Khargone</td>
  <td className='border-r! pl-4! pr-4! pt-2'>451001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Madhya Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website <p className='text-black inline-flex'> | </p> View Other Details</a></td>
</tr>
<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>6</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Adamas University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Barasat - Barrackpore Road, Barberia, PO Jagannathpur, PS Barasat, Kolkata</td>
  <td className='border-r! pl-4! pr-4! pt-2'>700126</td>
  <td className='border-r! pl-4! pr-4! pt-2'>West Bengal</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>7</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Adani University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Shantigram Township, Near Vaishnodevi Circle, Ahmedabad</td>
  <td className='border-r! pl-4! pr-4! pt-2'>382421</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Gujarat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>8</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Adesh University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>NH-7, Barnala Road, Bhucho, Bathinda</td>
  <td className='border-r! pl-4! pr-4! pt-2'>151101</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Punjab</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>9</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Adichunchanagiri University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Campus: NH-75, Tq- Nagamangala, Dist- Mandya, B.G. Nagara-571448</td>
  <td className='border-r! pl-4! pr-4! pt-2'>571448</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Karnataka</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>10</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Aditya University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Aditya Nagar, ADB Road, Surampalem, Kakinada</td>
  <td className='border-r! pl-4! pr-4! pt-2'>533437</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>
<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>11</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Agrawan Heritage University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Bamrauli Katara, Fatehabad Road, Agra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>283125</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Uttar Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>12</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Ahmedabad University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Commerce Six Roads, Navrangpura, Ahmedabad</td>
  <td className='border-r! pl-4! pr-4! pt-2'>380009</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Gujarat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>13</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>AIPH University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>APEX Building, Pahal, Bhubaneswar-Cuttack NH16</td>
  <td className='border-r! pl-4! pr-4! pt-2'>752101</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Odisha</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>14</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>AISECT University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Matwari Chowk, Hazaribag</td>
  <td className='border-r! pl-4! pr-4! pt-2'>825301</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Jharkhand</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>15</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Ajeenkya D.Y. Patil University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Charholi Budruk, Via Lohegaon, Pune</td>
  <td className='border-r! pl-4! pr-4! pt-2'>412105</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Maharashtra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>16</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Akal University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Talwandi Sabo, Dist. Bathinda</td>
  <td className='border-r! pl-4! pr-4! pt-2'>151302</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Punjab</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>17</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Al-Falah University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Faridabad</td>
  <td className='border-r! pl-4! pr-4! pt-2'>121004</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Haryana</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>18</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Al-Karim University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Sirsa, Karim Bagh, Katihar</td>
  <td className='border-r! pl-4! pr-4! pt-2'>854106</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bihar</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>19</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Alard University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Alard Knowledge Park, Marunji, Hinjewadi, Pune</td>
  <td className='border-r! pl-4! pr-4! pt-2'>411057</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Maharashtra</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>20</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Alliance University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Chikkahagada Cross, Chandapura-Anekal Main Road, Bangalore</td>
  <td className='border-r! pl-4! pr-4! pt-2'>562106</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Karnataka</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>21</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Amaltas University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Dewas-Ujjain State Highway, Bangar, District Dewas</td>
  <td className='border-r! pl-4! pr-4! pt-2'>455001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Madhya Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>22</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Amity University (Karnataka)</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Beerasandra, Devanahalli Taluk, Bengaluru Rural District</td>
  <td className='border-r! pl-4! pr-4! pt-2'>562110</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Karnataka</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>23</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Amity University (Punjab)</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Sector-82 Alpha, IT City, S.A.S. Nagar, Mohali</td>
  <td className='border-r! pl-4! pr-4! pt-2'>140306</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Punjab</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>24</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>AMITY University (Noida)</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Sector-125, Gautam Buddha Nagar, Noida</td>
  <td className='border-r! pl-4! pr-4! pt-2'>201313</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Uttar Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'>
    <a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>
      View Website <p className='text-black inline-flex'> | </p> View Other Details
    </a>
  </td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>25</td>
  <td className='border-r! pl-4! pr-4 pt-2'>Private</td>
  <td className='border-r! pl-4! pr-10 pt-2'>AMITY University (Haryana)</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Panchgaon, Manesar, District Gurgaon</td>
  <td className='border-r! pl-4! pr-4! pt-2'>122413</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Haryana</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
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
          <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 25 of 546 entries</p>
          <p className='ml-122 -mt-6! '>previous</p>
          <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
          <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
          <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
          <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p>
          <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p>
          <p className='ml-6 -mt-5! text-sm! '>...</p>
          <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>22</p>
          <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
        </div>
      </div>
    )
}

export default Stateprivateuniversities