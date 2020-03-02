var arr1=[];
var arr2=[];
var varbtId=1;
var obj={};
var newobj={};

const cusName=prompt("Please enter your name... ")
var Greetings="Hi "+cusName+", welcome to online shopping market";
document.getElementById("cusName").innerHTML=Greetings;
function myFunc(){
var pName=document.getElementById("proName").value;
var bPrice=document.getElementById("baPrice").value;
obj["product name"]=pName;
obj["base price"]=Number(bPrice);
createButton();
}
function createButton(){
    var button=document.createElement("button");
    button.id="bt1";
    button.innerHTML="Add Variant";
    document.getElementById("variantDiv").appendChild(button);
    button.addEventListener("click",function(){
        addVar();
    })
}
function addVar(){
    var table=document.createElement("table");
    var trow=document.createElement("tr");
    var tbox1=document.createElement("td");
    var tbox2=document.createElement("td");
    var input1=document.createElement("input");
    input1.type="text";
    input1.autofocus="autofocus";
    input1.class="varName";
    input1.placeholder="Variant Name";
    tbox1.appendChild(input1);
    var input2=document.createElement("input");
    input2.type="text";
    input2.class="varVal";
    input2.placeholder="Variant Values";
    tbox2.appendChild(input2);
    var varbt=document.createElement("button");
    varbt.innerHTML="update";
    varbt.id="varbt"+varbtId;
    trow.appendChild(tbox1);
    trow.appendChild(tbox2);
    trow.appendChild(varbt);
    table.appendChild(trow);
    document.getElementById("tableDiv").appendChild(table);    
    varSubmit(input1,input2,varbt);
}
function varSubmit(input1,input2,varbt){
    varbt.addEventListener("click",function()
    {
        var varName=input1.value;
        var varVal=input2.value;
        if(varName!=""&&varVal!="")
    {
        varUpd(varName,varVal,varbtId);
        varbt.disabled=true;
        varbtId+=1;
    }
    else
    {
        alert("Please fill the table and submit")
    }
    })
}
function varUpd(varName,varVal)
{
    
    //arr1.push(varName);
    varVal=varVal.split(",")
    //arr2.push(varVal);
    var obj1={}
    obj1["type"]=varName;
    obj1["values"]=varVal;
    arr2.push(varVal);
    arr1.push(obj1);
}
function fsubmit()
{
    arr2.forEach((element)=>
    console.log(element));
    obj["varient"]=arr1;
    console.log(obj)
}


