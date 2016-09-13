

var rbreite= 400;
var rhoehe = 400;

var timer;

function getroffen(ziel)
{
    clearTimeout(timer);

    var neuebreite = Math.floor((Math.random() * rbreite) + 1);
    var neuehoehe = Math.floor((Math.random() * rhoehe) + 1);

    neuerriss(ziel.cx, ziel.cy);

    ziel.setAttribute("cx", neuebreite);
    ziel.setAttribute("cy", neuehoehe);

   // timer= setTimeout(timerabgelaufen(ziel), 1000);
}

function timerabgelaufen(ziel)
{
    
    var neuebreite = Math.floor((Math.random() * rbreite) + 1);
    var neuehoehe = Math.floor((Math.random() * rhoehe) + 1);

    ziel.setAttribute("cx", neuebreite);
    ziel.setAttribute("cy", neuehoehe);
    timer = setTimeout(timerabgelaufen(ziel), 1000);
}

function neuerriss(posx,posy)
{
   
    


}

function neueline(x1,y1,x2,y2)
{

    var svg = document.getElementsByTagName('svg')[0]; //Get svg element
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line'); //Create a path in SVG's namespace
    newElement.setAttribute("x1", x1); //Set path's data
    newElement.setAttribute("y1", y1); //Set path's data
    newElement.setAttribute("x2", x2); //Set path's data
    newElement.setAttribute("y2", y2); //Set path's data
    newElement.style.stroke = "grey"; //Set stroke colour
    newElement.style.strokeWidth = "10px"; //Set stroke width
    svg.appendChild(newElement);


}