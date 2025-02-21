

const Banner = () => {
    return (
        <div className="relative my-3">
            <div className="relative bg-[#60887d] brightness-50">
                <img className="mx-auto " src="https://static.vecteezy.com/system/resources/thumbnails/043/212/303/small_2x/sofa-in-living-room-with-table-rug-plant-and-lamp-png.png" alt="" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-6">
                <h1 className="text-4xl text-white text-center font-bold">Frikly Professional is designed to help <br /> <span className="text-orange-500">Professionals</span> like you</h1>
                <button className="btn bg-orange-500 border-none text-white shadow-2xl shadow-black rounded-xl">Join Now</button>
            </div>
        </div>
    );
};

export default Banner;