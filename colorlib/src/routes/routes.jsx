import AdminRoot from '../pages/admin/AdminRoot'
import Home from '../pages/site/Home/Home'
import SiteRoot from '../pages/site/SiteRoot'
import Dashboard from '../pages/admin/Dashboard/Dashboard'
import Cart from '../pages/site/Cart/Cart'
import Add from '../pages/admin/Add/Add'

const ROUTES = [{
    path: '/',
    element: <SiteRoot/>,
    children: [
        {
            path: '',
            element: <Home/>
        },
        {
            path: 'cart',
            element: <Cart/>
        }
    ]
},
{
    path: '/admin',
    element: <AdminRoot/>,
    children: [
        {
            path: '',
            element: <Dashboard/>
        },
        {
            path: 'add',
            element: <Add/>
        }
    ]
}]

export default ROUTES