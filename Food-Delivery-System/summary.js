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
var temp=JSON.parse(localStorage.getItem("totalbill"));
for(var i=0;i<temp.length;i++){
    ourtemp=temp[i];
    var maindiv=document.createElement("div");
    var date1=ourtemp[ourtemp.length-1][0];
    var sum1=ourtemp[ourtemp.length-1][1];
    var totalitems1=ourtemp[ourtemp.length-1][2];
    var mainheading=document.createElement("h1");
    mainheading.textContent=(i+1)+" Date: "+date1+" Total Sum of bill: "+sum1+" Total Items: "+totalitems1;
    maindiv.append(mainheading);
    for(var j=0;j<ourtemp.length-1;j++){
        var name=ourtemp[j][0];
        var value=ourtemp[j][1];
        var quantity=ourtemp[j][2];
        var tempdiv=document.createElement("div");
        tempdiv.textContent=(j+1) +" Name: "+name+" Value: "+value+" Quantity: "+quantity;
        maindiv.append(tempdiv);
    }
    body.append(maindiv);
}