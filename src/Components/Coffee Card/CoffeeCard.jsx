/* eslint-disable react/prop-types */

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, Name, photo, chef, price } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const updatedCoffees = coffees.filter(c => c._id !== _id);
                            setCoffees(updatedCoffees);

                        }
                    })
            }
        });
    }
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
                    <Link to={`/coffeeDetails/${_id}`}>
                        <button className="btn bg-[#331A15] text-white"><FaEye></FaEye></button>
                    </Link>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn bg-blue-900 text-white"><FaEdit></FaEdit></button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-800 text-white"><FaTrash></FaTrash></button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;