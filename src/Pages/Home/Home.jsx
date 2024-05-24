import { Helmet } from "react-helmet";
import Address from "../Address/Address";
import About from "./About";
import Banner from "./Banner";
import Feedbacks from "../CustomerFeedback/Feedbacks";
import Appointments from "../Rooms/Appointments";


const Home = () => {

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <About />
            <Appointments />
            <Feedbacks />
            <Address />

        </>
    );
};

export default Home;