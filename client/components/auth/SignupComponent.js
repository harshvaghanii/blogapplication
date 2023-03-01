import { Fragment } from "react";
import { useState } from "react";
import { signup } from "../../actions/auth";

const SignupComponent = () => {
    const [values, setValues] = useState({
        name: "Ryan",
        email: "ryan@gmail.com",
        password: "rrrrrr",
        error: "",
        loading: false,
        message: "",
        showForm: true,
    });

    const { name, email, password, error, loading, message, showForm } = values;

    const handleChange = (name) => (e) => {
        setValues({
            ...values,
            [name]: e.target.value,
            error: false,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });
        const user = { name, email, password };
        signup(user).then((data) => {
            console.log(data);
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                    loading: false,
                    message: data.message,
                    showForm: false,
                });
            }
        });
    };

    const showLoading = () =>
        loading ? <div className="alert alert-info">Loading...</div> : "";
    const showError = () =>
        error ? <div className="alert alert-danger">{error}</div> : "";
    const showMessage = () =>
        message ? <div className="alert alert-info">{message}</div> : "";

    return (
        <Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            value={name}
                            onChange={handleChange("name")}
                            type="text"
                            className="form-control"
                            placeholder="Type your name"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            value={email}
                            onChange={handleChange("email")}
                            type="email"
                            className="form-control"
                            placeholder="Type your email"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            value={password}
                            onChange={handleChange("password")}
                            type="password"
                            className="form-control"
                            placeholder="Type your password"
                        />
                    </div>

                    <div>
                        <button className="btn btn-primary">Signup</button>
                    </div>
                </form>
            )}
        </Fragment>
    );
};

export default SignupComponent;
