import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


function Stateuniversities() {
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
              <th className='border-r! text-white bg-orange-500 pl-4! py-2 w-24'>Type</th>
              <th className='border-r! text-white bg-orange-500 px-4! pt-4 w-40! whitespace-nowrap'>Name of the University</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-10 w-80!'>Address</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-4!'>Zip</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-4!'>State</th>
              <th className='border-r! text-white bg-orange-500 px-4! pr-4!'>Status</th>
              <th className='px-4! text-white bg-orange-500 pr-10! w-30!'>URL</th>
            </tr>
          </thead>
          <tbody>
           <tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>1</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>"Kaushalya" the Skill University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Mahatma Gandhi Labour Institute (MGLI), Drive-in Road, Memnagar, Ahmedabad</td>
  <td className='border-r! pl-4! pr-4! pt-2'>380052</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Gujarat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>2</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>A.P.J. Abdul Kalam Technological University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>CET Campus, Alathara Rd, Thiruvananthapuram</td>
  <td className='border-r! pl-4! pr-4! pt-2'>695016</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Kerala</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>3</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Acharya N.G. Ranga Agricultural University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Amaravathi Road, Lam, Guntur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>522034</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>4</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Acharya Nagarjuna University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>NH16, Nagarjuna Nagar, Guntur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>522510</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>5</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Acharya Narendra Deva Krishi Evam Prodyogik Vishwavidyalaya</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Kumarganj, Faizabad (Ayodhya)</td>
  <td className='border-r! pl-4! pr-4! pt-2'>224229</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Uttar Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>
<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>6</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Adikavi Nannaya University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Raja Raja Nagar, Rajamahendravaram</td>
  <td className='border-r! pl-4! pr-4! pt-2'>533296</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>7</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Agriculture University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Mandore, Jodhpur</td>
  <td className='border-r! pl-4! pr-4! pt-2'>342304</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Rajasthan</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>8</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Agriculture University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Borkhera, Kota</td>
  <td className='border-r! pl-4! pr-4! pt-2'>324001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Rajasthan</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>9</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Alagappa University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Karaikudi, Sivaganga District</td>
  <td className='border-r! pl-4! pr-4! pt-2'>630003</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>10</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Aliah University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>New Town, Kolkata</td>
  <td className='border-r! pl-4! pr-4! pt-2'>700160</td>
  <td className='border-r! pl-4! pr-4! pt-2'>West Bengal</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>11</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Alipurduar University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Alipurduar Court</td>
  <td className='border-r! pl-4! pr-4! pt-2'>736122</td>
  <td className='border-r! pl-4! pr-4! pt-2'>West Bengal</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>12</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Anand Agricultural University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>University Bhavan, Anand</td>
  <td className='border-r! pl-4! pr-4! pt-2'>388001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Gujarat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>13</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Andhra Kesari University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Pernamitta, Ongole</td>
  <td className='border-r! pl-4! pr-4! pt-2'>523225</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>14</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Andhra Pradesh Fisheries University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Padmaja Nagar, Vijayawada</td>
  <td className='border-r! pl-4! pr-4! pt-2'>521134</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>15</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Andhra University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Visakhapatnam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>530003</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Andhra Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>16</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Anna University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Guindy, Chennai</td>
  <td className='border-r! pl-4! pr-4! pt-2'>600025</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>17</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Annamalai University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Annamalainagar, Cuddalore</td>
  <td className='border-r! pl-4! pr-4! pt-2'>608002</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Tamil Nadu</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>18</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Arunachal Pradesh University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Pasighat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>791102</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Arunachal Pradesh</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>19</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Aryabhatta Knowledge University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Mithapur, Patna</td>
  <td className='border-r! pl-4! pr-4! pt-2'>800001</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Bihar</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>20</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Assam Agricultural University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Jorhat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>785013</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Assam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f) & 12(B)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>21</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Assam Rajiv Gandhi University of Co-operative Management</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Joysagar, Sivasagar</td>
  <td className='border-r! pl-4! pr-4! pt-2'>785665</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Assam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>22</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Assam Science & Technology University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Guwahati</td>
  <td className='border-r! pl-4! pr-4! pt-2'>781013</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Assam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>23</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Assam Skill University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Mangaldoi, Darrang</td>
  <td className='border-r! pl-4! pr-4! pt-2'>784125</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Assam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>24</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Assam Veterinary and Fishery University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Khanapara, Guwahati</td>
  <td className='border-r! pl-4! pr-4! pt-2'>781022</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Assam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>

<tr className='border-b!'>
  <td className='border-r! pl-4! pt-2'>25</td>
  <td className='border-r! pl-4! pr-4 pt-2'>State</td>
  <td className='border-r! pl-4! pr-10 pt-2'>Assam Women's University</td>
  <td className='border-r! pl-4! pr-10! w-45 pt-2'>Jorhat</td>
  <td className='border-r! pl-4! pr-4! pt-2'>785004</td>
  <td className='border-r! pl-4! pr-4! pt-2'>Assam</td>
  <td className='border-r! pl-4! pr-4! pt-2'>2(f)</td>
  <td className='pl-4! pr-10!'><a href="" className='text-orange-500! hover:text-green-400! no-underline! duration-500'>View Website</a></td>
</tr>


          </tbody>
        </table>
      </div>
      <div className='flex'>
        <p className='ml-20 -mt-6! text-sm!'>Showing 1 to 25 of 515 entries</p>
        <p className='ml-122 -mt-6! '>previous</p>
        <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p>
        <p className='ml-6 -mt-5! text-sm! '>...</p>
        <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>21</p>
        <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
      </div>
    </div>
  )
}

export default Stateuniversities