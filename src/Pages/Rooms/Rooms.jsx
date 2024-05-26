import BannerCard from "../Shared/BannerCard";
import RoomsCategories from "./RoomsCategories";



const Rooms = () => {


    return (
        <div className="">
            <BannerCard
                path={"home/rooms"}
                title={"ROOMS & SUTTES"} />

            <RoomsCategories />

        </div>
    );
};

export default Rooms;