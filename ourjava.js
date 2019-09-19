
var sayHi=function()
{
    var node=document.createElement("h2");
    console.log("node",node);
    node.innerText="Your name is Brunnhilde";
                
     document.querySelector("body")
        .appendChild(node);
    node.setAttribute("onclick", "name()");

}
var name=function()
{
    var node=document.createElement("button");
    console.log("node1",node1);
    node.innerText="Your Challenge!";
    
 document.querySelector("body")
        .appendChild(node1);
    node.setAttribute("onclick", "name()"); 
}

var img = document.createElement("img");
img.src = "https://github.com/jcpask/adventure/blob/master/41208645_10155996761217569_829956108729712640_n.jpg";

var src = document.getElementById("body");
src.appendChild(img);
}
