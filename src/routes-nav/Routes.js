import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Home from "../home/Home";
import CompanyList from "../companies/CompanyList"
import JobList from "../jobs/JobList"
import LoginForm from "../auth/LoginForm"
import PrivateRoute from "./PrivateRoute";
import SignupForm from "../auth/SignupForm"
import ProfileForm from "../ProfileForm"
import CompanyDetail from "../companies/CompanyDetail"

function Routes({ login, signup }) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>
                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>
                <PrivateRoute exact path="/companies">
                    <CompanyList />
                </PrivateRoute>
                <PrivateRoute exact path="/jobs">
                    <JobList />
                </PrivateRoute>
                <PrivateRoute exact path="/companies/:handle">
                    <CompanyDetail />
                </PrivateRoute>
                <PrivateRoute path="/profile">
                    <ProfileForm />
                </PrivateRoute>
                <Redirect to="/" />
            </Switch>
        </main>
    )
}
export default Routes