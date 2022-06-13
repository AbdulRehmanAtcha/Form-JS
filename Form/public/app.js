
function show(){
    var error1 = document.getElementById("f-name-error");
    var error2 = document.getElementById("l-name-error");
    var error3 = document.getElementById("pass");
    var error4 = document.getElementById("con-pass");
    var fName = document.getElementById("NAME").value;
    var lName = document.getElementById("L-NAME").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("con-password").value;

    if(fName.length < 3){
        error1.innerText = "Please Enter Correct Name";
    }
    if(lName.length < 3){
        error2.innerText = "Please Enter Correct Name";
    }
    if(password.length < 5){
        error3.innerText = "Your Password should have at least 5 characters"
    }
    if(confirmPassword !== password){
        error4.innerText = "Did not match with password"
    }
    
}
