import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";


function Fakeuniversities() {
  return (
    <div>
      <div className='relative'>
        <img src="/photos/ugc_background.png" className='h-48 w-full' alt="" />

        <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Fake Universities</button>
        <h1 className='absolute top-14 left-18 text-white'>Fake Universities</h1>
        <h5 className='absolute top-30 left-18 text-white'>University Grants Commission</h5>
      </div>
      <div className='flex justify-end'>
        <Link to="/fakeotherdetails" className="bg-[#ff6c3a] no-underline! duration-500 hover:bg-gray-100 text-white hover:text-[#2e2b42]! px-4 py-2 rounded-full! mr-16! mt-8!"> Other Details</Link>
      </div>
      <div>
        <h5 className='ml-10 text-gray-600!'>State-wise list of Fake Universities as on December, 2025 
            <a href="https://www.ugc.gov.in/pdfnews/5384249_Fake_University_List_Hindi_march_2023.pdf" target="_blank" className='text-black! no-underline! hover:text-green-700! duration-500'> ( List of Fake Universities in Hindi) </a>
        </h5>
      </div>
      <div className='mt-10 ml-10'>
        <a href="https://www.ugc.gov.in/pdfnews/5816776_Letters-appropriate-action-against-the-fake-Institutions.pdf" target="_blank" className='text-black! font-bold! no-underline! hover:text-green-700! duration-500'>UGC letters to State Government's Department of Higher Education / Principal Secretaries to take appropriate action against the fake Institutions in the <br /> respective state. </a>
      </div>
      <div className='flex'>
              <div className='flex mt-14 ml-30'>
                <p className='text-sm'>show</p>
                <p className='flex ml-1 text-sm border-[0.9px] rounded px-1! h-6'>25 <MdKeyboardArrowDown className='mt-1' /></p>
                <p className='text-sm ml-1'>entries</p>
                <p className=' ml-136 flex'>Search: <p className='ml-1 border h-6  w-40'></p></p>
      
              </div>
            </div>
            <div>
              <table className=' ml-30 border -mt-6! mb-12 border-gray-400'>
                <thead className='border-b-2!'>
                  <tr>
                    <th className='border-r! text-white bg-orange-500 pl-4! pr-10 py-2'>Sr <br /> No</th>
                    <th className='border-r! text-white bg-orange-500 pl-4! pr-10 w-40 pt-4'>State</th>
                    <th className='border-r! text-white bg-orange-500 px-4! pt-4 whitespace-nowrap w-160'>University Name</th>
                    {/* <th className='border-r! text-white bg-orange-500 px-4! pr-10!'>Date</th> */}
                    {/* <th className='px-4! text-white bg-orange-500 pr-10!'>Last <br /> Date</th> */}
                  </tr>
                </thead>
                <tbody>
                 <tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>1</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Andhra Pradesh</td>
  <td className='pl-3! border-r-2! pb-4'>Christ New Testament Deemed University, #32-32-2003, 7th Lane, Kakumanuvarithoto, Guntur, Andhra Pradesh-522002 and another address of Christ New Testament Deemed University, Fit No. 301, Grace Villa Apts., 7/5, Srinagar, Guntur, Andhra Pradesh-522002</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>2</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Andhra Pradesh</td>
  <td className='pl-3! border-r-2! pb-4'>Bible Open University of India, H.No. 49-35-26, N.G.O’s Colony, Visakhapatnam, Andhra Pradesh-530016</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>3</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Arunachal Pradesh</td>
  <td className='pl-3! border-r-2! pb-4'>Indian Institute of Alternative Medicine, 130/A, Secretariat S.O., Arunachal Pradesh – 791111</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>4</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>World Peace of United Nations University (WPUNU), No.-201, 2st Floor, Best Business Park, Netaji Subhash Place, Pitampura, New Delhi-110034</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>5</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>Institute of Management and Engineering, 1810/4, Ist Floor, Kotla Mubarakpur</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>6</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>All India Institute of Public & Physical Health Sciences (AIIPHS) State Government University, Office Kh. No. 608-609, 1st Floor, Sant Kripal Singh Public Trust Building, Near BDO Office, Alipur, Delhi-110036</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>7</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>Commercial University Ltd., Daryaganj, Delhi.</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>8</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>United Nations University, Delhi</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>9</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>Vocational University, Delhi</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>10</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>ADR-Centric Juridical University, ADR House, 8J, Gopala Tower, 25 Rajendra Place, New Delhi - 110 008</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>11</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>Indian Institute of Science and Engineering, New Delhi</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>12</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>Viswakarma Open University for Self-Employment, Rozgar Sewasadan, 672, Sanjay Enclave, Opp. GTK Depot, Delhi-110033</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>13</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>Adhyatmik Vishwavidyalaya (Spiritual University), 351-352, Phase-I, Block-A, Vijay Vihar, Rithala, Rohini, Delhi-110085</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>14</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Haryana</td>
  <td className='pl-3! border-r-2! pb-4'>Magic & Art University, 308A, Dashmesh Plaza, Mathura Road, Faridabad</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>15</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Karnataka</td>
  <td className='pl-3! border-r-2! pb-4'>Sarva Bharatiya Shiksha Peeth, Near S. K. Choultary, Devanur Main Road, Vijaya Nagara, Tumkur-572102</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>16</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Kerala</td>
  <td className='pl-3! border-r-2! pb-4'>International Islamic University of Prophetic Medicine (IIUPM), Kunnamangalam Kozhikode, Kerala-673571</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>17</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Kerala</td>
  <td className='pl-3! border-r-2! pb-4'>St. John’s University, Kishanattam, Kerala</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>18</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Maharashtra</td>
  <td className='pl-3! border-r-2! pb-4'>Raja Arabic University, Nagpur, Maharashtra</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>19</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Maharashtra</td>
  <td className='pl-3! border-r-2! pb-4'>National Backward Krushi Vidyapeeth, Tadwal, Tal. Akkalkot, District -Solapur</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>20</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>New Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>National Institute of Management Solution, B-1/1, Janakpuri</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>21</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>New Delhi</td>
  <td className='pl-3! border-r-2! pb-4'>Mountain Institute of Management & Technology, 109, Madhuban Building, Krati Communications, 55, Nehru Place, New Delhi – 110019</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>22</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Puducherry</td>
  <td className='pl-3! border-r-2! pb-4'>Usha Latchumanan College of Education, T.V. Malai Road, Vazhapadiyar Nagar Thirukkanur</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>23</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Puducherry</td>
  <td className='pl-3! border-r-2! pb-4'>Sree Bodhi Academy of Higher Education, No. 186, Thilaspet, Vazhuthavoor Road, Puducherry-605009</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>24</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Uttar Pradesh</td>
  <td className='pl-3! border-r-2! pb-4'>Gandhi Hindi Vidyapith, Prayag, Allahabad, Uttar Pradesh</td>
</tr>
<tr className='border-b-2!'>
  <td className='border-r-2! pl-2! align-top pt-2! pb-8!'>25</td>
  <td className='pl-4 align-top pt-2 border-r-2!'>Uttar Pradesh</td>
  <td className='pl-3! border-r-2! pb-4'>Netaji Subhash Chandra Bose University (Open University), Achaltal, Aligarh, Uttar Pradesh</td>
</tr>

                </tbody>
              </table>
            </div>
            <div className='flex'>
              <p className='ml-30 -mt-6! text-sm!'>Showing 1 to 25 of 29 entries</p>
              <p className='ml-120 -mt-6! '>previous</p>
              <p className='ml-6 border border-black px-3 text-sm! py-2 bg-gray-300! -mt-7! '>1</p>
              <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700 '>2</p>
              {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>3</p> */}
              {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>4</p> */}
              {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>5</p> */}
              {/* <p className='ml-6 -mt-5! text-sm! '>...</p> */}
              {/* <p className='ml-6 -mt-5! text-sm! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>112</p> */}
              <p className='ml-6 -mt-5! hover:border hover:px-3 hover:py-2 hover:-mt-7! hover:text-white hover:bg-gray-700'>Next</p>
            </div>
      </div>
  )
}

export default Fakeuniversities