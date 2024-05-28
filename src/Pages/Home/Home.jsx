import { Helmet } from "react-helmet";
import Address from "../Address/Address";
import About from "./About";
import Banner from "./Banner";
import Feedbacks from "../CustomerFeedback/Feedbacks";
import Discount from "./Discount";
import Experience from "./Experience";
import DisplayRoomCard from "./DisplayRoomCard";
import ClientQuestion from "./ClientQuestion";


const Home = () => {


    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <About />
            <DisplayRoomCard />
            <Discount />
            <Experience />

            <ClientQuestion />


            <Feedbacks
                feedUrl={`${import.meta.env.VITE_API_URL}/feedback`}
            />
            <Address />

        </>
    );
};

export default Home;