
var sayHi=function()
{
    var node=document.createElement("h2");
    console.log("node",node);
    node.innerText="Your name is Brunnhilde";
            
    
    var node=document.createElement("button");
    console.log("node",node);
    node1.innerText="Your Challenge!";
    
     document.querySelector("body")
        .appendChild(node);
    node.setAttribute("onclick", "name()");

}
var name=function()
{
    var node=document.createButton("Your challenge!");
    console.log("node",node);
    node.innerText="You must fight a dragon";
 }


