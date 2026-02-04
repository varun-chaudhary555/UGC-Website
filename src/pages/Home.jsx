import React from 'react'
import CustomCarousel from "../components/CustomCarousel";
import TopMarquee from "../components/TopMarquee";
import Modi from "../components/Modi";
import UpperBody from "../components/UpperBody";
import StarPerformer from "../components/StarPerformer";
import Marqueeboxes from "../components/Marqueeboxes";
import Marqueebody from "../components/Marqueebody";
import SocialMedia from "../components/SocialMedia";
import ImagesMarquee from "../components/ImagesMarquee";

function Home() {
  return (
    <div>
        <CustomCarousel />
      <TopMarquee />
      <Modi />
      <UpperBody />
      <StarPerformer />
      <Marqueeboxes />
      <Marqueebody />
      <SocialMedia />
      <ImagesMarquee />
    </div>
  )
}

export default Home