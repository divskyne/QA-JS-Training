// var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
// var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
// var ck_username = /^[A-Za-z0-9_]{3,20}$/;
//var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

function checkForm()
{
    var nameRegex = /^[A-Za-z ]+$/;
    var number = /^[0-9]+$/;
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    var name = document.getElementById("name").value;
    var em = document.getElementById("email").value;
    var ph = document.getElementById("phone").value;

    if(name==""||em==""||ph=="")
    {
        return false;
    }
    else if(name.match(nameRegex)&&em.match(ck_email)&&ph.match(number))
    {
        return true;
    }
    else
    {
        if(!name.match(nameRegex))
        {
            var newDiv = document.createElement("p");
            newDiv.innerHTML = "Name Error!";
        }
        return false;
    }
}