var selres=document.getElementById("selres");
selres.addEventListener("click",selrescall);
var addres=document.getElementById("addres");
addres.addEventListener("click",addrescall);
function selrescall(){
    window.location.href="selectres.html";
}
function addrescall(){
    window.location.href="fds.html";
}
var body=document.querySelector("body");
var temp=JSON.parse(localStorage.getItem(""))