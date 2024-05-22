import About from "./About";
import Banner from "./Banner";


const Home = () => {
    document.title = 'Home'

    return (
        <>
            <Banner />
            <About />
        </>
    );
};

export default Home;