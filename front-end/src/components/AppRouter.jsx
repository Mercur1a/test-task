import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import ShowProductsAlt from '../pages/ShowProductsAlt';
import AddProductAlt from '../pages/AddproductsAlt';

const AppRouter = () => {
    return (
        <Switch>
            {/* <Route exact path='/'>
                <ShowProducts/>
            </Route> */}
            <Route exact path='/'>
                <ShowProductsAlt/>
            </Route>
            <Route exact path='/add-product'>
                <AddProductAlt/>
            </Route>
            {/* <Route exact path='/add-productAlt'>
                <AddProductAlt/>
            </Route> */}
            <Redirect to='/'/>
        </Switch>
    );
};

export default AppRouter;