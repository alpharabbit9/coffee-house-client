
import { createBrowserRouter } from 'react-router-dom';

import Root from '../Layout/Root';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Regsiter/Register';
import CoffeeDetails from '../Components/CoffeeDetails';
import UpdateCoffee from '../Components/UpdateCoffee';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'addCoffee',
                element:<AddCoffee></AddCoffee>
            },
            {
                path:'coffeeDetails/:id',
                element:<CoffeeDetails></CoffeeDetails>,
                loader:({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path:'updateCoffee/:id',
                element:<UpdateCoffee></UpdateCoffee>,
                loader:({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            }
        ]
    },
    {
        path:'login',
        element:<Login></Login>
    },
    {
        path:'register',
        element:<Register></Register>
    }
])

export default Router;