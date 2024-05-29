import promo from "/videos/promo.mp4";


const Experience = () => {
    return (
        <div>
            <div className="max-w-[1240px] mx-auto px-10 lg:px-0 hero min-h-screen">
                <div className="hero-content flex flex-col lg:flex-row gap-10">

                    <div className='flex-1 w-full h-full'>
                        <video
                            className='w-full h-full  '
                            autoPlay
                            loop
                            muted
                            src={promo}
                        ></video>
                    </div>
                    <div className='flex-1 space-y-5  lg:p-4 '>
                        <h2 className='text-3xl text-[#eca753] font-bold font-Rancho italic'>You'll Remember</h2>
                        <h1 className="text-3xl lg:text-7xl font-bold font-Rancho ">
                            The Luxury Experience

                        </h1>
                        <p className="font-Cormorrant text-xl">
                            Indulge in a world where every detail is designed to provide an unparalleled sense of luxury and comfort. From the sumptuous furnishings to the elegant decor, each room offers an atmosphere of sophistication and serenity.
                        </p>
                        <p className="font-Cormorrant text-xl">
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