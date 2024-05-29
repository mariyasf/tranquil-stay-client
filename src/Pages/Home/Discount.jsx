

const Discount = () => {
    return (
        <div className="bg-[#F4F2F5] py-10 mt-10">
            <div className='flex flex-col-reverse lg:flex-row lg:h-[450px]
                max-w-[1240px] mx-auto rounded-lg'>
                <div className="flex-1">
                    <img src="/Images/d.jpg"
                        className="w-full h-[450px] object-cover"
                        alt="Banner" />
                </div>

                <div className="flex-1 bg-[#eca753] flex  flex-col items-center justify-center
                     text-white p-10 space-y-5 text-center">
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