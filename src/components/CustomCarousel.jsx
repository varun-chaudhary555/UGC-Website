import Carousel from 'react-bootstrap/Carousel';


function CustomCarousel() {
  return (
    <div>
      <style>{`
        .carousel-indicators {
          justify-content: flex-end !important; /* move dots to right */
          margin-right: 20px;
          margin-bottom: 30px;
        }

        .carousel-indicators [data-bs-target] {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: 	#B8B8B8;
          opacity: 0.7;
          border: none;
        }

        .carousel-indicators .active {
          background-color: #505050;
          width:11px;
          height:11px;
          opacity: 1;
        }
      `}</style>
    <Carousel controls={false} indicators={2000} pause={false} >
      <Carousel.Item>
        <img src="https://www.ugc.gov.in/Content/images/slider/main-slider2.png" className="d-block w-100" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://www.ugc.gov.in/Content/images/slider/main-slider3.png" className="d-block w-100" alt="" />
      </Carousel.Item>
      <Carousel.Item>
       <video src="https://www.ugc.gov.in/Content/images/slider/video_slider.mp4" className="d-block w-100" autoPlay loop muted playsInline></video>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CustomCarousel