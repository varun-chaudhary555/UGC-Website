import React from 'react'

function Collegesreadmore() {
    return (
        <div>
            <div className='relative'>
                <img src="/photos/ugc_background.png" className='h-36 w-full' alt="" />

                <button className='absolute top-6 left-18 text-orange-500 text-base'>Home / Colleges</button>
                {/* <h1 className='absolute top-14 left-18 text-white'>University Details</h1> */}
                <h5 className='absolute top-20 left-18 text-white'>University Grants Commission</h5>
            </div>
            <h2 className='text-orange-500! mt-10! ml-8 font-bold!'>Colleges under section 2 (f)& 12(B) of the UGC Act 1956</h2>
            <a href="#" className='hover:text-green-700! ml-8 -pt-2! text-black! text-sm! no-underline! duration-500!' >Guidelines for Inclusion of Affiliated College under Section 2(f) and 12(B) of UGC Act, 1956</a>
            <p className='ml-8 mt-4! mb-12!'>
The University Grants Commission (UGC) provides financial assistance to eligible colleges which are included under Section 2(f)* and declared fit to receive central assistance (UGC grant) under Section 12 (B)** of UGC Act, 1956 as per approved pattern of assistance under various schemes. <br /><br />

     * The UGC had notified Regulations for recognition of colleges under Section 2(f) of the UGC Act, 1956. The colleges are brought under the purview of UGC in terms of these Regulations as and when the proposals are received from the colleges for inclusion under Section 2(f) and they are found fit for inclusion as per the provisions contained in the Regulations. <br /> <br />

     ** Apart from inclusion of colleges under Section 2(f), the UGC includes the Colleges under Section 12(B) of its Act in terms of Rules framed under the Act. This makes the colleges eligible for central assistance from the Government of India or any organization receiving funds from the Central Government.</p>
        </div>
    )
}

export default Collegesreadmore