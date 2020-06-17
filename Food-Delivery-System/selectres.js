
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
var totalbilltemp=JSON.parse(localStorage.getItem("totalbill"));
if(totalbilltemp!=null){
    var totalbillarray=totalbilltemp;
}
else{
    var totalbillarray=[];
    
}
totalbillarray.push([]);
var totalbillcounter=1;

if(temp==null){
    localStorage.setItem("restaurant",JSON.stringify(restaurant));
}
var body=document.querySelector("body");
var divbill=document.createElement("div");
window.addEventListener("load",initialize);
function initialize(){
    var div0=document.createElement("div");
    div0.setAttribute("id","id0");
    div0.setAttribute("class","container text-white bg-info");
    var counter=1;
    for(a in restaurant){
        var div1=document.createElement("div");
        div1.setAttribute("class","row mt-5");
        var number=document.createElement("span");
        number.setAttribute("class","col-1 offset-3")
        number.textContent=counter;
        var item=document.createElement("button");
        item.setAttribute("class","col-3 btn btn-primary");
        item.textContent=a;
        div1.append(number,item);
        div0.append(div1);
        counter++;
    }
    
    div0.addEventListener("click",additems);
    body.append(div0);
    
}

function additems(e){
    var div0=document.getElementById("id0");
    div0.textContent="";
    var div2=document.createElement("div");
    div2.setAttribute("id","id2")
    div2.setAttribute("class","container text-white bg-info")
    body.append(div2);
    var temp=e.target.textContent;
    var ourtemp=restaurant[temp];
    var counter=1;
    for(a in ourtemp){
        var div1=document.createElement("div");
        div1.setAttribute("class","row mt-5")
        var number=document.createElement("span");
        number.setAttribute("class","col-2");
        number.textContent=counter;
        var itemname=document.createElement("span");
        itemname.setAttribute("class","col-3");
        itemname.textContent=a;
        var itemvalue=document.createElement("span");
        itemvalue.setAttribute("class","col-2");
        itemvalue.textContent=ourtemp[a];
        var quantity=document.createElement("input");
        quantity.setAttribute("class","col-2")
        quantity.setAttribute("type","number");
        var addtocart=document.createElement("button");
        addtocart.setAttribute("class","col-2 btn btn-primary")
        addtocart.textContent="addtobill";
        addtocart.addEventListener("click",makingbill);
        var break1=document.createElement("br");
        div1.append(number,itemname,itemvalue,quantity,addtocart,break1);
        div2.append(div1);
    }
    var div1=document.createElement("div");
    div1.setAttribute("id","beforebutton");
    div1.setAttribute("class","row mt-5")
    body.append(divbill);
    var totalbill=document.createElement("button");
    totalbill.setAttribute("class","col-3 offset-3 btn btn-primary")
    totalbill.textContent="Make bill";
    totalbill.setAttribute("id","makebill");
    totalbill.addEventListener("click",finalbill);
    div1.append(totalbill);
    div2.append(div1)
    body.append(div2);
}
function makingbill(e){
    var temp1=e.target.previousSibling.value;
    var temp2=e.target.previousSibling.previousSibling.textContent;
    var temp3=e.target.previousSibling.previousSibling.previousSibling.textContent;
    var div2=document.getElementById("id2");
    console.log(temp1,temp2,temp3);
    var div1=document.createElement("div");
    div1.setAttribute("class","row mt-5")
    var number=document.createElement("span")
    number.setAttribute("class","col-2 offset-3")
    number.textContent=totalbillcounter;
    totalbillcounter++;
    var name=document.createElement("span");
    name.setAttribute("class","col-3")
    name.textContent=temp3;
    var value=document.createElement("span");
    value.setAttribute("class","col-2")
    value.textContent=temp2;
    var quantity=document.createElement("span");
    quantity.setAttribute("class","col-2");
    quantity.textContent=temp1;
    totalbillarray[totalbillarray.length-1].push([temp3,temp2,temp1]);
    div1.append(number,name,value,quantity);
    var totalbill=document.getElementById("beforebutton");
    div2.insertBefore(div1,totalbill);
}
function finalbill(){
    var temp=totalbillarray[totalbillarray.length-1];
    var sum1=0;
    var itemscount=0;
    for(var i=0;i<temp.length;i++){
        sum1+=(Number(temp[i][1])*Number(temp[i][2]));
        itemscount+=1;
        console.log(temp[i][1],temp[i][2],sum1);
    }
    var div2=document.getElementById("id2");
    var div1=document.createElement("div");
    div1.setAttribute("class","row mt-5");
    var tempdate=new Date();
    var ourdate=tempdate.getDate();
    var ourmonth=tempdate.getMonth();
    var ouryear=tempdate.getFullYear();
    var totaldate=ourdate.toString()+"/"+ourmonth.toString()+"/"+ouryear.toString();
    totalbillarray[totalbillarray.length-1].push([totaldate,sum1,itemscount]);
    localStorage.setItem("totalbill",JSON.stringify(totalbillarray));
    var finalbilldisplay=document.createElement("div");
    finalbilldisplay.setAttribute("class","col-12 display-2");
    finalbilldisplay.textContent="Total bill is: "+sum1+" total items: "+itemscount;
    div1.append(finalbilldisplay);
    div2.append(div1);
}
var addres=document.getElementById("addres");
addres.addEventListener("click",addrescall);
var summary=document.getElementById("summary");
summary.addEventListener("click",summarycall);
function addrescall(){
    window.location.href="fds.html";
}
function summarycall(){
    window.location.href="summary.html";
}
var selres=document.getElementById("selres");
selres.addEventListener("click",selrescall);
function selrescall(){
    window.location.href="selectres.html";
}