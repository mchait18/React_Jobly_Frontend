import React, { useState } from "react";
import Alert from "../common/Alert";
import { useHistory } from "react-router-dom";

function LoginForm({ login }) {
    const history = useHistory();
    const INITIAL_STATE = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);

    // console.debug(
    //     "LoginForm",
    //     "login=", typeof login,
    //     "formData=", formData,
    //     "formErrors=", formErrors,
    // );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let result = await login(formData)
        if (result.success) {
            history.push("/")
        }
        else {
            setFormErrors(result.errors);
        }
        setFormData(INITIAL_STATE)

    }
    //if form is submitted, redirect to home page. Otherwise, load form
    return (
        <div className="LoginForm">
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <h2 className="mb-3">Log in</h2>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    name="username"
                                    className="form-control"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>

                            {formErrors.length
                                ? <Alert type="danger" messages={formErrors} />
                                : null
                            }
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                                onSubmit={handleSubmit}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default LoginForm;