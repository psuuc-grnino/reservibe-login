const userUname = "MissKyeopta";
const userPass = "S1y4L4NG#sapatN4";
const btnLogin = document.querySelector('#btnLogin');
function checkCredentials(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username == userUname && password == userPass){
        alert ("Successfully Login!");
    }
    else {
        alert("Invalid Username or Password")
    }
}

btnLogin.addEventListener('click', checkCredentials);
