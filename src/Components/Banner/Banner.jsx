import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Banner = () => {
    return (
        <div className="relative my-3">
            <div className="relative bg-[#60887d] brightness-50">
                <img className="mx-auto " src="https://static.vecteezy.com/system/resources/thumbnails/043/212/303/small_2x/sofa-in-living-room-with-table-rug-plant-and-lamp-png.png" alt="" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-6">
                <motion.h1
                    className="md:text-4xl text-white text-center font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Frikly Professional is designed to help <br />
                    <span className="text-orange-500">Professionals</span> like you
                </motion.h1>
                <Link to="/login"><button className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Join Now</button></Link>
            </div>
        </div>
    );
};

export default Banner;