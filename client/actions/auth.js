import fetch from "isomorphic-fetch";
import { API } from "../config";
const cookie = require("js-cookie");

// Signup

export const signup = (user) => {
    return fetch(`${API}/api/user/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });
};

// Login Method

export const login = (user) => {
    return fetch(`${API}/api/user/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });
};

// Logout Functionality

export const logout = (next) => {
    removeCookie("token");
    removeLocalStorage("user");
    next();

    return fetch(`${API}/api/user/logout`, {
        method: "GET",
    }).then((response) => {
        console.log("Logged Out Successfully!");
    })
    .catch(err => console.log(err))
    ;
};

// Set Cookie

export const setCookie = (key, value) => {
    if (typeof window) {
        cookie.set(key, value, {
            expires: 1,
        });
    }
};

export const removeCookie = (key) => {
    if (typeof window) {
        cookie.remove(key);
    }
};

// Get Cookie

export const getCookie = (key) => {
    if (typeof window) {
        const token = cookie.get(key);
        return token;
    } else {
        return false;
    }
};

// Local Storage

export const setLocalStorage = (key, value) => {
    if (typeof window) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = (key) => {
    if (typeof window) {
        localStorage.removeItem(key);
    }
};

// Authenticate user by pass data to cookie and localstorage

export const authenticate = (data, next) => {
    setCookie("token", data.token);
    setLocalStorage("user", data.user);
    next();
};

export const isAuth = () => {
    if (typeof window) {
        const cookieChecked = getCookie("token");
        if (cookieChecked) {
            if (localStorage.getItem("user")) {
                return JSON.parse(localStorage.getItem("user"));
            } else {
                return false;
            }
        }
    }
};
