

const Discount = () => {
    return (
        <div>
            <div className=' max-w-[1240px] mx-auto'>
                <div className="relative h-[700px] col-span-2">
                    <div className="carousel-item w-full  h-full ">
                        <img src="/Images/d.jpg"
                            className="w-full h-full object-cover"
                            alt="Banner" />
                        <div className="absolute inset-0 flex flex-col items-center
                 justify-center bg-black bg-opacity-50">

                        </div>
                    </div>
                </div>
                <div className="border-2 border-green-950 left-0">
                    <h2 className="font-Cormorrant text-3xl 
                    lg:text-8xl font-bold">Discount</h2>

                </div>

            </div>

        </div>
    );
};

export default Discount;