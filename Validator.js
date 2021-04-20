
function validateEmail(email) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}/g;
    return regex.test(email)
}

function validateNumber(number) {
    //REGEXP for format of number 000-0000
    // let len = number.length
    // for (let i = 0; i < len; i++) {
    //     if (i==3&&number[i]=='-'){
    //         continue
    //     }
    //     if (!typeof number[i] ==="number"){
    //         return false
    //     }
    //
    // }
    // return true

    let regex = /^[0-9]+-[0-9]+$/i;
    return regex.test(number)
}

function validateText(text){
    if (/[!@#\$%\^\&*\)\(+=._-]/.test(text)){
        return false
    }
    if (/[0-9]/.test(text)){
        return false;
    }
    return true
}

function validatePassword(password){
    if(password.length>8 && password.length<30){
        let numeric=0
        let UpperCase=0
        let LowerCase=0
        let Special=0
        if (/[0-9]/.test(password)){
            numeric++
        }
        if (/[A-Z]/.test(password)) {
            UpperCase++
        }
        if (/[a-z]/.test(password)){
            LowerCase++
        }
        if (/[!@#\$%\^\&*\)\(+=._-]/.test(password)){
            Special++
        }

        if (numeric>0&&UpperCase>0&&LowerCase>0&&Special>0){
            console.log("Values %d %d %d %d",numeric,UpperCase,LowerCase,Special)
            return true
        }
    }
    return false
}
function validateUsername(name) {

    return !/[!@#\$%\^\&*\)\(+=]/.test(name);


}

//First have to assign elements to variables
