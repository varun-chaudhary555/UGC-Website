import React from "react";
import { HiPencilSquare } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router-dom";

function Marqueeboxes() {
  const boxStyle = {
    overflow: "hidden",
    height: "200px",
    width: "100%",
    position: "relative",
    marginTop: "30px",
  };

  const textStyle = {
    display: "inline-block",
    animation: "scrollUp 400s linear infinite",
  };

  return (
    <div>
      <div className="bg-gray-100 h-[480px] w-[1265px] mt-6 py-10 flex">
        <div className="h-[380px] w-[340px] bg-white rounded-4xl ml-18">
          <div className="bg-[#232c3b] h-18 rounded-t-3xl">
            <div className="text-center text-white text-lg font-bold bg-amber-600 mx-30 rounded-b-2xl pt-2 pb-3">
              Notices
            </div>

            {/* Vertical marquee box */}
            <div style={boxStyle}>
              <div style={textStyle}>
                <p className="text-black text-sm leading-6 px-3">
                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>
 UGC letter regarding: UGC Fee Refund Policy for Academic
                  Session 2025-26. <br />&nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/11/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Commemoration of 150 Years of Vande
                  Mataram. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/11/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: Merit list of selected candidates
                  - National Scholarship for PG Studies for the Academic year
                  2024-25. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 03/11/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Observance of Rashtriya Ekta Diwas
                  (National Unity Day) on 31st October, 2025 <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on :
                  30/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Documentation of Flagship
                  Schemes/Programmes/Initiatives aligned with Mission LiFE
                  Themes. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 28/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: Institute of Management and
                  Engineering, 1810/4, Ist Floor, Kotla Mubarakpur, Delhi is not
                  recognised under Section 2(f) or Section 3 of the UGC Act, nor
                  empowered to award any degree as per Section 22 of the UGC
                  Act, 1956. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 23/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: YUVAi-Global Youth AI Challenge.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 22/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: Invitation of applications from
                  Eligible Higher Educational Institutions (HEIs) for
                  recognition to offer programmes under Open and Distance
                  Learning (ODL) mode and/ or Online mode for academic year
                  2025-26, academic session beginning February 2026 and onwards.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 21/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Observance of Cardio-Pulmonary
                  Resuscitation (CPR) Awareness Week. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 17/10/2025{" "}
                  <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Observance of National Cyber Security
                  Awareness Month (NCSAM)-October 2025. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on :
                  17/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Nomination for NEP SAARTHIs. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published
                  on : 17/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Participation in National Environment
                  Youth Parliament (NEYP) 2026. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 16/10/2025{" "}
                  <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Implementation of Special Campaign 5.0
                  for Disposal of Pending Matters and Cleanliness Activities.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 16/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Implementation of Awareness Activities
                  and Institutional Mechanisms for Nasha Mukht Bharat Abhiyan
                  (NMBA) in Higher Education Institutions. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on :
                  09/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: Observation of the Vigilance Awareness
                  Week from 27th October 2025 to 2nd November 2025. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on
                  : 09/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: International Islamic University
                  of Prophetic Medicine, Calicut not recognised under Section
                  2(f) or Section 3 of the UGC Act nor empowered to award any
                  degree as per Section 22 of the UGC Act, 1956. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on :
                  08/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: Updated list of the defaulting
                  State Private Universities that have not submitted the
                  information under Section 13 of the UGC Act, 1956, or have not
                  uploaded the Public Self-Disclosure information on their
                  respective website. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 08/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC letter regarding: NEP SAARTHIs Revised Guidelines.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: UGC Guidelines on Public
                  Self-Disclosure by Higher Education Institutions 2024.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/10/2025 <br /><br />
                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: List of Higher Educational
                  Institutions (HEIs) recognized to offer Open and Distance
                  Learning (ODL) Programmes for academic year 2025-26, academic
                  session beginning July-August, 2025. <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/10/2025
                </p>
              </div>
            </div>
            <div>
              <Link to="/notices ">
              <span className="block text-center mt-4 ">
                <button className="bg-white  hover:bg-[#3f495a]! text-gray-600 hover:text-white! border-gray-200 border px-28 py-2 rounded-full!">
                  Read More
                </button></span></Link>
            </div>
          </div>
        </div>
        <div className="h-[380px] w-[340px] bg-white rounded-4xl ml-10">
          <div className="bg-[#232c3b] h-18 rounded-t-3xl">
            <div className="text-center text-white text-lg font-bold bg-blue-500 mx-28 rounded-b-2xl pt-2 pb-3">
              Circulars
            </div>
            <div style={boxStyle}>
              <div style={textStyle}>
                <p className="text-black text-sm leading-6 px-3">
                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Circular regarding: Grant of Dearness Relief to Central Government pensioners/family pensioners revised rate effective from 01-07-2024 shall be enhanced from 50% to 53%.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 19/11/2024 <br /><br />

                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>Circular regarding: Grant of Dearness Relief to Central Government Pensioners/Family Pensioners revised rate effective from 01-01-2024.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 20/03/2024 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Circular regarding: Revision of rates of Dearness allowance to Central Government Employees effective from 01-01-2024.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 15/03/2024 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Circular regarding: Declaration of immovable/movable property etc. by the UGC employees under Regulation 18(1) of the UGC employees (Conduct) Regulations, 1967.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 16/01/2024 <br /><br />

                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>Office Memorandum: Withdraw the circular regarding "Coverage under Central Civil Services (Pension) Rules, in place of the National Pension System, of those Central Government employees."
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 07/11/2023 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Circular regarding: Vigilance Awareness Week from 30th October 2023 to 5th November, 2023.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 27/10/2023 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Circular regarding: Revision of rates of Dearness Allowance to Central Government Employees effective from 01-07-2023 shall be enhanced from 42% to 46% of the Basic Pay.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 30/10/2023 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Circular regarding: Amendment in the CCS (Leave) Rules, 1972 consequent upon the implementation of the recommendation of 7 CPC.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 27/10/2023 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Circular regarding: Coverage under Central Civil Services (Pension) Rules, in place of the National Pension System, of those Central Government employees who were recruited against the posts/vacancies advertised/notified for recruitment, on or before 22-12-2003.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 21/03/2023 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Circular regarding: Applicability of Payment of Gratuity Act 1972 to educational institutions under the Ministry of Education.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 17/01/2023 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Notice regarding: Options under Central Civil Services (Implementation of National Pension System) Rules 2021.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 17/11/2022 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Options under Central Civil Services (Implementation of National Pension System) Rules, 2021 to avail benefits under the old pension scheme on the death of a Government servant covered under the National Pension System during service or his discharge from service on account of invalidation or disability.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 03/11/2022 <br /><br />

                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Circular regarding: Ceiling of Rs. 5 lakh on subscription to General Provident Fund (GPF) in a financial year.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 28/10/2022 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Grant of Dearness Relief to Central Government pensioners/family pensioners — revised rate effective from 01-07-2022 shall be enhanced from 34% to 38%.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 14/10/2022 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Circular regarding: Grant of Dearness Allowance (DA) to Central Government pensioners/family pensioners — Revised Rates effective from 01.01.2022 shall be enhanced from the existing rate of 31% to 34%.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 11/04/2022 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Circular regarding: Grant of Dearness Allowance (DA) to Central Government employees — Revised Rates effective from 01.01.2022 shall be enhanced from the existing rate of 31% to 34%.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 07/04/2022 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Declaration of immovable/movable property etc. by the UGC employees under Regulation 18(1) of the UGC employees (Conduct) Regulations, 1967.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 24/11/2021 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Grant of Dearness Allowance (DA) to the employees of the Central Government — Revised Rates effective from 01-07-2021 shall be enhanced from the existing rate of 28% to 31%.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 01/11/2021 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Circular reg.: Grant of transport allowance at double the normal rates to Deaf and Dumb employed in Central Government.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 12/10/2021 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Circular reg.: Govt. of India circular relating to Central Government employees retired during the period from January 2020 to June 2021 — Calculation of Gratuity and cash payment in lieu of leave.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 11/10/2021 <br /><br />
                </p>
              </div>
            </div>
            <Link to="/circulars">
            <span className="block text-center mt-4 ">
              <button className="bg-white  hover:bg-[#3f495a]! text-gray-600 hover:text-white! border-gray-200 border px-28 py-2 rounded-full!">
                Read More
              </button></span></Link>
          </div>
        </div>
        <div className="h-[380px] w-[350px] bg-white rounded-4xl ml-10">
          <div className="bg-[#232c3b] h-18 rounded-t-3xl">
            <div className="text-center text- text-white text-lg font-bold bg-green-800 mx-14 rounded-b-2xl pt-2 pb-3">
              International Cooperation
            </div>
            <div style={boxStyle}>
              <div style={textStyle}>
                <p className="text-black text-sm leading-6 px-3">
                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: Scholarships for Indian students to study in Russia.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/11/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> List of Eligible Indian institutions to collaborate as per Regulations on Academic Collaboration between Indian and Foreign HEIs to offer Twinning, Joint Degree and Dual Degree Programmes in 2022 with foreign institutions.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 04/11/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: Call for Nominations - UNESCO-Hamdan Prize for Teacher Development (2025-2026 Edition).
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 02/09/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: Mandatory registration of Foreign Students on the Study in India Portal.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 02/09/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: Collaborative agreements/arrangements with foreign-based educational institutions/providers not recognized by the UGC.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 25/07/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Public Notice regarding: ASEM-DUO launch of the DUO-CIMEA/Italy Fellowship and Call for Applications.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 16/07/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: University Grants Commission (Recognition and Grant of Equivalence to Qualifications obtained from Foreign Educational Institutions) Regulations, 2025.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 07/04/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: Call for 2025 Michel Batisse Award for Biosphere Reserve Management.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 25/03/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: Call for Nominations for the 2025 UNESCO-Japan Prize on Education for Sustainable Development.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 24/03/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Public Notice regarding: Instructions on seeking Security Clearance by Educational Institutions.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 12/02/2025 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: G20 Talent Visa.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 17/12/2024 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Public Notice regarding: List of eligible proposals by Indian and Norwegian experts.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/12/2024 <br /><br />

                <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>  Public Notice regarding: Call for nominations for Prof. P. C. Mahalanobis International Award in Statistics for the year 2025.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 22/10/2024 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Public Notice regarding: UNESCO-AI Fozan International Prize for Promotion of Young Scientists in Science, Technology, Engineering and Mathematics.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 22/10/2024 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Public Notice regarding: Announcement of the Khorana Program for Scholars 2025 - Summer Internship Opportunity in the USA.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 26/09/2024 <br /><br />

<HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: India-France year of Innovation.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 18/06/2024 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> UGC Public Notice regarding: Call for Applications for Indo-Norwegian Cooperation Programme in Higher Education and Research-INCP2.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/06/2024 <br /><br />

                  <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/>UGC Public Notice regarding: Extension of date for submission of nominations for the 2024 UNESCO Prize for Girls' and Women's Education.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 29/05/2024 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Public Notice regarding: Extension of date for submission of nominations for the 2024 UNESCO Prize for Girls' and Women's Education.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 06/05/2024 <br /><br />

                 <HiPencilSquare className="inline-flex mr-2 mb-1 text-orange-500"/> Public Notice regarding: Call for Candidates for the 2024 UNESCO International Centre of Martial Arts (ICM) for Youth Development and Engagement.
                  <br /> &nbsp;&nbsp;&nbsp;<LuCalendarDays className="inline-flex mr-2 text-orange-500" />
 published on : 19/04/2024 <br /><br />

                </p>
              </div>
            </div>
            <Link to="/international-Cooperation">
            <span className="block text-center mt-4 ">
              <button className="bg-white  hover:bg-[#3f495a]! text-gray-600 hover:text-white! border-gray-200 border px-28 py-2 rounded-full!">
                Read More
              </button></span></Link>
          </div>
        </div>
      </div>

      {/* Inline keyframes animation */}
      <style>
        {`
          @keyframes scrollUp {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }
        `}
      </style>
    </div>
  );
}

export default Marqueeboxes;
