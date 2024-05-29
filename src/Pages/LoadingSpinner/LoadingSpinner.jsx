import BounceLoader from "react-spinners/BounceLoader";
import CircleLoader from "react-spinners/CircleLoader";
import RingLoader from "react-spinners/RingLoader";

const LoadingSpinner = ({ loading }) => {
    return (
        <div className="bg-[#000e0e] h-screen">
            <div className='pt-5 mx-auto max-w-[1240px]'>
                <div className="flex flex-row justify-between">
                    < CircleLoader
                        color="#36d7b7"
                        loading={loading}
                        size={80}
                    />
                    <BounceLoader
                        color={"#d8ad5d"}
                        loading={loading}
                        size={50} 
                    />
                </div>

                <div className='flex py-32 justify-center max-w-[1240px]'>
                    <BounceLoader
                        color={"#c09d73"}
                        loading={loading}
                        size={150} 
                    />

                </div>
                <div className='flex items-end text-end justify-between'>
                    <RingLoader
                        color="#36d7b7"
                        loading={loading}
                        size={30} />

                    <CircleLoader
                        color="#36d7b7"
                        loading={loading}
                        size={150}
                    />


                </div>

            </div >
        </div >
    );
};

export default LoadingSpinner;