import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function KeyInitiatives() {
  return (
    <div className='w-[1260px] h-[520px] bg-[#2e2b41]'>
      <div className="w-292 h-118 bg-gray-200 rounded-2xl ml-12 ">
        <p className="text-[#ff6c3a] text-3xl ml-12 pt-10 font-bold">Key <span className="text-[#364c66]"> Initiatives</span></p>
        <div className="flex">
          <div>
            <p className="flex ml-12"><FaPlus className="text-orange-500 mt-2 text-xs mr-4" /> Women Leaders: Shaping Academic Excellence for Viksit Bharat @ 2047</p>
            <p className="flex ml-12 -mt-3.5!"><FaPlus className="text-orange-500 mt-2 text-xs mr-4" /> Compendium of UGC Regulations 1957-2023</p>
            <p className="flex ml-12 -mt-3.5! "><FaPlus className="text-orange-500 shrink-0 mt-2 text-xs mr-4" />  List of Eligible Indian institutions to collaborate as per Regulations on Academic Collaboration between Indian and Foreign HEIs to offer Twinning, Joint Degree and Dual Degree Programmes in 2022 with foreign institutions.</p>
            <p className="flex ml-12 -mt-3.5!"><FaPlus className="text-orange-500 mt-2 text-xs mr-4" /> Guidelines on Mulya Pravah 2.0</p>
            <p className="flex ml-12 -mt-3.5!"><FaPlus className="text-orange-500 mt-2 text-xs mr-4" />
              National Higher Education Qualifications Framework (NHEQF)</p>
            <p className="flex ml-12 -mt-3.5!"><FaPlus className="text-orange-500 mt-2 text-xs mr-4" /> Guidelines for Promotion at HEI</p>
            <p className="flex ml-12 -mt-3.5!"><FaPlus className="text-orange-500 mt-2 text-xs mr-4" /> Guidelines for Training/Orientation of Faculty on Indian Knowledge System (IKS)</p>
            <p className="flex ml-12 -mt-3.5!"><FaPlus className="text-orange-500 mt-2 text-xs mr-4" />  National Credit Framework (NCrF)</p>
            <p className="flex ml-12 -mt-3.5!"><FaPlus className="text-orange-500 mt-2 text-xs mr-4" />  Fostering Social Responsibility & Community Engagement 2.0</p>
          </div>
          <div className="w-2/2">
            <img src="https://www.ugc.gov.in/Content/images/KeyInitiatives/KeyInitiatives.jpg" className="h-90 w-140 -mt-10 pl-10 pr-12 pb-12" alt="" />
          </div>
        </div>
        <div>
          <Link to="/keyinitiative" target="_blank" className="border no-underline! -mt-16! rounded-full! ml-12! hover:bg-gray-100 hover:text-[#2e2b42]! text-white bg-gray-700 text-sm! px-5 py-3">View All Initiatives</Link>
        </div>
      </div>
    </div>
  );
}

export default KeyInitiatives;
