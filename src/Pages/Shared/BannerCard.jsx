
const BannerCard = ({ title }) => {
    return (
        <div className="relative  ">
            <div className="carousel-item w-full max-h-[850px]">
                <img src="/Images/db.jpg" className="w-full" alt="Banner" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h2 className="font-Cormorrant text-8xl font-bold text-white">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;