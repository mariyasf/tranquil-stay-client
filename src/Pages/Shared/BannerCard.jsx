import { useNavigate } from "react-router-dom";

const BannerCard = ({ title, path }) => {
    const navigate = useNavigate();

    const pathSegments = path.split('/');

    const handleNavigation = (segmentIndex) => {
        let newPath = '/' + pathSegments.slice(0, segmentIndex + 1).join('/');
        if (newPath === '/home') {
            newPath = '/';
        } else if (newPath.startsWith('/home/')) {
            newPath = newPath.replace('/home', '');
        }
        navigate(newPath);
    };

    return (
        <div className="relative  ">
            <div className="carousel-item w-full max-h-[850px]">
                <img src="/Images/db.jpg" className="w-full" alt="Banner" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h2 className="font-Cormorrant text-8xl font-bold text-white">{title}</h2>
                    <div className="font-Cormorrant text-3xl font-bold text-[#d8ad5d]">
                        {pathSegments.map((segment, index) => (
                            <span key={index}>
                                <a
                                    onClick={() => handleNavigation(index)}
                                    className="cursor-pointer hover:underline uppercase"
                                >
                                    {segment}
                                </a>
                                {index < pathSegments.length - 1 && ' / '}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;