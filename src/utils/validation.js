

export function validateFrom(pass , email )
{
    // this will return true or false 
    const isValidEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isValidpass = /^(?=.*[A-Z])(?=.*[\W_])(.{6,})$/.test(pass)

    if(!isValidEmail) return "Enter a valid Email";
    if(!isValidpass) return "Enter a valid Password ";

    return null
}


