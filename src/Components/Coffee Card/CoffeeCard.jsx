/* eslint-disable react/prop-types */

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";


const CoffeeCard = ({ coffee }) => {

    const { Name  , photo ,chef , price  } = coffee;
    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl transform transition-transform duration-300 hover:scale-105">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body  text-left py-12 text-[#331A15]">
                <h2 className="card-title mb-3">Name : {Name}</h2>
                <p>Chef: {chef}</p>
                <p>Price : {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#331A15] text-white"><FaEye></FaEye></button>
                    <button className="btn bg-blue-900 text-white"><FaEdit></FaEdit></button>
                    <button className="btn bg-red-800 text-white"><FaTrash></FaTrash></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;