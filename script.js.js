function startTest() {

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;

    if(name=="" || mobile==""){
        alert("Please Enter Name & Mobile Number");
        return;
    }

    localStorage.setItem("studentName",name);
    localStorage.setItem("studentMobile",mobile);

    window.location.href="test.html";

}