canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
var mouseevent="empty";
var  last_position_of_x ,last_position_of_y;
color="black";
width_of_line=1;
radius=30;
canvas.addEventListener("mousedown",my_mouesdown);
function my_mouesdown(e){
mouseevent="mouseDown";
radius=document.getElementById("radius").value;
color=document.getElementById("color").value;
width_of_line=document.getElementById("width").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last position of x and y cordinits=");
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
    
    ctx.stroke();
}
last_position_of_x=curent_position_of_mouse_x
last_position_of_y=curent_position_of_mouse_y


}



