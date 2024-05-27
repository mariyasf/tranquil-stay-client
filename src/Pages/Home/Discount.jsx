

const Discount = () => {
    return (
        <div className="bg-[#F4F2F5] py-10 ">
            <div className='flex flex-col-reverse lg:flex-row
             relative  max-w-[1240px] mx-auto  bg-[#eca753] rounded-lg'>
                <div className="flex-1">
                    <div className="relative col-span-2">
                        <div className="carousel-item">
                            <img src="/Images/d.jpg"
                                className="w-full h-full object-cover"
                                alt="Banner" />
                            <div className="absolute inset-0 flex flex-col items-center
                 justify-center bg-black bg-opacity-50">

                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-1 flex-col items-center justify-center text-white
                        p-10 space-y-5 rounded-lg text-center">
                    <h2 className="font-Cormorrant text-3xl 
                    lg:text-3xl font-bold">Special Offer!</h2>
                    <h2 className="font-Cormorrant text-3xl 
                    lg:text-5xl font-bold">Discount <span className="font-Poppins text-red-700"> 10%</span> For 2 nights and 3 days</h2>
                    <button className="btn bg-transparent border-2 
                        hover:border-none hover:bg-[#000e0e] text-white">More Details</button>
                </div>

            </div>

        </div>
    );
};

export default Discount;