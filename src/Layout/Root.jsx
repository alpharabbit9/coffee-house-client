import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer";




const Root = () => {
    return (
        <div className="w-11/12 mx-auto font-rancho">
            <header>

             

                <Navbar></Navbar>

            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;