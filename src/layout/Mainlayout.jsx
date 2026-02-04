// src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";
import Topbar_photo from "../components/Topbar_photo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterImages from "../components/FooterImages";
import Copyright from "../components/Copyright";
import FloatingButtons from "../components/FloatingButtons";

function MainLayout() {
  return (
    <>
      <Topbar />
      <Topbar_photo />
      <Navbar />

      {/* Dynamic page content */}
      <Outlet />

      <Footer />
      <FooterImages />
      <Copyright />
      <FloatingButtons />
    </>
  );
}

export default MainLayout;
