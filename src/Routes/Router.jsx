
import { createBrowserRouter } from 'react-router-dom';

import Root from '../Layout/Root';
import Home from '../Pages/Home';
import AddCoffee from '../Pages/AddCoffee';

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
            }
        ]
    }
])

export default Router;