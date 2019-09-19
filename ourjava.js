
var sayHi=function()
{
    var node=document.createElement("h2");
    console.log("node",node);
    node.innerText="Your name is Brunnhilde";
            
    document.querySelector("body")
        .appendChild(node);
    node.setAttribute("onclick", "name()");
    
    var x=document.createElement("button");
    console.log("node1",node1);
    node1.innerText="Your Challenge!";

}
var name=function()
{
    var node=document.createButton("Your challenge!");
    console.log("node",node);
    node.innerText="You must fight a dragon";
 }


