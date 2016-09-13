

var strichliste = [];
function initial()
{
    //cross
    addline(300, 210, 300, 270);
    addline(300, 190, 300, 130);
    addline(310, 200, 370, 200);
    addline(290, 200, 230, 200);
    

    //X
    addline(290, 190, 230, 130);
    addline(290, 210, 230, 270);
    addline(310, 190, 370, 130);
    addline(310, 210, 370, 270);

    //raute
    addline(290, 120, 230, 180);
    addline(290, 280, 230, 220);
    addline(310, 120, 370, 180);
    addline(310, 280, 370, 220);
    

    //oben unten
    addline(310, 290, 370, 290);
    addline(290, 290, 230, 290);
    addline(290, 110, 230, 110);
    addline(310, 110, 370, 110);
    

    //r&L
    addline(390, 210, 390, 270);
    addline(390, 190, 390, 130);
    addline(210, 210, 210, 270);
    addline(210, 190, 210, 130);






    var svg = document.getElementsByTagName('svg')[0]; //Get svg element
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line'); //Create a path in SVG's namespace
    newElement.setAttribute("x1", 50); //Set path's data
    newElement.setAttribute("y1", 110); //Set path's data
    newElement.setAttribute("x2", 50); //Set path's data
    newElement.setAttribute("y2", 270); //Set path's data

    newElement.setAttribute("marker-end", "url(#EArrow)");
    // newElement.setAttribute("marker-start", "url(#SArrow)");
    newElement.style.stroke = "blue"; //Set stroke colour
    newElement.style.strokeWidth = "5px"; //Set stroke width
   
    svg.appendChild(newElement);














    
}
var numberaddline = 0;
function addline(x1,y1,x2,y2)
{
        var svg = document.getElementsByTagName('svg')[0]; //Get svg element
        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'line'); //Create a path in SVG's namespace
        newElement.setAttribute("x1", x1); //Set path's data
        newElement.setAttribute("y1", y1); //Set path's data
        newElement.setAttribute("x2", x2); //Set path's data
        newElement.setAttribute("y2", y2); //Set path's data

        //newElement.setAttribute("marker-end", "url(#EArrow)");
       // newElement.setAttribute("marker-start", "url(#SArrow)");
        newElement.style.stroke = "grey"; //Set stroke colour
        newElement.style.strokeWidth = "10px"; //Set stroke width
        newElement.num = 0;
     //   newElement.num = numberaddline;
        numberaddline++;
        newElement.addEventListener('click', function () { online(this) }, false)
        strichliste.push(newElement);
        svg.appendChild(newElement);   
}

function online(theline)
{
    if(theline.num==0)
    {
        theline.num = 1;
        theline.style.stroke = "blue";

        theline.setAttribute("marker-end", "url(#EArrow)");
        theline.setAttribute("marker-start", "");
        
    }
    else if (theline.num == 1)
    {
        theline.num = 2;
        theline.style.stroke = "blue";


        theline.setAttribute("marker-end", "");
        theline.setAttribute("marker-start", "url(#SArrow)");
       


    }
    else
    {
        theline.setAttribute("marker-end", "");
        theline.setAttribute("marker-start", "");



        theline.num = 0;
        theline.style.stroke = "grey";
    }



    makeDrache();
    


}

function makeDrache()
{

    ResetDrache();
    var auf = 0;
    while ((Liste.length < 1024) & (auf < 100))
    {
        GenerateDrache();
        auf++;
    }

}











