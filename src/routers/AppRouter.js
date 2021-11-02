import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import AccountPage from '../pages/AccountPage'
import ProductsPage from '../pages/admin/ProductsPage'
import UsersPage from '../pages/admin/UsersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import MarketPage from '../pages/MarketPage'
import NotFoundPage from '../pages/NotFoundPage'
import RegisterPage from '../pages/RegisterPage'

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path ='/' component={HomePage} />
                    <Route exact path ='/login' component={LoginPage} />
                    <Route exact path ='/register' component={RegisterPage} />
                    <Route exact path ='/account' component={AccountPage} />
                    <Route exact path ='/market' component={MarketPage} />
                    <Route exact path ='/admin/users' component={UsersPage} />
                    <Route exact path ='/admin/products' component={ProductsPage} />
                    
                    <Route path ='*' component={NotFoundPage} />
                    
                </Switch>
            </Layout>
        </Router>
    )
}