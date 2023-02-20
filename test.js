var burbuja= document.getElementById("burbuja");
document.addEventListener("mousemove",function(event){
var x=event.clientX;
var y=event.clientY;
burbuja.style.left=x+"px";
burbuja.style.top=y+"px";

burbuja.animate({
left: x+"px",
top: y+"px"
},{duration: 3000,fill: "forwards"});



});