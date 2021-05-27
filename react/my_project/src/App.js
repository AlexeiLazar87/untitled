import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/Users";

export default function App() {
    let UsersDetails;
    return (
        <Router>
            <div>
                <Link to={'/users'}>users</Link>

                <Switch>
                    <Route exact path={'/users'} component={Users}/>
                    <Route exact path={'/users:id'} component={UsersDetails}/>
                </Switch>
            </div>
        </Router>
    );
}