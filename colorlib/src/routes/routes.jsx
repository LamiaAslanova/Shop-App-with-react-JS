import AdminRoot from '../pages/admin/AdminRoot'
import Home from '../pages/site/Home/Home'
import SiteRoot from '../pages/site/SiteRoot'
import Dashboard from '../pages/admin/Dashboard/Dashboard'
import Add from '../pages/admin/Add/Add'
import Basket from '../pages/site/Basket/Basket'

const ROUTES = [{
    path: '/',
    element: <SiteRoot/>,
    children: [
        {
            path: '',
            element: <Home/>
        },
        {
            path: 'basket',
            element: <Basket/>
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