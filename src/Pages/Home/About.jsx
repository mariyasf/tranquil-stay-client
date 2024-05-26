

const About = () => {
    return (
        <div className="bg-[#011515]">
            <div className="lg:max-w-[1240px] mx-auto pt-20 text-white"
                
            >

                <h2 className="text-3xl font-Rancho  italic  text-center pt-20">Special Moments</h2>
                <h2 className="text-8xl font-Rancho font-bold text-center pt-5">About Us</h2>
                <div
                    data-aos="zoom-out"
                    data-aos-offset="500"

                    className="flex flex-col lg:flex-row  gap-0  p-10 content-center">
                    <div
                        className="lg:my-5 lg:w-96   text-center space-y-5 py-9">
                        <img className="w-full" src="/Images/r1.jpg" alt="" />

                    </div>
                    <div
                        
                        className=" lg:w-96 bg-[#000e0e] text-white flex items-center text-center space-y-5 py-9 ">

                        <div className="space-y-4">
                            <h2 className="font-bold border-b-[#d8ad5d] border-b-2 w-[200px] mx-auto font-Rancho italic p-5 text-xl">
                                We Work For You
                            </h2>
                            <h2 className="font-bold p-5 text-xl">
                                we believe that booking your ideal hotel should be a seamless and enjoyable experience
                            </h2>

                            <button
                                className="btn border-white bg-transparent text-xl 
                                 hover:bg-[#d8ad5d] hover:border-none text-white w-[240px] mx-auto">
                                Read More</button>
                        </div>

                    </div>
                    <div
                        className=" lg:my-5 lg:w-96 text-center space-y-5 py-9">

                        <img className="w-full" src="/Images/r2.jpg" alt="" />

                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;