import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index';
import CreatPoint from './pages/CreatPoint/index'
import CreatSystem from './pages/CreatSystem/index';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatPoint} path="/creat-point"/>
            <Route component={CreatSystem} path="/creat-system"/>
            
        </BrowserRouter>
    )
}

export default Routes;