import React from 'react'

function Scholarships() {
  return (
    <div>
         <h2 className="text-[#ff6c3a]! ml-12 -mt-28! text-center font-bold!">Scholarships<span className="text-[#364c66]"></span></h2>
            <table className=' ml-20 border mt-8 mb-20 border-gray-400'>
                <thead className='border-b-2!'>
                    <tr>
                        <th className=' text-white bg-orange-500 pl-4! pr-10 py-2'>Sr.No.</th>
                        <th className='text-white bg-orange-500 pl-4! pr-10 py-3 w-170'>Scholarships</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-3'>1</td>
    <td className='pl-4 align-top pt-2!'>
        “IshanUday” Special Scholarship Scheme for North Eastern Region <a href="#" className='no-underline! text-black! hover:text-green-700! duration-500! ml-33'>View</a>
    </td>
</tr>

<tr className='border-b-2!'>
    <td className='pl-4! pt-2! pb-3'>2</td>
    <td className='pl-4 align-top pt-2!'>
       National Scholarship for Post Graduate Studies<a href="#" className='no-underline! text-black! hover:text-green-700! duration-500! ml-68'>View</a>
    </td>
</tr>

                </tbody>
            </table>
    </div>
  )
}

export default Scholarships