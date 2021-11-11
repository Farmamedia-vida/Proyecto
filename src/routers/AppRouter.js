import { Switch, Route} from 'react-router-dom'
import roles from '../helpers/roles'
import routes from '../helpers/routes'
import AccountPage from '../pages/AccountPage'
import ProductsPage from '../pages/admin/ProductsPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MarketPage from '../pages/MarketPage'
import NotFoundPage from '../pages/NotFoundPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function AppRouter() {
    return (
        
                <Switch>
                    <Route exact path ={routes.home} component={HomePage} />
                    <PublicRoute exact path ={routes.login} component={LoginPage} />
                    <PublicRoute exact path ={routes.register} component={RegisterPage} />
                    <PrivateRoute exact path ={routes.account} component={AccountPage} />
                    <PublicRoute exact path ={routes.market} component={MarketPage} />
                    <PrivateRoute hasRole={roles.admin} exact path ={routes.admin.users} component={UsersPage} />
                    <PrivateRoute hasRole={roles.admin} exact path ={[routes.admin.products]} component={ProductsPage} />
                    
                    <Route path ='*' component={NotFoundPage} />
                    
                </Switch>
       
    )
}