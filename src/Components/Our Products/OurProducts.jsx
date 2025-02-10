import { useEffect, useState } from "react";
import CoffeeCard from "../Coffee Card/CoffeeCard";
import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";


const OurProducts = () => {

    const [coffees , setCoffees] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/coffees')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setCoffees(data);
        })
    },[])
    return (
        <div className="mt-8 mb-6">

            <div className="text-center mt-6 mb-6 w-11/12 mx-auto ">
                <p className="text-[#331A15]">--- Sip & Savor --- </p>
                <h3 className=" mt-3 mb-3 font-bold text-3xl text-[#331A15]">Our Popular Products </h3>
                <Link  to={'/addCoffee'}><button className="btn bg-[#331A15] text-white"><FaCoffee></FaCoffee>Add Coffee</button></Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-12 mb-12">

                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default OurProducts; 