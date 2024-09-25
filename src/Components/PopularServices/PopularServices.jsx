
const PopularServices = () => {
    return (
        <div className="max-w-[1185px] mx-auto mb-24">
            <div className="mb-8">
                <p className="text-3xl mb-2">Popular Services</p>
                <p className="text-lg">Explore the most popular service categories</p>
            </div>
            {/* card section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* card 01 */}
                <div className="relative cursor-pointer h-48">
                    <div className="image-container rounded-full h-full">
                        <img className="zoom-image h-full" src="https://i.postimg.cc/Qx5V6ZsV/programming-tech.jpg" alt="" />
                    </div>
                    <div className="absolute top-1/3 left-16 text-center h-full">
                        <p className="text-xl text-white mb-2">Programming & Tech</p>
                        <p className="text-xl text-white">4 services</p>
                    </div>
                </div>
                {/* card 02 */}
                <div className="relative cursor-pointer h-48">
                    <div className="image-container rounded-full h-full">
                        <img className="zoom-image h-full" src="https://i.postimg.cc/3rkkvDcX/graphics-design.jpg" alt="" />
                    </div>
                    <div className="absolute top-1/3 left-16 text-center">
                        <p className="text-xl text-white mb-2">Graphic & Design</p>
                        <p className="text-xl text-white">4 services</p>
                    </div>
                </div>
                {/* card 03 */}
                <div className="relative cursor-pointer h-48">
                    <div className="image-container rounded-full h-full">
                        <img className="zoom-image h-full" src="https://i.postimg.cc/SxfRhLnh/writing-and-translate.jpg" alt="" />
                    </div>
                    <div className="absolute top-1/3 left-16 text-center">
                        <p className="text-xl text-white mb-2">Writing & translation</p>
                        <p className="text-xl text-white">4 services</p>
                    </div>
                </div>
                {/* card 04 */}
                <div className="relative cursor-pointer h-48">
                    <div className="image-container rounded-full h-full">
                        <img className="zoom-image h-full" src="https://i.postimg.cc/fySQRs5d/finance-accounting.jpg" alt="" />
                    </div>
                    <div className="absolute top-1/3 left-16 text-center">
                        <p className="text-xl text-white mb-2">Finance & Accounting</p>
                        <p className="text-xl text-white">4 services</p>
                    </div>
                </div>
                {/* card 05 */}
                <div className="relative cursor-pointer h-48">
                    <div className="image-container rounded-full h-full">
                        <img className="zoom-image h-full" src="https://i.postimg.cc/7PjfMYFp/photography-editor.jpg" alt="" />
                    </div>
                    <div className="absolute top-1/3 left-16 text-center">
                        <p className="text-xl text-white mb-2">Photography & Edits</p>
                        <p className="text-xl text-white">4 services</p>
                    </div>
                </div>
                {/* card 05 */}
                <div className="relative cursor-pointer h-48">
                    <div className="image-container rounded-full h-full">
                        <img className="zoom-image h-full" src="https://i.postimg.cc/V5yQShHV/AI-service.jpg" alt="" />
                    </div>
                    <div className="absolute top-1/3 left-16 text-center">
                        <p className="text-xl text-white mb-2">Artificial Intelligence</p>
                        <p className="text-xl text-white">4 services</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularServices;