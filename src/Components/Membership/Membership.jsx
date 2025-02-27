import { IoBed } from "react-icons/io5";
import { TbSettingsCode,TbTruckDelivery  } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { Link } from "react-router-dom";


const Membership = () => {
    return (
        <div className="">
            {/* div-1 */}
            <div className="flex items-center gap-5 bg-gray-100 flex-col-reverse md:flex-row my-3 p-8">
                <div className="text-center space-y-5 p-5">
                    <h1 className="text-2xl text-orange-500 font-bold">Membership - just for you!</h1>
                    <h3 className="text-xl">An honour,you made it to Frikly!</h3>
                    <p className="max-w-2/3 mx-auto">
                        &#39;Frikly Memberships&#39;, a step ahead of everyone - it&#39;s a premium club only for Professionals like you. It is the place to gain access to the inaccessible, to
                        discover rare finds, to be the first to receive news and offers for your chosen projects.</p>
                    <Link to="/register"><button onClick={()=>{window.scrollTo(0,0)}} className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Become a member</button></Link>
                </div>
                <div>
                    <img className="rounded-full max-h-svh w-full" src="https://designage.com.bd/wp-content/uploads/2023/08/Sofa-With-Divan.png" alt="" />
                </div>
            </div>
            {/* div-2 */}
            <div className="flex items-center gap-5 bg-gray-100 flex-col md:flex-row my-3 p-8">
                <div>
                    <img className="rounded-full max-h-svh w-full" src="https://image.made-in-china.com/2f0j00qzERbZBFYluU/Home-Single-Sofa-Chair-Optional-Color-Fabric-Living-Room-Chairs.jpg" alt="" />
                </div>
                <div className="text-center space-y-5 p-5">
                    <h1 className="text-2xl text-orange-500 font-bold">Frikly is a one-stop destination for everything a home needs and assists anyone, anywhere, to get the feel just like home.</h1>
                    <p className="max-w-2/3 mx-auto">Explore and purchase a variety of designs, and categories to suit your needs. We are bringing furniture, home decor, interior and renovation products from all across the world and getting them
                        delivered to you and your clients.</p>
                    <button className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Explore Frikly.com</button>
                </div>
            </div>
            {/* div-3 */}
            <div className="flex items-center gap-5 bg-gray-100 flex-col-reverse md:flex-row my-3 p-8">
                <div className="text-center space-y-5 p-5">
                    <h1 className="text-2xl text-orange-500 font-bold">Business
                        Pricing
                        For Professionals</h1>
                    <p className="max-w-2/3 mx-auto">Prikly Professionals members receive business-pricing, which lowers the price of millions of products, allowing professionals to scale back the budget of your projects. This price change is only available to Pros, so it won&#39;t take effect unless
                        you register yourself as a pro member.</p>
                    <button className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Become a Pro member</button>
                </div>
                <div>
                    <img className="rounded-full max-h-svh w-full" src="https://swyfthome.com/cdn/shop/articles/Swfyt_Model_02_Vine_coloured_sofa.jpg?v=1727880886&width=1100" alt="" />
                </div>
            </div>
            <div className="items-center bg-gray-100 space-y-5 my-3 p-8">
                <h1 className="text-2xl text-center text-orange-500 font-bold">What we offer at Frickly Professional</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="text-center space-y-3 p-2 flex flex-col justify-center items-center">
                        <IoBed className="text-9xl"/>
                        <h1 className="text-xl font-bold">Wonderful Collection</h1>
                        <p>
                            Grab your favorites, that suit your taste from
                            a vast array of options</p>
                    </div>
                    <div className="text-center space-y-3 p-2 flex flex-col justify-center items-center">
                        <TbSettingsCode className="text-9xl"></TbSettingsCode>
                        <h1 className="text-xl font-bold">Customized Service</h1>
                        <p>Acclerate the process through our customized service</p>
                    </div>
                    <div className="text-center space-y-3 p-2 flex flex-col justify-center items-center">
                        <MdDiscount className="text-9xl"></MdDiscount>
                        <h1 className="text-xl font-bold">Exclusive Cupons</h1>
                        <p>Get your own promo codes to get exclusive discounts and rewards</p>
                    </div>
                    <div className="text-center space-y-3 p-2 flex flex-col justify-center items-center">
                        <TbTruckDelivery className="text-9xl"/>
                        <h1 className="text-xl font-bold">Quick Delivery</h1>
                        <p>Fasten the pace of your project with our quick delevery service of Frickly</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;