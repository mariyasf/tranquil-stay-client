import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const UseAnimation = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 500,
            easing: "ease-out-cubic",
            delay: 1000,
        });
    }, []);
};

export default UseAnimation;