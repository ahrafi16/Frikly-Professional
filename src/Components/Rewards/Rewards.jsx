import { LuHandshake } from "react-icons/lu";
import { FaHandHoldingMedical } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaHandshake } from "react-icons/fa6";
const Rewards = () => {
    return (
        <div>
            <div className="bg-gray-100 my-3 p-8">
                <div className="text-center space-y-5 p-5">
                    <h1 className="text-2xl  ">Grab the <span className="text-4xl text-orange-500 font-bold">Rewards</span> now</h1>
                    <h3 className="text-xl">Every purchase made by you or your client wins you Amazing Rewards!</h3>
                    <p className="max-w-2/3 mx-auto">When you or your client purchases any product on Frikly, you will receive amazing rewards which you can redeem to get access to curated products and services.</p>
                    <button className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Explore Rewards</button>
                </div>
            </div>
            <div className="bg-gray-100 my-3 p-8">
                <div className="text-center space-y-5 p-5">
                    <h1 className="text-2xl  font-bold text-orange-500">Rewards from Brands you love</h1>
                    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 cursor-pointer">
                        <img className="border p-2  h-40 w-full object-fit duration-500 transform transition hover:scale-110" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kalyan_Jewellers_logo.svg/1200px-Kalyan_Jewellers_logo.svg.png" alt="KALYAN" />
                        <img className="border p-2 h-40 w-full object-fit duration-500 transform transition hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-t2vupzV3g2PG8G6TA4krH9Y3awriH_bkA&s" alt="Puma" />
                        <img className="border p-2 h-40 w-full object-fit duration-500 transform transition hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWtnFja-5lIzY08nHzp9KxFO2AiH8pJWRlg&s" alt="Hyatt" />
                        <img className="border p-2 h-40 w-full object-fit duration-500 transform transition hover:scale-110" src="https://cdn.iconscout.com/icon/free/png-256/free-nykaa-logo-icon-download-in-svg-png-gif-file-formats--cosmetics-makeup-beauty-fashion-care-brand-pack-logos-icons-2822953.png" alt="Nykaa" />
                        <img className="border p-2 h-40 w-full object-fit duration-500 transform transition hover:scale-110" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYXRuY0oW6eQUqwAYuIoP5NnEdZUrG5xMXw&s" alt="MK" />
                        <img className="border p-2 h-40 w-full object-fit duration-500 transform transition hover:scale-110" src="https://www.dlfmallofindia.com/Assets/stores/croma-log.png" alt="croma" />
                        <img className="border p-2 h-40 w-full object-fit duration-500 transform transition hover:scale-110" src="https://bsmindia.com/wp-content/uploads/2023/12/Untitled-design-4.png" alt="Clut.fit" />
                        <img className="border p-2 h-40 w-full object-fit duration-500 transform transition hover:scale-110" src="https://pbs.twimg.com/profile_images/1675875653302861825/HgOwqi1l_400x400.jpg" alt="Taj" />
                    </div>
                </div>
            </div>
            <div className=" my-3 p-8">
                <div className="text-center space-y-5 p-5">
                    <h1 className="text-2xl  font-bold text-orange-500">Samrt tools exxlusively Designed for Professionals</h1>
                    <div className="grid grid-cols-2 gap-10 md:grid-cols-4 cursor-pointer">
                        <div className="text-center flex flex-col justify-center items-center space-y-3">
                            <LuHandshake className="text-9xl p-2 w-full text-white rounded-xl bg-[#46635b]" />
                            <h3 className="font-bold text-xl">Design Assistance</h3>
                            <p>Get expert assistance in creating a brand, improving the overall display of your product to attract customers.</p>
                        </div>
                        <div className="text-center flex flex-col justify-center items-center space-y-3">
                            <FaHandHoldingMedical className="text-9xl p-2 w-full text-white rounded-xl bg-[#46635b]" />
                            <h3 className="font-bold text-xl">Tools for assisting projects</h3>
                            <p>With our smart tools, keep track of the latest prices and best selling products, create product lists and much more.</p>
                        </div>
                        <div className="text-center flex flex-col justify-center items-center space-y-3">
                            <SiMaterialdesignicons className="text-9xl p-2 w-full text-white rounded-xl bg-[#46635b]" />
                            <h3 className="font-bold text-xl">Design Assistance</h3>
                            <p>Get expert assistance in creating a brand, improving the overall display of your product to attract customers.</p>
                        </div>
                        <div className="text-center flex flex-col justify-center items-center space-y-3">
                            <FaHandshake className="text-9xl p-2 w-full text-white rounded-xl bg-[#46635b]" />
                            <h3 className="font-bold text-xl">Work Together</h3>
                            <p>Access the same window and work simultaneously using the multiple IDs made for you and your team.</p>
                        </div>
                    </div>
                    <div className="mt-4 space-y-3">
                        <h1 className="font-bold text-4xl">Welcome Home!</h1>
                        <button className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewards;