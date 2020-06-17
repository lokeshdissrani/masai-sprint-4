var restaurant={uncle_sams_pizza:{margerita_pizza:100,garlic_bread:50,white_pasta:70,cold_drink:30},babu_pav_bhaji:{pav_bhaji:70,pulav:70,extra_pav:40,bhaji_pav_sandwich:40},raj_sandwich:{bread_butter:20,bread_butter_grill:30,veg_sandwich:40,grill_veg_sandwich:60}}
var temp=JSON.parse(localStorage.getItem("restaurant"));
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
window.onload(function(){
    var div1=document.createElement("div");
    div1.setAttribute("id","id0")
    var counter=1;
    for(a in restaurant){
        var number=document.createElement("span");
        number.textContent=counter;
        var item=document.createElement("span");
        item.textContent=a;
        var break1=document.createElement("br");
        div1.append(number,item,break1);
        counter++;
    }
    body.append(div1);
})
body.addEventListener("click",additems);
function additems(e){
    var div1=document.getElementById("id0");
    div1.textContent="";
    var temp=e.target.textContent;
    var ourtemp=restaurant[temp];
    var counter=1;
    for(a in ourtemp){
        var number=document.createElement("span");
        number.textContent=counter;
        var itemname=document.createElement("span");
        itemname.textContent=a;
        var itemvalue=document.createElement("span");
        itemvalue.textContent=ourtemp[a];
        var quantity=document.createElement("input");
        quantity.setAttribute("type","number");
        var addtocart=document.createElement("button");
        addtocart.textContent="addtobill";
        addtocart.addEventListener("click",makingbill);
        var break1=document.createElement("br");
        div1.append(number,itemname,itemvalue,quantity,addtocart,break1);
    }
    body.append(divbill);
    var totalbill=document.createElement("button");
    totalbill.textContent="Make bill";
    totalbill.setAttribute("id","makebill");
    totalbill.addEventListener("click",finalbill);
    divbill.append(totalbill);
}
function makingbill(e){
    var temp1=e.target.previousSibling.textContent;
    var temp2=e.target.previousSibling.previousSibling.textContent;
    var temp3=e.target.previousSibling.previousSibling.previousSibling.textContent;
    var tempdiv=document.createElement("div");
    var number=document.createElement("span")
    number.textContent=totalbillcounter;
    totalbillcounter++;
    var name=document.createElement("span");
    name.textContent=temp3;
    var value=document.createElement("span");
    value.textContent=temp2;
    var quantity=document.createElement("span");
    quantity.textContent=temp1;
    totalbillarray[totalbillarray.length-1].push([name,value,quantity]);
    tempdiv.append(number,name,value,quantity);
    var totalbill=document.getElementById("makebill");
    tempbill.insertBefore(totalbill);
}
function finalbill(){
    var temp=totalbillarray[totalbillarray.length-1];
    var sum1=0;
    var itemscount=0;
    for(var i=0;i<temp.length;i++){
        sum1+=Number(temp[i][1])*Number(temp[i][2]);
        itemscount+=1;
    }
    var tempdate=new Date();
    var ourdate=tempdate.getDate();
    totalbillarray[totalbillarray.length-1].push([ourdate,sum1,itemscount]);
    localStorage.setItem("totalbill",JSON.stringify(totalbillarray));
    var totalbill=document.getElementById("makebill");
    var finalbilldisplay=document.createElement("div");
    finalbilldisplay.textContent="Total bill is"+sum1+"total "
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