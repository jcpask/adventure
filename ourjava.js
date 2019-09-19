var notes=function()
{
    var node=document.createElement("notes.html");
    console.log("node",node);
            
    document.querySelector("head")
        .appendChild(node);
    node.setAttribute("onclick", "name()");
}
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
    var node=document.createButton("Your challenge!");
    console.log("node",node);
    node.innerText="You must fight a dragon";
 }


