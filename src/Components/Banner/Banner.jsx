import { useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {

    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimated, setIsAnimated] = useState(false)

    const handleFlip = () => {
        if (!isAnimated) {
            setIsFlipped(!isFlipped)
            setIsAnimated(true)
        }
    }

    return (
        <div className="max-w-[1185px] mx-auto flex">
            {/* text part */}
            <div className="space-y-4 flex-1">
                <p>NO.1 FREELANCE MARKETPLACE</p>
                <h3 className="text-6xl font-semibold">Find the best <br /><span className="font-normal dms text-[#de5353]">freelance</span> services</h3>
                <p className="text-xl text-[#4a5264] pb-4">Over 1200+ expect freelancers are waiting for you</p>
                <button className="btn">Post a Job for Free</button>
            </div>
            {/* grid picture part */}
            <div className=" hidden lg:grid lg:grid-cols-4 lg:gap-6 flex-1">
                <div className="lg:col-span-2 h-32 lg:row-span-2 flip-card" onMouseEnter={handleFlip}>
                    <motion.div
                        className="flip-card-inner"
                        initial={false}
                        animate={{ rotateY: isFlipped ? 180 : 360 }}
                        transition={{ duration: 0.6, animationDirection: 'normal' }}
                        onAnimationComplete={() => setIsAnimated(false)}
                    >
                        <div className="w-full h-full flip-card-front">
                            <img className="rounded-full" src="https://i.postimg.cc/Y0wj71TB/banner2.jpg" alt="" />
                        </div>
                        <div className="w-full flip-card-back bg-[#0066ff10] h-[161.83px] rounded-full py-11 cursor-pointer">
                            <div className=" h-full">
                                <p className="text-5xl font-bold text-blue-300 text-center">50K</p>
                                <h3 className="text-xl text-center">Expert Freelancers</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="lg:col-span-2 lg:row-span-4 w-56 mx-auto">
                    <img className="rounded-full lg:h-[450px]" src="https://i.postimg.cc/4ybyxYT7/banner4.jpg" alt="" />
                </div>
                <div className="translate-y-16 w-28 mx-auto rounded-full">
                    <img className="rounded-full" src="https://i.postimg.cc/d16gQFxQ/banner3-replace.jpg" alt="" />
                </div>
                <div className="translate-y-16 h-[200px] w-36 mx-auto flip-card" onMouseEnter={handleFlip}>
                    <motion.div
                        className="flip-card-inner"
                        initial={false}
                        animate={{ rotateY: isFlipped ? 180 : 360 }}
                        transition={{ duration: 0.6, animationDirection: 'normal' }}
                        onAnimationComplete={() => setIsAnimated(false)}
                    >
                        <div className="w-full h-full flip-card-front">
                            <img className="rounded-full" src="https://i.postimg.cc/PJq9P7gW/banner.jpg" alt="" />
                        </div>
                        <div className="w-full flip-card-back bg-[#0066ff10] h-[207.56px] rounded-full py-16 cursor-pointer">
                            <div className=" h-full">
                                <p className="text-5xl font-bold text-teal-300 text-center">5K+</p>
                                <h3 className="text-xl text-center">Service</h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;