function RandomDrache()
{
   

    for (i = 0; i < strichliste.length; i++)
    {
        var theline = strichliste[i];


        theline.setAttribute("marker-end", "");
        theline.setAttribute("marker-start", "");



        theline.num = 0;
        theline.style.stroke = "grey";
    }



    var strichanzahl = Math.floor((Math.random() * 8) + 2);

       
    for (i = 0; i < strichanzahl ; i++)
    {

        var neuerindex = Math.floor((Math.random() * (strichliste.length - 1)) + 0);

        var neuenummer = Math.floor((Math.random() * 2) + 0);

        var  theline=strichliste[neuerindex];
        //if(neuenumer==1)online(strichliste[neuerindex]);

        if (neuenummer == 0)
        {
            theline.num = 1;
            theline.style.stroke = "blue";

            theline.setAttribute("marker-end", "url(#EArrow)");
            theline.setAttribute("marker-start", "");
        }
        else
        {
            theline.num = 2;
            theline.style.stroke = "blue";


            theline.setAttribute("marker-end", "");
            theline.setAttribute("marker-start", "url(#SArrow)");
        }

    }



    makeDrache();
}





var init = true;

var Liste = [];


var l00;

function ResetDrache()
{
    init = true;
    Liste = [];
    GenerateDrache();
}

function GenerateDrache()
{
    
   


    if (init)
    {
        init = false;
        var neu = new Line(250, 150, 250, 350);
        Liste.push(neu);     
    }
    else
    {       
        ersetze();
    }
    var canvas = document.getElementById('mausoleum');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    resize(canvas);
    

    for (i = 0; i < Liste.length; i++)
    {
        context.beginPath();
        context.moveTo(Liste[i].startx, Liste[i].starty);
        context.lineTo(Liste[i].endx, Liste[i].endy);
        context.stroke();
    }  
}


function resize(canvas)
{
    var minx = 100;
    var maxx = 100;
    var miny = 100;
    var maxy = 100;

    for (i = 0; i < Liste.length; i++)
    {

        var p1x = Liste[i].startx;
        var p1y = Liste[i].starty;
        var p2x = Liste[i].endx;
        var p2y = Liste[i].endy;



        if (p1x < minx) minx = p1x;
        if (p1x > maxx) maxx = p1x;
        if (p2x < minx) minx = p2x;
        if (p2x > maxx) maxx = p2x;

        if (p1y < miny) miny = p1y;
        if (p1y > maxy) maxy = p1y;
        if (p2y < miny) miny = p2y;
        if (p2y > maxy) maxy = p2y;
    }

    
    for (i = 0; i < Liste.length; i++)
    {

        Liste[i].startx = Liste[i].startx-minx+10;
        Liste[i].starty = Liste[i].starty-miny+10;
        Liste[i].endx = Liste[i].endx-minx+10;
        Liste[i].endy = Liste[i].endy-miny+10;

    }

    canvas.setAttribute("width",maxx+20);
    canvas.setAttribute("height",maxy+20);
    //*/

}


