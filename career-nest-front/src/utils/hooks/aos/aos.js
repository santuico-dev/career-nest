import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

/*
******************************************************
  THE PURPOSE OF THIS HOOK IS TO INITIALIZE AOS ONCE
******************************************************
*/

export const useAOS = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);
};
