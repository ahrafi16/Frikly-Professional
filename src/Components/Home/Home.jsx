import Banner from "../Banner/Banner";
import Membership from "../Membership/Membership";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Membership></Membership>
        </div>
    );
};

export default Home;