import { Helmet } from "react-helmet";
import Address from "../Address/Address";
import About from "./About";
import Banner from "./Banner";
import Feedbacks from "../CustomerFeedback/Feedbacks"; 


const Home = () => {
    

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner  />
            <About />
             
            <Feedbacks />
            <Address />

        </>
    );
};

export default Home;