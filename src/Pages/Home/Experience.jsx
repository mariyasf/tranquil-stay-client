import { IoIosBed } from "react-icons/io";


const Experience = () => {
    return (
        <div>
            <div className="max-w-[1240px] mx-auto px-10 lg:px-0 hero min-h-screen mb-10">
                <div className="hero-content flex flex-col lg:flex-row gap-10">

                    <div className="lg:w-1/2 relative ">
                        <img className="w-3/4 rounded-lg shadow-2xl"
                            src="/Images/c2.jpg" alt="" />
                        <img className="w-2/3 absolute top-20 right-10 border-8 border-white rounded-lg shadow-2xl"
                            src="/Images/c.jpg" alt="" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-4 '>
                        <h2 className='text-3xl text-[#eca753] font-bold fontRancho '>You'll Remember</h2>
                        <h1 className="text-3xl lg:text-7xl font-bold fontRancho ">
                            The Luxury Experience

                        </h1>
                        <p className="">
                            Indulge in a world where every detail is designed to provide an unparalleled sense of luxury and comfort. From the sumptuous furnishings to the elegant decor, each room offers an atmosphere of sophistication and serenity.
                        </p>
                        <p>
                            The experience promises to captivate your senses, leaving you with lasting memories of refined elegance and unmatched opulence.
                        </p>
                        <button className="btn bg-[#eca753] text-white">Get More Info</button>
                    </div>


                </div>


            </div>

            

        </div>
    );
};

export default Experience;