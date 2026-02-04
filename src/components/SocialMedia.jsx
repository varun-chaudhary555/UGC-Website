import React from 'react'

function SocialMedia() {
    return (
        <div>
            <div className='bg-gray-100 h-130 -mt-10'>
                <p className='text-3xl text-[#FF6C3A] font-bold text-center pt-20'>Social Media <span className='text-[#3e4c66]'> Engagements</span></p>
                <div className='inline-flex -mt-20'>
                    <div className='border-4 mt-40 ml-20 h-60 w-130 border-blue-800'>
                        <div className='bg-blue-700 ml-56 -mt-12 rounded-t-full h-12 w-24 '><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/500px-Facebook_logo_%28square%29.png" alt="" className='h-10 ml-6 pt-2 w-10' /></div>
                        <div className="overflow-auto h-full">
                        <div class="fb-page"
                            data-href="https://www.facebook.com/UniversityGrantsCommission"
                            data-tabs="timeline"
                            data-width="500"
                            data-height="100%"
                            data-small-header="true"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="true">
                        </div></div>


                    </div>
                    <div className='border-4 mt-40 ml-10 h-60 w-130 mr-20 border-red-800'>
                        <div className='bg-red-800 ml-56 -mt-12 rounded-t-full h-12 w-24'><img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/572/small/youtube-logo-youtube-icon-transparent-free-png.png" alt="" className='h-24 ml-2 pb-8 w-20' /></div>
                        <div>
                            <iframe width="100%" height="232"
                                src="https://www.youtube.com/embed/videoseries?list=UULFlbbWYTjSiXnhShJ0Z1-05g"
                                allowfullscreen>
                            </iframe>
                        </div>

                    </div>
                </div>
            </div>
            <script async defer crossorigin="anonymous"
                src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0"
                nonce="ABC123">
            </script>

        </div>
    )
}

export default SocialMedia