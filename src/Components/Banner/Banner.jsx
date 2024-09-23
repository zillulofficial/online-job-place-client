
const Banner = () => {
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
                    <div className="lg:col-span-2 lg:row-span-2">
                        <img className="rounded-full" src="https://i.postimg.cc/Y0wj71TB/banner2.jpg" alt="" />
                    </div>
                    <div className="lg:col-span-2 lg:row-span-4 w-56 mx-auto">
                        <img className="rounded-full lg:h-[450px]" src="https://i.postimg.cc/4ybyxYT7/banner4.jpg" alt="" />
                    </div>
                    <div className=" w-28 mx-auto rounded-full">
                        <img className="rounded-full" src="https://i.postimg.cc/d16gQFxQ/banner3-replace.jpg" alt="" />
                    </div>
                    <div className=" h-36 mx-auto w-32">
                        <img className="rounded-full h-[200px]" src="https://i.postimg.cc/PJq9P7gW/banner.jpg" alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Banner;