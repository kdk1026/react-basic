import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, isLocal, options) => {
    const shouldUseSecure = !isLocal;
    const updatedOptions = { 
        ...options, 
        ...(shouldUseSecure && { secure: true }) 
    };
    return cookies.set(name, value, updatedOptions);
};

export const getCookie = (name) => {
    // Array 혹은 OBject면 JSON.parse(name) 자동으로 해줌
    return cookies.get(name);
}

export const removeCookie = (name, isLocal, options) => {
    const shouldUseSecure = !isLocal;
    const updatedOptions = { 
        ...options, 
        ...(shouldUseSecure && { secure: true }) 
    };
    return cookies.remove(name, updatedOptions);
}

export const setArrayInCookie = (name, array, isLocal, options) => {
    if ( Array.isArray(array) && array.length > 0 ) {
        const shouldUseSecure = !isLocal;
        const updatedOptions = { 
            ...options, 
            ...(shouldUseSecure && { secure: true }) 
        };
        //JSON.stringify(array) 자동으로 해줌
        setCookie(name, array, updatedOptions);
    }
};

export const setObjectInCookie = (name, object, isLocal, options) => {
    if ( Object.keys(object).length > 0 ) {
        const shouldUseSecure = !isLocal;
        const updatedOptions = { 
            ...options, 
            ...(shouldUseSecure && { secure: true }) 
        };
        //JSON.stringify(object) 자동으로 해줌
        setCookie(name, object, updatedOptions);
    }
}
