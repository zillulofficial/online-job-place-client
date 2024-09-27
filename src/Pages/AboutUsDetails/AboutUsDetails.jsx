import Aos from 'aos'
import { useEffect } from 'react';
import 'aos/dist/aos.css'

const AboutUsDetails = () => {
    useEffect(()=>{
        document.title= "Work Nest | AboutUs"
        Aos.init()
    },[])
    return (
        <div>
            <div className="container mx-auto mb-24">
                <div className="flex items-center gap-4">
                    <p className="text-lg">Welcome to <span className="text-[#e96060c5] text-2xl font-bold">WorkNest</span>, your trusted online marketplace for connecting top
                        talent with meaningful job opportunities. Our mission is to create a seamless platform where
                        skilled professionals and forward-thinking employers come together to build successful careers
                        and thriving businesses.</p>
                    <img data-aos="zoom-in-left" className="w-1/2 lg:h-[512px]" src="https://i.postimg.cc/dtyrFDbB/wallpaperflare-com-wallpaper-3.jpg" alt="" />
                </div>
                <div className="flex items-center gap-4 ">
                    <img data-aos="zoom-in-right" className="w-1/2 lg:h-[512px]" src="https://i.postimg.cc/59GLD8Ry/wallpaperflare-com-wallpaper-1.jpg" alt="" />
                    <p className="text-lg">At <span className="text-[#e96060c5] text-2xl font-bold">WorkNest</span>, we believe that work should be more than just a job—it should be
                        a place where you can grow, contribute, and find fulfillment. Whether you're looking to hire the best
                        talent or seeking your next career opportunity, <span className="text-[#e96060c5] text-2xl font-bold">WorkNest</span> is designed to simplify the process and help you
                        nest in a role that truly fits.</p>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-lg">With a focus on simplicity, transparency, and community, we offer a modern and
                        intuitive platform that allows users to browse, apply, and hire with ease. Tailored for freelancers,
                        remote workers, and full-time professionals, <span className="text-[#e96060c5] text-2xl font-bold">WorkNest</span> provides access to a wide range of job categories
                        and industries.</p>
                    <img data-aos="zoom-in-left" className="w-1/2 lg:h-[512px]" src="https://i.postimg.cc/Y0wj71TB/banner2.jpg" alt="" />
                </div>
                <div className="flex items-center gap-4 ">
                    <img data-aos="zoom-in-right" className="w-1/2 lg:h-[512px]" src="https://i.postimg.cc/zGYWG851/wallpaperflare-com-wallpaper.jpg" alt="" />
                    <p className="text-lg">Our goal is to empower individuals and organizations to thrive by offering tools
                        and resources that make job searching and hiring more efficient and rewarding. Join <span className="text-[#e96060c5] text-2xl font-bold">WorkNest</span> today, and
                        Flet’s build the future of work together.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsDetails;