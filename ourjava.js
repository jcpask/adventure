
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
    console.log("node",node);
    node.innerText="Your Challenge!";
 }


