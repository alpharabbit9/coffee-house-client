import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { Name, photo, chef, details, category , price  , taste } = coffee;

     const HandleSubmit = (e) => {

        e.preventDefault();

        const form = e.target ;
        const Name = form.coffee_name.value;
        const chef = form.chef_name.value  ;
        const price = form.price.value;
        const taste  = form.taste.value ;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const coffeeItem = {Name,chef,price,taste,category,details,photo};

        console.log(coffeeItem);

        fetch('http://localhost:5000/coffees',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(coffeeItem)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId)
            {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Coffee added successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

            form.reset();
        })

        

    }

   
    return (
        <div className="p-12">

            <Link to={'/'}> <button className="btn btn-outline rounded-3xl border border-[#331A15]">Back to Home</button></Link>

            <div className="text-center mt-6 text-[#331A15] p-12 bg-[#F4F3F0]">
                <h3 className="text-3xl font-bold">Update Coffee : {Name}</h3>
                <p className="text-xs w-8/12 mx-auto  mt-3 mb-3">
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>

                <div className="py-6 px-10">
                    <form onSubmit={HandleSubmit}>
                        {/* 1st row */}
                        <div className="md:flex gap-3 mt-3 mb-3">
                            <input
                                type="text"
                                placeholder="Coffee Name" name="coffee_name" defaultValue={Name}
                                className="input input-bordered border-amber-950 rounded-3xl input-primary w-full max-w-lg" />

                            <input
                                type="text"
                                placeholder="Chef Name" name="chef_name" defaultValue={chef}
                                className="input input-bordered input-primary w-full max-w-lg border-amber-950 rounded-3xl" />

                        </div>

                        {/* 2nd row */}
                        <div className="md:flex gap-3 mt-3 mb-3">
                            <input
                                type="text"
                                placeholder="price" name="price" defaultValue={price}
                                className="input input-bordered border-amber-950 rounded-3xl input-primary w-full max-w-lg" />

                            <input
                                type="text"
                                placeholder="Taste" name="taste" defaultValue={taste}
                                className="input input-bordered input-primary w-full max-w-lg border-amber-950 rounded-3xl" />

                        </div>
                        {/* 3rd row */}
                        <div className="md:flex gap-3 mt-3 mb-3">
                            <input
                                type="text"
                                placeholder="Category" name="category" defaultValue={category}
                                className="input input-bordered border-amber-950 rounded-3xl input-primary w-full max-w-lg" />

                            <input
                                type="text"
                                placeholder="Details" name="details" defaultValue={details}
                                className="input input-bordered input-primary w-full max-w-lg border-amber-950 rounded-3xl" />

                        </div>
                        <div className="md:flex gap-3 mt-3 mb-3">
                            <input
                                type="text"
                                placeholder="Photo URL" name="photo" defaultValue={photo}
                                className="input input-bordered border-amber-950 rounded-3xl input-primary w-full " />

                        </div>

                        <input type="submit" className="btn btn-block rounded-3xl text-white bg-[#331A15]" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default UpdateCoffee;