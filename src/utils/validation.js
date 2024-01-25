import { Route } from "react-router-dom";

export function validateFrom(pass , email , name)
{
    // this will return true or false 
    const isValidEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidpass = /^(?=.*[A-Z])(?=.*[\W_])(.{6,})$/.test(pass)
    const isValidName = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name)
    if(!isValidName) return "Enter a valid Name"
    if(!isValidEmail) return "Enter a valid Email";
    if(!isValidpass) return "Enter a valid Password ";

    return null
}
