
var sayHi=function()
{
    var node=document.createElement("h2");
    console.log("node",node);
    node.innerText="Your name is Brunnhilde";
    
     
var node = document.createElement("img");
img.src = "https://github.com/jcpask/adventure/blob/master/41208645_10155996761217569_829956108729712640_n.jpg";

var src = document.getElementById("body");
src.appendChild(img);           
     document.querySelector("body")
        .appendChild(node);
    node.setAttribute("onclick", "name()");

}

