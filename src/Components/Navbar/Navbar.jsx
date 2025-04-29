import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const { user , logOut} = useContext(AuthContext)
    return (
        <div className="flex items-center flex-col-reverse md:flex-row">
            {
                user && user?.email ? (user.email) : ("")
            }

            <div className="flex-1">
                <Link to="/"><h1 className="text-4xl text-gray-700 text-center font-bold w-max mx-auto border-b-2 pb-5">Frikly PROFESSIONAL</h1></Link>
            </div>
            {
                user && user?.email ? (<button onClick={logOut} className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Log out</button>) : (
                    <Link to="/login"><button className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Login</button></Link>
                )
            }
        </div>
    );
};

export default Navbar;