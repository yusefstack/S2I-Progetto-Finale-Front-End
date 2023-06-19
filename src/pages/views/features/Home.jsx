import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import "../../../sass/main.scss";

// Components
import Banner from "../../../components/Banner";
import Loader from "../../../components/Loader";
import Gigio from "../../../components/gigio";

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
                <Banner />
                {!loading && (
                    <div className='transition-image final '>
                    <motion.img
                    transition={{ ease: "easeInOut", duration: 1.6 }}
                    src={ImageTwo}
                    layoutId='main-image-1'
                />
                </div>
                )}
                <Gigio />
            </>
            )}
        </AnimatePresence>
    </LayoutGroup>
    );
}

export default Home;