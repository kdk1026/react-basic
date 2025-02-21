import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
    return cookies.set(name, value, {...options});
};

export const getCookie = (name) => {
    // Array 혹은 OBject면 JSON.parse(name) 자동으로 해줌
    return cookies.get(name);
}

export const removeCookie = (name, options) => {
    return cookies.remove(name, {...options});
}

export const setArrayInCookie = (name, array, options) => {
    if ( Array.isArray(array) && array.length > 0 ) {
        //JSON.stringify(array) 자동으로 해줌
        setCookie(name, array, {...options});
    }
};

export const setObjectInCookie = (name, object, options) => {
    if ( Object.keys(object).length > 0 ) {
        //JSON.stringify(object) 자동으로 해줌
        setCookie(name, object, {...options});
    }
}
