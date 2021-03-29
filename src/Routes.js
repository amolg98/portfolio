import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Education from "./pages/Education";
import Intro from "./pages/Intro";
import Layout from "./components/Layout";

function Routes() {
    return(
        <Router>
            <Route render={(props)=>(
                <Layout {...props}>
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/education" component={() => <Education />} />
                        <Route path="/intro" component={() => <Intro />} />
                        <Route render={() => <h1>Page not found</h1>} />
                    </Switch>
                </Layout>
            )}/>
        </Router>
    )
}

export default Routes;