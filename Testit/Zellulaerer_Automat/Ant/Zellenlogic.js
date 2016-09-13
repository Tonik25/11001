
var Liste;
var groesse = 49;

var pixel = 20;

function initial()
{
    Liste = new Array(groesse);
    for (var i = 0; i < groesse; i++) {
        Liste[i] = new Array(groesse);
    }
    
    //Get svg element
    for(i=0;i<groesse;i++)
        for (j = 0; j < groesse;j++)
        {
            var svg = document.getElementsByTagName('svg')[0];
            var x = pixel + (pixel * i);

            var y = pixel + (pixel * j);
            var r = pixel/2;
            var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle'); //Create a path in SVG's namespace

            newElement.setAttribute("fill", "white");
            newElement.setAttribute("cx", x); //Set path's data
            newElement.setAttribute("cy", y); //Set path's data
            newElement.setAttribute("r", r); //Set path's data    
           // newElement.addEventListener('click', function () { Change(this) }, false)
          //  newElement.addEventListener('drag', function () { Change(this) }, false)

          
            Liste[i][j]=newElement;
            
            svg.appendChild(newElement);
        }

    var svg = document.getElementsByTagName('svg')[0];
    svg.setAttribute("width", (groesse+1)*pixel);
    svg.setAttribute("height", (groesse + 1) * pixel);

    /*
    for(i=0;i<groesse;i++)
        for (j = 0; j < groesse; j++)
        {
            
           
            Liste[i, j].oben = Liste[((i + 0 + groesse) % groesse)][ ((j + 1 + groesse) % groesse)];
            Liste[i, j].unte = Liste[((i + 0 + groesse) % groesse)][((j - 1 + groesse) % groesse)];

            Liste[i, j].link = Liste[((i - 1 + groesse) % groesse)][((j + 0 + groesse) % groesse)];
            Liste[i, j].rech = Liste[((i + 1 + groesse) % groesse)][((j + 0 + groesse) % groesse)];

            Liste[i, j].obre = Liste[((i + 1 + groesse) % groesse)][((j + 1 + groesse) % groesse)];
            Liste[i, j].obli = Liste[((i + 1 + groesse) % groesse)][((j - 1 + groesse) % groesse)];
            Liste[i, j].unre = Liste[((i - 1 + groesse) % groesse)][((j + 1 + groesse) % groesse)];
            Liste[i, j].unli = Liste[((i - 1 + groesse) % groesse)][((j - 1 + groesse) % groesse)];

        }

        */
    for (i = 0; i < groesse; i++)
        for (j = 0; j < groesse; j++)
        {
            

           // if ((i + j) % 4 == 0) Liste[i][j].lebendig = true;
           // else
            Liste[i][j].lebendig = false;

            Liste[i][j].next = Liste[i][j].lebendig;
            
            
        }


  //  setInterval(Schleife(), 3000);
    // setInterval(function () { Schleife() }, 100);
    posx = (groesse+ (groesse%2)) / 2;
    posy = (groesse + (groesse % 2)) / 2;

   // posx = (groesse ) / 2;
   // posy = (groesse ) / 2;

    setTimeout(function () { Schleife(); }, Time);

    //Schleife();

}

var oben = 0;
var rech = 1;
var unte = 2;
var link = 3;

var posx;
var posy;
var richtung=0;

var Time = 1;
function Timeminus()
{
    Time -= 100;
    if (Time <= 0) Time = 100;
    
}

function Timeplus()
{
    Time += 100;
    
}



function Schleife()
{
   
    //while(true)
    {
        berechnen();
        /*
        berechnen();

        berechnen();

        berechnen();
        */

    }
   
   // setTimeout(Schleife(), 1000);
    setTimeout(function () { Schleife(); }, Time);
}


function berechnen()
{
    
     
    
    if (Liste[posx][posy].lebendig)
    {
       richtung=(((richtung+1)+4)%4)
    }
    else
    {
        richtung = (((richtung - 1) + 4) % 4)
    }

    Liste[posx][posy].lebendig = !Liste[posx][posy].lebendig;
    if (Liste[posx][posy].lebendig) Liste[posx][posy].setAttribute("fill", "black");
    else Liste[posx][posy].setAttribute("fill", "white");




    if (richtung == 0)
    {
        posx++;
    }
    if (richtung == 1)
    {
        posy++;
    }
    if (richtung == 2)
    {
        posx--;
    }
    if (richtung == 3)
    {
        posy--;
    }

    posx = (posx + groesse) % groesse;
    posy = (posy + groesse) % groesse;

    Liste[posx][posy].setAttribute("fill", "blue");


}


function Change(zelle)
{
   // if (zelle.lebendig) zelle.lebendig = false;
    //else
        zelle.lebendig = true;

    zelle.next = zelle.lebendig;


    if (zelle.lebendig) zelle.setAttribute("fill", "black");
    else zelle.setAttribute("fill", "white");
}

