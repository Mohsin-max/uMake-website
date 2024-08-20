var eye = document.querySelector("#eye");
var password = document.querySelector("#password");
var check = true;

eye.addEventListener("click", function () {

    if(check==true){

        password.type="text";
        eye.className="ri-eye-line";
        check=false;
    }else{

        password.type="password";
        eye.className="ri-eye-off-line";
        check=true;
    }

});