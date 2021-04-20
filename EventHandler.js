
const iName = document.getElementById("FirstName")
const iLastName = document.getElementById("FirstName")
const iEmail = document.getElementById("FirstName")
const iUserID = document.getElementById("FirstName")
const iCountry = document.getElementById("FirstName")
const iState = document.getElementById("FirstName")
const iCity = document.getElementById("FirstName")
const iPhone = document.getElementById("FirstName")
const iRef = document.getElementById("FirstName")

//How event listener are added
iName.addEventListener("focusout", NameChangeHandler)

const NameChangeHandler = function(event) {
    let value = event.target.value

    if (value==""){
        alert('This field is required')
    }
    if (validateText(value)){

    }
    else{
        alert("Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number.")

    }
    console.log(event.target.value)
}
const UsernameChangeHandler = function (event){
    let value = event.target.value
    if (value==""){
        alert('This field is required')
    }
    if (validateUsername(value)){

    }
    else{
        alert("Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number.")

    }
}
const PasswordChangeHandler = function(event) {
    let value = event.target.value
    if (value==""){
        alert('This field is required')
    }
    if (validatePassword(value)){

    }
    else{
        alert("Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number.")

    }
}
const PhoneChangeHandler = function(event) {
    let value = event.target.value
    if (value==""){
        alert('This field is required')
    }
    if (validateNumber(value)){

    }
    else{
        alert('Please enter your phone number in the format xxx-xxxx')
        // document.focusNode(event.target)
    }
}

const EmailChangeHandler = function(event) {
    let value = event.target.value
    if (value==""){
        alert('This field is required')
    }

    if (validateEmail(value)){

    }
    else{
        alert('Please enter a valid email address')
        // event.target.valid(false)
        // document.focusNode(event.target)
    }
}