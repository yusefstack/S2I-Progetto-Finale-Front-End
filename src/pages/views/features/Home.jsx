import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SEO from "../../../components/SEO";
import "../../../sass/main.scss";


// Components
import Banner from "../../../components/Banner";
import Loader from "../../../components/Loader";
import ExperienePath from "../../../components/ExperiencePath";

import ImageTwo from "../../../images/earth-home.png"

function Home() {
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
    loading
        ? document.querySelector("body").classList.add("loading")
        : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    return (
    <LayoutGroup type='crossfade'>
        <AnimatePresence>
            {loading ? (
            <motion.div key='loader'>
                <Loader setLoading={setLoading} />
            </motion.div>
            ) : (
            <>
                <SEO
                    title="Global War(n)ing!"
                    description="Learn more about the global warming"
                    name="Global War(n)ing!"
                    type="Information webapp"
                />
                <Banner />
                {!loading && (
                    <div className='transition-image final max-md:h-1/3'>
                    <motion.img
                    transition={{ ease: "easeInOut", duration: 1.6 }}
                    src={ImageTwo}
                    layoutId='main-image-1'
                />
                </div>
                )}
                <ExperienePath />
            </>
            )}
        </AnimatePresence>
    </LayoutGroup>
    );
}

export default Home;