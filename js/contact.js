// Contact form validation

function formValidate()
{
    var FirstName = document.getElementById("fname").value;
    var LastName = document.getElementById("lname").value;
    var Email = document.getElementById("email").value;
    var Number = document.getElementById("number").value;
    var Msg = document.getElementById("message").value;

    if(FirstName=="")
    {
        document.getElementById("s1").innerHTML = "Please enter first name"
        return false;
    }
    if(!isNaN(FirstName))
    {
        document.getElementById("s1").innerHTML = "Numbers are not allowed in names"
        return false;
    }
    if(FirstName.length <=2)
    {
        document.getElementById("s1").innerHTML = "Name must be more than 2 characters"
        return false;
    }
    if(LastName=="")
    {
        document.getElementById("s2").innerHTML = "Please enter Last name"
        return false;
    }
    if(!isNaN(LastName))
    {
        document.getElementById("s2").innerHTML = "Numbers are not allowed in names"
        return false;
    }
    if(LastName.length <=2)
    {
        document.getElementById("s2").innerHTML = "Name must be more than 2 characters"
        return false;
    }
    if(Email=="")
    {
        document.getElementById("s3").innerHTML = "Please enter email"
        return false;
    }
    if(Email.indexOf("@"<=0))
    {
        document.getElementById("s3").innerHTML = "enter email in correct method"
        return false;
    }
    if(Number=="")
    {
        document.getElementById("s4").innerHTML = "Please enter contact number"
        return false;
    }
    if(Number.length <11)
    {
        document.getElementById("s4").innerHTML = "Please enter at least 11 characters"
        return false;
    }
    if(Msg=="")
    {
        document.getElementById("s5").innerHTML = "Please enter message"
        return false;
    }
    if(Msg.length <=20)
    {
        document.getElementById("s5").innerHTML = "Please enter at least 20 characters"
        return false;
    }
    if(Msg.length >=500)
    {
        document.getElementById("s5").innerHTML = "Message should not exceed 300 characters"
        return false;
    }
}