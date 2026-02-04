import React from "react";
import Slider from "react-slick";

function ImagesMarquee() {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div>
            <div className='bg-white h-52 w-full'>
                <p className='text-3xl text-[#FF6C3A] font-bold text-center'>Digital<span className='text-[#3e4c66]'> Initiatives</span></p>
                <div className="slider-container pt-14 mx-20">
                    <Slider {...settings}>
                        
                        <a href="https://nad.gov.in/" target="_blank">
                        <div className="border w-38 hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/logo-4.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" />
                        </div></a>
                        <a href="https://aishe.nic.in/aishe/home" target="_blank">
                        <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/logo-5.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" />
                        </div></a>
                        <a href="https://www.swayamprabha.gov.in/" target="_blank">
                            <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/logo-2.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" />
                        </div>
                        </a>
                        <a href="https://deb.ugc.ac.in/?_gl=1*71a9s8*_ga*MjMxOTE4MjQ2LjE3NjAzNDUwNTY.*_ga_FGHYECNLXB*czE3Njc4NzE4MzEkbzY2JGcxJHQxNzY3ODczMDI4JGo2MCRsMCRoMA..*_ga_Q0MS75D115*czE3Njc4NzE4MzEkbzY2JGcxJHQxNzY3ODczMDI4JGo2MCRsMCRoMA.." target="_blank">
                            <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/DEB.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" /></div>
                        </a>
                        <a href="https://nta.ac.in/" target="_blank">
                            <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/NTA.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" /></div>
                        </a>
                        <a href="https://uamp.ugc.ac.in/?_gl=1*t52s5p*_ga*MjMxOTE4MjQ2LjE3NjAzNDUwNTY.*_ga_FGHYECNLXB*czE3Njc4NzE4MzEkbzY2JGcxJHQxNzY3ODczOTA2JGo2MCRsMCRoMA..*_ga_Q0MS75D115*czE3Njc4NzE4MzEkbzY2JGcxJHQxNzY3ODczOTA2JGo2MCRsMCRoMA.." target="_blank">
                            <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/UAMP.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" /></div>
                        </a>
                        <a href="https://utsah.ugc.ac.in/?_gl=1*1yqav32*_ga*MjMxOTE4MjQ2LjE3NjAzNDUwNTY.*_ga_FGHYECNLXB*czE3Njc4NzE4MzEkbzY2JGcxJHQxNzY3ODczOTA2JGo2MCRsMCRoMA..*_ga_Q0MS75D115*czE3Njc4NzE4MzEkbzY2JGcxJHQxNzY3ODczOTA2JGo2MCRsMCRoMA.." target="_blank">
                        <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/eGovernance/UTSAH.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" /></div>
                        </a>
                        <a href="https://pop.ugc.ac.in/?_gl=1*13y8fka*_ga*MjMxOTE4MjQ2LjE3NjAzNDUwNTY.*_ga_FGHYECNLXB*czE3Njc4NzE4MzEkbzY2JGcxJHQxNzY3ODczMzIyJGo2MCRsMCRoMA..*_ga_Q0MS75D115*czE3Njc4NzE4MzEkbzY2JGcxJHQxNzY3ODczMzIyJGo2MCRsMCRoMA.." target="_blank">
                            <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/eGovernance/PoP_Portal.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" /></div>
                        </a>
                        <a href="https://swayam.gov.in/" target="_blank">
                            <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/logo-1.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" /></div>
                        </a>
                        <a href="https://ugcmoocs.inflibnet.ac.in/" target="_blank">
                            <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/m1.png" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" /></div>
                        </a>
                        <a href="https://epgp.inflibnet.ac.in/" target="_blank">
                            <div className="border hover:shadow-2xl hover:shadow-gray-600 border-gray-100 p-2 w-38 rounded-tl-2xl rounded-br-2xl">
                            <img src="https://www.ugc.gov.in/Content/images/MainPage/logo-3.jpg" className="h-16 rounded-tl-2xl rounded-br-2xl" alt="" /></div>
                        </a>   
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default ImagesMarquee