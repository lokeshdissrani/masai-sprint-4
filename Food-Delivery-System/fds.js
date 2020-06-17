var temp=localStorage.getItem("restaurant");

console.log(temp);
if(temp=='undefined'){
    var restaurant={uncle_sams_pizza:{margerita_pizza:100,garlic_bread:50,white_pasta:70,cold_drink:30},babu_pav_bhaji:{pav_bhaji:70,pulav:70,extra_pav:40,bhaji_pav_sandwich:40},raj_sandwich:{bread_butter:20,bread_butter_grill:30,veg_sandwich:40,grill_veg_sandwich:60}}
    localStorage.setItem("restaurant",JSON.stringify(restaurant));
}
else{
    var restaurant=JSON.parse(temp);
}
console.log(restaurant);
var ressub=document.getElementById("ressub");
ressub.addEventListener("click",addrestaurant);
var object={}
var tempres;
function addrestaurant(){
    var resname=document.getElementById("resname").value;
    var resinput=document.getElementById("resinput");
    object={};
    tempres=resname;
    resinput.remove();
    createinputforitems(resname);
}
function createinputforitems(resname){
    var div0=document.createElement("div");
    div0.setAttribute("id","id0");
    div0.setAttribute("class","container text-white bg-info");
    div0.style.marginTop="200px";
    var div1=document.createElement("div");
    div1.setAttribute("class","row mt-5 p-3");
    var body=document.querySelector("body");
    var maindiv=document.createElement("div");
    var greetings=document.createElement("h1");
    greetings.setAttribute("class","col-12 text-center");
    greetings.textContent="Welcome: "+resname;
    var itemnamediv=document.createElement("h4");
    itemnamediv.setAttribute("class","col-2 ")
    itemnamediv.textContent="Item Name: ";
    var itemnameinput=document.createElement("input");
    itemnameinput.setAttribute("class","col-1 ");
    itemnameinput.setAttribute("type","text");
    itemnameinput.setAttribute("id","itemname");
    var itemvaluediv=document.createElement("h4");
    itemvaluediv.setAttribute("class","col-2 ");
    itemvaluediv.textContent="Item Value: ";
    var itemvalueinput=document.createElement("input");
    itemvalueinput.setAttribute("class","col-1 ");
    itemvalueinput.setAttribute("type","number");
    itemvalueinput.setAttribute("id","itemvalue");
    var itemsubmit=document.createElement("button");
    itemsubmit.setAttribute("class","col-2 btn btn-primary offset-1");
    itemsubmit.textContent="SUBMIT";
    itemsubmit.addEventListener("click",takeitemsinput);
    var addres=document.createElement("button");
    addres.setAttribute("class","col-2 btn btn-primary offset-1")
    addres.textContent="ADD ALL ITEMS";
    addres.addEventListener("click",backtoaddres);
    div1.append(greetings,itemnamediv,itemnameinput,itemvaluediv,itemvalueinput,itemsubmit,addres);
    div0.append(div1);
    body.append(div0);
}

function takeitemsinput(){
    var name=document.getElementById("itemname").value;
    var value=document.getElementById("itemvalue").value;
    document.getElementById("itemname").value="";
    document.getElementById("itemvalue").value="";
    object[name]=Number(value);
    restaurant[tempres]=object;
}
function backtoaddres(){
    localStorage.setItem("restaurant",JSON.stringify(restaurant));
    window.location.href="fds.html";
}
var selres=document.getElementById("selres");
selres.addEventListener("click",selrescall);
var summary=document.getElementById("summary");
summary.addEventListener("click",summarycall);
function selrescall(){
    window.location.href="selectres.html";
}
function summarycall(){
    window.location.href="summary.html";
}