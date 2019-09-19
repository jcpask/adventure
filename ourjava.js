
var sayHi=function()
{
    var node=document.createElement("h2");
    console.log("node",node);
    node.innerText="Your name is Brunnhilde";
                
     document.querySelector("body")
        .appendChild(node);
    node.setAttribute("onclick", "name()");
}

var saybye=function()
{
    var node=document.createElement("a");
    console.log("node",node);
  node.setAttribute("href","https://raw.githubusercontent.com/jcpask/adventure/master/41208645_10155996761217569_829956108729712640_n.jpg");
    
                
     document.querySelector("body")
        .appendChild(node);
    node.setAttribute("onclick", "name()");
}


