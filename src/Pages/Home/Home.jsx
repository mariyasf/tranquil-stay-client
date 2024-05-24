import { Helmet } from "react-helmet";
import Address from "../Address/Address";
import About from "./About";
import Banner from "./Banner";


const Home = () => {

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner />
            <About />
            <Address />
        </>
    );
};

export default Home;