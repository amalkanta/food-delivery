import React from 'react';
import Navbar from '../components/nav-bar/nav-bar';
import Menubar from '../components/menu-bar';
import FoodsDashboard from '../foods-dashboard';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import OrdersHistory from '../orders-history';
import AddressManagement from '../address-management';

const Dashboard = (props)=>{
    return (
        <div>
            <Navbar />
            <Menubar />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ FoodsDashboard } />
                        {/* <FoodsDashboard />
                    </Route> */}
                    <Route exact path='/foods' component={ FoodsDashboard } />
                        {/* <FoodsDashboard />
                    </Route> */}
                    <Route exact path='/history' component={ OrdersHistory } />
                        {/* <OrdersHistory />
                    </Route> */}
                    <Route exact path='/address' component={ AddressManagement } />
                        {/* <AddressManagement />
                    </Route> */}
                </Switch>
            </BrowserRouter>
                    
        </div>        
    )
} 

export default Dashboard;