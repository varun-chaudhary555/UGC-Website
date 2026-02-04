import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import KeyInitiatives from "./pages/KeyInitiatives";
import MainLayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import EgovernanceDefault from "./pages/EgovernanceDefault";
import ComissionMember from "./pages/ComissionMember";
import Mandate from "./pages/Mandate";
import Genesis from "./pages/Genesis";
import Ugcact from "./pages/Ugcact";
import Logo from "./pages/Logo";
import Ugcbureaus from "./pages/Ugcbureaus";
import Ugcoffices from "./pages/Ugcoffices";
import Interuniversitycentre from "./pages/Interuniversitycentre";
import Nationalfacilities from "./pages/Nationalfacilities";
import Screenreader from "./pages/Screenreader";
import Contactus from "./pages/Contactus";
import Jobs from "./pages/Jobs";
import Faqs from "./pages/Faqs";
import Search from "./pages/Search";
import Tenders from "./pages/Tenders";
import Readmore from "./pages/Readmore";
import Studentcorner from "./pages/Studentcorner";
import Facultycorner from "./pages/Facultycorner";
import Detailofhei from "./pages/Detailofhei";
import Ugcgreeninitiatives from "./pages/Ugcgreeninitiatives";
import Notices from "./pages/Notices";
import Internationalcooperation from "./pages/Internationalcooperation";
import Circulars from "./pages/Circulars";
import Starperformerbutton from "./pages/Starperformerbutton";
import Rtis from "./pages/Rtis";
import Comissiondecision from "./pages/Comissiondecision";
import Emergentmeeting from "./pages/Emergentmeeting";
import Minutes from "./pages/Minutes";
import Ecirculation from "./pages/Ecirculation";
import Chairpersons from "./pages/Chairpersons";
import Formerchairpersons from "./pages/Formerchairpersons";
import Formervicechairpersons from "./pages/Formervicechairpersons";
import Formersecretaries from "./pages/Formersecretaries";
import Chairman from "./pages/Chairman";
import Vicechairman from "./pages/Vicechairman";
import Secretary from "./pages/Secretary";
import Financialadvisor from "./pages/Financialadvisor";
import Additionalsecretaries from "./pages/Additionalsecretaries";
import Jointsecretaries from "./pages/Jointsecretaries";
import Deputysecretaries from "./pages/Deputysecretaries";
import Undersecretaries from "./pages/Undersecretaries";
import Educationofficers from "./pages/Educationofficers";
import Keyinitaive from "./pages/Keyinitaive";
import Guidelines from "./pages/Guidelines";
import Regulations from "./pages/Regulations";
import Ugcnewregulations from "./pages/Ugcnewregulations";
import Allregulations from "./pages/Allregulations";
import Archives from "./pages/Archives";
import Universities from "./pages/Universities";
import Centraluniversity from "./pages/Centraluniversity";
import Stateuniversities from "./pages/Stateuniversities";
import Deemedtobeuniversities from "./pages/Deemedtobeuniversities";
import Stateprivateuniversities from "./pages/Stateprivateuniversities";
import Viewalluniversities from "./pages/Viewalluniversities";
import Viewotheruniversities from "./pages/Viewotheruniversities";
import Fakeuniversities from "./pages/Fakeuniversities";
import Colleges from "./pages/Colleges";
import Autonomouscolleges from "./pages/Autonomouscolleges";
import Fheislist from "./pages/Fheislist";
import Heisviolatingregulations from "./pages/Heisviolatingregulations";
import Listoffakeuniversities from "./pages/Listoffakeuniversities";
import Phdregulations from "./pages/Phdregulations";
import Ombudspersons from "./pages/Ombudspersons";
import Defaulterstateuniversities from "./pages/Defaulterstateuniversities";
import Ebooks from "./pages/Ebooks";
import Annualreports from "./pages/Annualreports";
import Pressrelease from "./pages/Pressrelease";
import Archivespublication from "./pages/Archivespublication";
import Fakeotherdetails from "./pages/Fakeotherdetails";
import Collegesreadmore from "./pages/Collegesreadmore";
import Studentcornerbutton from "./pages/Studentcornerbutton";
import Fellowships from "./pages/fellowships";
import Scholarships from "./pages/Scholarships";
import Helpline from "./pages/Helpline";
import Facultycornerbutton from "./pages/Facultycornerbutton";
import Ugcreserachawards from "./pages/Ugcreserachawards";
import { Portal } from "@headlessui/react";
import Facultyregulations from "./pages/Facultyregulations";
import Portals from "./pages/Portals";
// import Egovernanceugc from "./pages/Egovernanceugc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>} >
          <Route path="/key-initiatives" element={<KeyInitiatives/>} />
          <Route path="/student-corner" element={<Studentcorner/>} />
          <Route path="/faculty-corner" element={<Facultycorner/>} />
          <Route path="/detailofhei" element={<Detailofhei/>} />
          <Route path="/ugcgreeninitiatives" element={<Ugcgreeninitiatives/>} />
          <Route index element={<EgovernanceDefault />} />
          <Route path="/e-governence" element={<EgovernanceDefault />} />
          </Route>
          <Route path="/comissionmember" element={<ComissionMember/>} />
          <Route path="/mandate" element={<Mandate/>}/>
          <Route path="/genesis" element={<Genesis/>}/>
          <Route path="/ugcact" element={<Ugcact/>}/>
          <Route path="/logo" element={<Logo/>}/>
          <Route path="/ugcbureaus" element={<Ugcbureaus/>}/>
          <Route path="/ugcoffices" element={<Ugcoffices/>}/>
          <Route path="/interuniversitycentre" element={<Interuniversitycentre/>}/>
          <Route path="/nationalfacilities" element={<Nationalfacilities/>}/>
          <Route path="/screenreader" element={<Screenreader/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/tenders" element={<Tenders/>}/>
          <Route path="/jobs" element={<Jobs/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/readmore" element={<Readmore/>}/>
          <Route path="/notices" element={<Notices/>}/>
          <Route path="/international-Cooperation" element={<Internationalcooperation/>} />
          <Route path="/circulars" element={<Circulars/>} />
          <Route path="/starperformer" element={<Starperformerbutton/>} />
          <Route path="/rtis" element={<Rtis/>} />
          <Route path="/comissiondecision" element={<Comissiondecision/>} >
          <Route index element={<Navigate to="minutes" replace />} />
          <Route path="Minutes" element={<Minutes/>} />
          <Route path="emergentmeeting" element={<Emergentmeeting/>}/>
          <Route path="e-circulation" element={<Ecirculation/>}/>
          </Route>
          <Route path="/chairpersons" element={<Chairpersons/>} >
          <Route index element={<Navigate to="formerchairpersons" replace />} />
          <Route path="formerchairpersons" element={<Formerchairpersons/>} />
          <Route path="formervicechairpersons" element={<Formervicechairpersons/>} />
          <Route path="formersecretaries" element={<Formersecretaries/>} />
          </Route>
          <Route path="/chairman" element={<Chairman/>}/>
          <Route path="/vicechairman" element={<Vicechairman/>}/>
          <Route path="/secretary" element={<Secretary/>}/>
          <Route path="/financialadvisor" element={<Financialadvisor/>}/>
          <Route path="/Additionalsecretaries" element={<Additionalsecretaries/>}/>
          <Route path="/jointsecretaries" element={<Jointsecretaries/>}/>
          <Route path="/deputysecretaries" element={<Deputysecretaries/>}/>
          <Route path="/educationofficers" element={<Educationofficers/>}/>
          <Route path="/undersecretaries" element={<Undersecretaries/>}/>
          <Route path="/keyinitiative" element={<Keyinitaive/>}/>
          <Route path="/guidelines" element={<Guidelines/>}/>
          <Route path="/regulations" element={<Regulations/>}>
          <Route index element={<Navigate to="ugcnewregulations" replace />} />
          <Route path="ugcnewregulations" element={<Ugcnewregulations/>} />
          <Route path="allregulations" element={<Allregulations/>} />
          <Route path="archives" element={<Archives/>} />     
          </Route>
          <Route path="/universities" element={<Universities/>}>
          <Route path="centraluniversity" element={<Centraluniversity/>} />
          <Route path="stateuniversities" element={<Stateuniversities/>} />
          <Route path="deemedtobeuniversities" element={<Deemedtobeuniversities/>} /> 
          <Route path="stateprivateuniversities" element={<Stateprivateuniversities/>} /> 
          <Route path="viewall" element={<Viewalluniversities/>} /> 
          </Route>
          <Route path="/viewotherdetail" element={<Viewotheruniversities/>} /> 
          <Route path="/fakeuniversities" element={<Fakeuniversities/>} /> 
          <Route path="/colleges" element={<Colleges/>} /> 
          <Route path="/autonomouscolleges" element={<Autonomouscolleges/>} /> 
          <Route path="/fheilist" element={<Fheislist/>} /> 
          <Route path="/violatingregulations" element={<Heisviolatingregulations/>}>
          <Route path="listoffakeuniversities" element={<Listoffakeuniversities/>} />
          <Route path="phdregulations" element={<Phdregulations/>} />
          <Route path="ombudsperson" element={<Ombudspersons/>} /> 
          <Route path="defaulterstateuniversities" element={<Defaulterstateuniversities/>} />
          </Route> 
          <Route path="/ebooks" element={<Ebooks/>} />
          <Route path="/annualreports" element={<Annualreports/>} />
          <Route path="/pressrelease" element={<Pressrelease/>} />
          <Route path="/archivespublication" element={<Archivespublication/>} />
          <Route path="/fakeotherdetails" element={<Fakeotherdetails/>} />
          <Route path="/collegesreadmore" element={<Collegesreadmore/>} />
          <Route path="/studentcornerbutton" element={<Studentcornerbutton/>}>
          <Route index element={<Navigate to="fellowships" replace />} />
          <Route path="fellowships" element={<Fellowships/>} />
          <Route path="scholarships" element={<Scholarships/>} />
          <Route path="helplines" element={<Helpline/>} />  
          </Route>
          <Route path="/facultycornerbutton" element={<Facultycornerbutton/>} >
          <Route index element={<Navigate to="ugcresearchawards" replace />} />
          <Route path="ugcresearchawards" element={<Ugcreserachawards/>} />
          <Route path="portals" element={<Portals/>} />
          <Route path="facultyregulations" element={<Facultyregulations/>} />  
          </Route>

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
