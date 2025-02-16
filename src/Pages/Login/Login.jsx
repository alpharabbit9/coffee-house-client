import { Link } from 'react-router-dom';
import './Login.css'
import { FaGoogle } from 'react-icons/fa6';

const Login = () => {
    const HandleSubmit = (e) =>{
        e.preventDefault();

        const  form = e.target ;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);
    }

    return (
        <div className='bg font-rancho text-yellow-950 h-screen flex justify-between'>
            <div className='w-1/2'>

            </div>
            <div className=' py-20  w-1/2'>
            <Link to={'/'}> <button className="btn btn-outline rounded-3xl mb-3 border border-[#331A15]">Back to Home</button></Link>
                <div className="text-center lg:text-left  ">
                    <h1 className="text-5xl font-bold text-center">Sign in now!</h1>
                    <p className="py-6 text-center">
                        Brewing Fresh Beginnings – Sign in to Savor the Experience

                    </p>
                </div>
                <div className="card    md:mx-auto py-12  shadow-2xl">
                    <form onSubmit={HandleSubmit} className="card-body">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mr-2">Email</span>
                            </label>
                            <br />
                            <input name='email' type="email" placeholder="email" className="input input-bordered rounded-2xl mt-3 mb-3 w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mr-2">Password</span>
                            </label>
                            <br />
                            <input name='password' type="password" placeholder="password" className="input input-bordered rounded-2xl mt-3 mb-3 w-full" required />
                            <br />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                <br />
                               <p className='ml-2'>New here ? <Link to={'/register'}>Sign Up</Link></p> 
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#6F4E37] text-white">Sign in</button>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-outline text-[#6F4E37]"><FaGoogle></FaGoogle>Log in with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;