function ersetze()
{
    
    var varListe = [];

    
    var left = true;
    for (i = 0; i < Liste.length; i++) {


        var untenmx = Liste[i].startx;
        var untenmy = Liste[i].starty;


        var obenmx = Liste[i].endx;
        var obenmy = Liste[i].endy;


        var mittex = Liste[i].startx + ((Liste[i].endx - Liste[i].startx) / 2);

        var mittey = Liste[i].starty + ((Liste[i].endy - Liste[i].starty) / 2);


        var längex = Liste[i].endx - Liste[i].startx;

        var längey = Liste[i].endy - Liste[i].starty;

        var linksx = mittex - (längey / 2);
        var linksy = mittey + (längex / 2);

        var rechtsx = mittex + (längey / 2);
        var rechtsy = mittey - (längex / 2);






       


        var obenlx = Liste[i].endx - (längey / 2);
        var obenly = Liste[i].endy + (längex / 2);


        var untenlx = Liste[i].startx - (längey / 2);
        var untenly = Liste[i].starty + (längex / 2);




        var obenrx = Liste[i].endx + (längey / 2);
        var obenry = Liste[i].endy - (längex / 2);


        var untenrx = Liste[i].startx + (längey / 2);
        var untenry = Liste[i].starty - (längex / 2);




        if (strichliste[0].num == 1) varListe.push(new Line(mittex, mittey, obenmx,obenmy));
        if (strichliste[0].num == 2) varListe.push(new Line(obenmx, obenmy, mittex, mittey));

        if (strichliste[1].num == 1) varListe.push(new Line(mittex, mittey, untenmx, untenmy));
        if (strichliste[1].num == 2) varListe.push(new Line(untenmx, untenmy, mittex, mittey));

        if (strichliste[2].num == 1) varListe.push(new Line(mittex, mittey, rechtsx, rechtsy));
        if (strichliste[2].num == 2) varListe.push(new Line(rechtsx, rechtsy, mittex, mittey));

        if (strichliste[3].num == 1) varListe.push(new Line(mittex, mittey, linksx, linksy));
        if (strichliste[3].num == 2) varListe.push(new Line(linksx, linksy, mittex, mittey));

        if (strichliste[4].num == 1) varListe.push(new Line(mittex, mittey, untenlx, untenly));
        if (strichliste[4].num == 2) varListe.push(new Line(untenlx, untenly, mittex, mittey));

        if (strichliste[5].num == 1) varListe.push(new Line(mittex, mittey, obenlx, obenly));
        if (strichliste[5].num == 2) varListe.push(new Line(obenlx, obenly, mittex, mittey));

        if (strichliste[6].num == 1) varListe.push(new Line(mittex, mittey, untenrx, untenry));
        if (strichliste[6].num == 2) varListe.push(new Line(untenrx, untenry, mittex, mittey));

        if (strichliste[7].num == 1) varListe.push(new Line(mittex, mittey, obenrx, obenry));
        if (strichliste[7].num == 2) varListe.push(new Line(obenrx, obenry, mittex, mittey));

        if (strichliste[8].num == 1) varListe.push(new Line(untenmx, untenmy, linksx, linksy));
        if (strichliste[8].num == 2) varListe.push(new Line(linksx, linksy, untenmx, untenmy));

        if (strichliste[9].num == 1) varListe.push(new Line(obenmx, obenmy, linksx, linksy));
        if (strichliste[9].num == 2) varListe.push(new Line(linksx, linksy, obenmx, obenmy));

        if (strichliste[10].num == 1) varListe.push(new Line(untenmx, untenmy, rechtsx, rechtsy));
        if (strichliste[10].num == 2) varListe.push(new Line(rechtsx, rechtsy, untenmx, untenmy));

        if (strichliste[11].num == 1) varListe.push(new Line(obenmx, obenmy, rechtsx, rechtsy));
        if (strichliste[11].num == 2) varListe.push(new Line(rechtsx, rechtsy, obenmx, obenmy));

        if (strichliste[12].num == 1) varListe.push(new Line(obenmx, obenmy, obenrx, obenry));
        if (strichliste[12].num == 2) varListe.push(new Line(obenrx, obenry, obenmx, obenmy));

        if (strichliste[13].num == 1) varListe.push(new Line(obenmx, obenmy, obenlx, obenly));
        if (strichliste[13].num == 2) varListe.push(new Line(obenlx, obenly, obenmx, obenmy));

        if (strichliste[14].num == 1) varListe.push(new Line(untenmx, untenmy, untenlx, untenly));
        if (strichliste[14].num == 2) varListe.push(new Line(untenlx, untenly, untenmx, untenmy));

        if (strichliste[15].num == 1) varListe.push(new Line(untenmx, untenmy, untenrx, untenry));
        if (strichliste[15].num == 2) varListe.push(new Line(untenrx, untenry, untenmx, untenmy));

        if (strichliste[16].num == 1) varListe.push(new Line(rechtsx, rechtsy, obenrx, obenry));
        if (strichliste[16].num == 2) varListe.push(new Line(obenrx, obenry, rechtsx, rechtsy));

        if (strichliste[17].num == 1) varListe.push(new Line(rechtsx, rechtsy, untenrx, untenry));
        if (strichliste[17].num == 2) varListe.push(new Line(untenrx, untenry, rechtsx, rechtsy));

        if (strichliste[18].num == 1) varListe.push(new Line(linksx, linksy, obenlx, obenly));
        if (strichliste[18].num == 2) varListe.push(new Line(obenlx, obenly, linksx, linksy));

        if (strichliste[19].num == 1) varListe.push(new Line(linksx, linksy, untenlx, untenly));
        if (strichliste[19].num == 2) varListe.push(new Line(untenlx, untenly, linksx, linksy));







         //varListe.push(new Line(untenrx, untenry, untenmx, untenmy));

        //varListe.push(new Line(untenmx, untenmy, untenrx, untenry));
        //varListe.push(new Line(untenrx, untenry, mittex, mittey));
       // varListe.push(new Line( mittex, mittey,obenrx,obenry));
        //varListe.push(new Line(untenrx, untenry, rechtsx, rechtsy));
        //varListe.push(new Line(rechtsx, rechtsy, mittex, mittey));
     //   varListe.push(new Line(mittex, mittey, obenmx, obenmy));
       //   varListe.push(new Line(rechtsx, rechtsy, obenrx, obenry));
       // varListe.push(new Line(untenrx, untenry, obenrx, obenry));
     //     varListe.push(new Line(obenrx, obenry, obenmx, obenmy));





    //    varListe.push(new Line(rechtsx, rechtsy,obenmx, obenmy));
       // varListe.push(new Line(rechtsx, rechtsy,untenmx, untenmy));

       // varListe.push(new Line(obenmx, obenmy, rechtsx, rechtsy));
 //       varListe.push(new Line(untenmx, untenmy, rechtsx, rechtsy));

  //      varListe.push(new Line(rechtsx, rechtsy, linksx, linksy));


    //    varListe.push(new Line(linksx, linksy, obenmx, obenmy));

       // varListe.push(new Line(mittex, mittey, linksx, linksy));
       // varListe.push(new Line(mittex, mittey, rechtsx, rechtsy));

       // varListe.push(new Line(rechtsx, rechtsy,obenmx,obenmy));

        //varListe.push(new Line(rechtsx, rechtsy,mittex,mittey));
       // varListe.push(new Line(mittex, mittey, linksx, linksy));
        //varListe.push(new Line(linksx, linksy, obenlx, obenly));
       // varListe.push(new Line(obenlx, obenly, obenmx, obenmy));

        //varListe.push(new Line(obenlx, obenly, obenmx, obenmy));
      //  varListe.push(new Line(obenmx, obenmy, obenrx, obenry));

        /*

        if (left)
        {
            varListe.push(new Line(Liste[i].startx, Liste[i].starty, mittex - (längey / 2), mittey + (längex / 2)));
            varListe.push(new Line(mittex - (längey / 2), mittey + (längex / 2), Liste[i].endx, Liste[i].endy));
        }
        else
        {

            varListe.push(new Line(Liste[i].startx, Liste[i].starty, mittex + (längey / 2), mittey - (längex / 2)));
            varListe.push(new Line(mittex + (längey / 2), mittey - (längex / 2), Liste[i].endx, Liste[i].endy));
        }


       // varListe.push(new Line(mittex, mittey, Liste[i].endx, Liste[i].endy));


       // varListe.push(new Line(mittex, mittey, Liste[i].startx, Liste[i].starty));


       // varListe.push(new Line(mittex, mittey, mittex - (längey / 2), mittey + (längex / 2)));

        //varListe.push(new Line(mittex, mittey, mittex + (längey / 2), mittey - (längex / 2)));
       
        if (left) left = false;
        else left = true;
    }
  //  */
        // var neu = new Line(0, 400, 400, 200);
        // varListe.push(neu);

    }
    Liste = varListe;
}


function Line(sx, sy, ex, ey) {
    this.startx = sx;
    this.starty = sy;
    this.endx = ex;
    this.endy = ey;
}

