import Address from "../Address/Address";
import About from "./About";
import Banner from "./Banner";


const Home = () => {
    document.title = 'Home'

    return (
        <>
            <Banner />
            <About />
            <Address />
        </>
    );
};

export default Home;