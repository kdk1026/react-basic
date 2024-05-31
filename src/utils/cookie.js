import { Cookies } from "react-cookie";

const cookies = new Cookies();

const cookieUtil = {
    setCookie: (name, value, options) => {
        return cookies.set(name, value, {...options});
    },

    getCookie: (name) => {
        return cookies.get(name);
    },

    removeCookie: (name) => {
        return cookies.remove(name);
    },
};

export {cookieUtil};