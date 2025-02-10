import banner from '../assets/images/more/3.png';

const Banner = () => {
    return (
        <div className="relative ">
            {/* Banner Image */}
            <img src={banner} alt="Coffee Banner" className="w-full h-full object-cover" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Coffee Quote (Right Aligned) */}
            <div className="absolute inset-0 flex items-center justify-end text-white  ">
                <div>
                    <h6 className="text-xl font-rancho md:text-3xl font-bold max-w-lg pr-10">
                        Would you like a Cup of Delicious Coffee ?
                    </h6>
                    <p className='text-xs  mt-2 mb-2'>It's coffee time - Sip & Savor - Relaxation in every sip!</p>
                    <button className='btn bg-orange-300'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
