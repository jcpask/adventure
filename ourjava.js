
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
            if (image.src.match("https://user-images.githubusercontent.com/54848877/65207863-30632e80-da61-11e9-84f3-68559dd98590.jpg")) {
                image.src = "https://user-images.githubusercontent.com/54848877/65207863-30632e80-da61-11e9-84f3-68559dd98590.jpg;
            }
            else {
                image.src = "https://raw.githubusercontent.com/jcpask/adventure/master/attacking-dragon.png";
            }
        }


