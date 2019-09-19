
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
    function changeImage() {
            var image = document.getElementById('myImage');
            if (image.src.match("https://raw.githubusercontent.com/jcpask/adventure/master/attacking-dragon.png")) {
                image.src = "https://raw.githubusercontent.com/jcpask/adventure/master/41208645_10155996761217569_829956108729712640_n.jpg";
            }
            else {
                image.src = "https://raw.githubusercontent.com/jcpask/adventure/master/attacking-dragon.png";
            }
        }


