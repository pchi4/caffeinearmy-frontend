import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/auth";

export default function NotFound() {
    let history = useHistory();

    function redirectTo(e) {
        e.preventDefault();
        history.push('/')
        logout()
    }

    return (
        <div className="text-dark">
            <div className="container text-center vh-100 m-auto py-5">
                <div className="display-1"><strong>404</strong></div>
                <img src="/not-found.jpg" className="img-fluid mt-5" alt="error" />
                <h5 className="text-dark mt-5">Page not found</h5>
                <div className="mt-5"><button className="btn btn-info" onClick={redirectTo} >Home Page</button></div>
            </div>
        </div>
    )
}