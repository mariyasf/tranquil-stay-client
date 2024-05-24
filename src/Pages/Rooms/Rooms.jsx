import BannerCard from "../Shared/BannerCard";
import Appointments from "./Appointments";
import { useLoaderData } from "react-router-dom";
import RoomsCategories from "./RoomsCategories";



const Rooms = () => {


    return (
        <div className="">
            <BannerCard title={"ROOMS & SUTTES"} />

            <RoomsCategories />


            <Appointments />
        </div>
    );
};

export default Rooms;