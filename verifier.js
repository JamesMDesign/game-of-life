function verifier(password) {
    if(password.length < 8){
        return "password should be longer than 8 characters";
    } else if (password.length >= 8) {
        return "password meets the minimum length requirement";
    } else if (password === password.toLowerCase()) {
        return "password should contain at least one uppercase letter";
    }
}

export { verifier }