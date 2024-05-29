import './gallery.css'

const Gallery = () => {
    return (
        <div className='bg-[#F4F2F5]'>
            <div className="max-w-[1240px] mx-auto px-10 lg:px-0">
                <section className='mb-10'>
                    <div  >
                        <div className='text-center  mb-10'>
                            <h2 className="text-3xl lg:text-5xl text-[#eca753] font-Rancho 
                         italic  text-center pt-20">Latest   GALLERY</h2>


                        </div>
                    </div>

                    <div className="destination-content">
                        <div className="destination-content-img">
                            <div className="image-container1 h-96">
                                <img
                                    src="/Images/Gallery/r1.jpg" alt />
                                <div className="centered-content">
                                    <h1 className='text-2xl font-Cormorrant font-bold'>Bed Room</h1>
                                </div>
                            </div>
                            <div className="image-container2 h-96">
                                <img src="/Images/Gallery/b.jpg" alt />
                                <div className="centered-content">
                                    <h1 className='text-2xl font-Cormorrant font-bold'>Pool With Room</h1>
                                </div>
                            </div>
                            <div className="image-container3 h-96">
                                <img src="/Images/Gallery/d.jpg" alt />
                                <div className="centered-content">
                                    <h1 className='text-2xl font-Cormorrant font-bold'>Fitness Area</h1>
                                </div>
                            </div>
                            <div className="image-container4 h-96">
                                <img src="/Images/Gallery/b2.jpg" alt />
                                <div className="centered-content">
                                    <h1 className='text-2xl font-Cormorrant font-bold'>Laundry Service</h1>
                                </div>
                            </div>
                            <div className="image-container5 h-96">
                                <img src="/Images/Gallery/g1.jpg" alt />
                                <div className="centered-content">
                                    <h1 className='text-2xl font-Cormorrant font-bold'>Mini Bar Section</h1>
                                </div>
                            </div>

                            <div className="image-container6 h-96">
                                <img src="/Images/Gallery/r2.jpg" alt />
                                <div className="centered-content">
                                    <h1 className='text-2xl font-Cormorrant font-bold'>Waiting Room</h1>
                                </div>
                            </div>
                            <div className="image-container7 h-96">
                                <img src="/Images/Gallery/p.jpg" alt />
                                <div className="centered-content">
                                    <h1 className='text-2xl font-Cormorrant font-bold'>Parking Area</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>


    );
};

export default Gallery;