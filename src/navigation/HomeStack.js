import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home'


const HomeStack = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}
export default HomeStack
