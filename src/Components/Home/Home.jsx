import Banner from "../Banner/Banner";
import Membership from "../Membership/Membership";
import Navbar from "../Navbar/Navbar";
import Rewards from "../Rewards/Rewards";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Membership></Membership>
            <Rewards></Rewards>
        </div>
    );
};

export default Home;