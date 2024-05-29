import { Helmet } from "react-helmet";
import BannerCard from "../Shared/BannerCard";
import RoomsCategories from "./RoomsCategories";



const Rooms = () => {


    return (
        <div className="">
            <Helmet>
                <title>Rooms</title>
            </Helmet>

            <BannerCard
                path={"home/rooms"}
                title={"ROOMS & SUTTES"} />

            <RoomsCategories />

        </div>
    );
};

export default Rooms;