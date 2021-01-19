import React, {Component} from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';


//Components
import login from './login.js';
import Recovery from './Recovery.js'

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component = {login} />
                    <Route exact path="/login" component = {login} />
                    <Route exact path="/Recovery" component = {Recovery} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;