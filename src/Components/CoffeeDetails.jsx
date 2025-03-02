
import { Link, useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {

    const coffee = useLoaderData();

    const {  Name, photo, chef, details , category } = coffee;


    return (
        <div className="p-20">

            <Link to={'/'}> <button className="btn btn-outline rounded-3xl border border-[#331A15]">Back to Home</button></Link>
            <div className="flex justify-center items-center">

                <div className="flex md:justify-around items-center p-8 bg-[#F4F3F0] mt-3 w-full">

                    <div>
                        <img src={photo} alt="" />
                    </div>
                    <div>
                        <h4 className="text-3xl font-semibold">{category}</h4>
                        <p>Name : {Name}</p>
                        <p>Chef :{chef}</p>
                        <p>Category : {category}</p>
                        <p>Details : {details}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CoffeeDetails;