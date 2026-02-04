import { Link } from "react-router-dom"

function Modi() {
  return (
    <div>
      <a href="https://www.youtube.com/watch?v=CqLYDKYGvlU" target='_blank'>
        <img src="/photos/ModiPhoto.jpg" className='h-full w-full px-15' alt="" />
      </a>
      <h3 className='pt-8 ml-15 text-[#3E4C66]! font-bold!'>
        <span className='text-[#ff6c3a]' id="main_content">About</span> University Grants Commission
      </h3>
      <p className='ml-15 text-[#2e2b42]'>The University Grants Commission (UGC) came into existence on 28th December, 1953 and became a statutory Organization of the Government of India by an Act of Parliament in 1956, for the coordination,determination and maintenance of standards of teaching, examination and research in university education.</p>
      <span className='block ml-15 mt-10'>
      <Link to="/readmore" style={{textDecoration:"none"}} className="bg-[#ff6c3a] duration-500 hover:bg-gray-100 text-white hover:text-[#2e2b42]! px-4 py-2 rounded-full!">
        Read More
      </Link></span>

    </div>
  )
}

export default Modi