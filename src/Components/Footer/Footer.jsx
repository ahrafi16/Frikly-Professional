import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#46635b] p-6">
            <div className="p-3 bg-white rounded-3xl space-y-6">
                <div className="flex justify-around items-center border-b border-gray-400">
                    <div>
                        <h1 className="text-2xl font-semibold">Frickly Professional</h1>
                    </div>
                    <div>
                        <h3 className="text-orange-500">Contact</h3>
                        <p>info@frickly.com</p>
                        <p>+900165456445</p>
                    </div>
                </div>
                <div className="flex justify-around items-center">
                    <div>
                        <p>Frikly is a one-stop destination for everthing a home needs and <br /> assists anyone, anywhere, to get the feel just like your home.</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3">
                        <FaFacebookF></FaFacebookF>
                        <FaInstagram ></FaInstagram>
                        <FaTwitter  ></FaTwitter>
                        <FaLinkedin   ></FaLinkedin>
                    </div>
                </div>
                <div className="text-center">
                    <p>© Copyright 2025 by Anjum Hossain</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;