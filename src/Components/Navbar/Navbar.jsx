import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <Link to="/"><h1 className="text-4xl text-gray-700 text-center font-bold w-max mx-auto border-b-2 pb-5 
            ">Frikly PROFESSIONAL</h1></Link>
        </div>
    );
};

export default Navbar;