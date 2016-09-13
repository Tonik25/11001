
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

            newElement.setAttribute("fill", "red");
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
            

            if ((i + j) % 4 == 0) Liste[i][j].lebendig = true;
            else
            Liste[i][j].lebendig = false;

            Liste[i][j].next = Liste[i][j].lebendig;
            
            
        }


  //  setInterval(Schleife(), 3000);
    // setInterval(function () { Schleife() }, 100);


    setTimeout(function () { Schleife(); }, Time);

    //Schleife();

}

var Time = 100;
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
   // alert("Hello");
    for (i = 0; i < groesse; i++)
        for (j = 0; j < groesse; j++)
        {
            
            var nachbarn=0;
            
            //*
            if(Liste[((i + 0 + groesse) % groesse)][((j + 1 + groesse) % groesse)].lebendig)nachbarn++;
            if(Liste[((i + 0 + groesse) % groesse)][((j - 1 + groesse) % groesse)].lebendig)nachbarn++;

            if(Liste[((i - 1 + groesse) % groesse)][((j + 0 + groesse) % groesse)].lebendig)nachbarn++;
            if(Liste[((i + 1 + groesse) % groesse)][((j + 0 + groesse) % groesse)].lebendig)nachbarn++;

            if(Liste[((i + 1 + groesse) % groesse)][((j + 1 + groesse) % groesse)].lebendig)nachbarn++;
            if(Liste[((i + 1 + groesse) % groesse)][((j - 1 + groesse) % groesse)].lebendig)nachbarn++;
            if(Liste[((i - 1 + groesse) % groesse)][((j + 1 + groesse) % groesse)].lebendig)nachbarn++;
            if (Liste[((i - 1 + groesse) % groesse)][((j - 1 + groesse) % groesse)].lebendig) nachbarn++;
            //*/
            /*
            
            if (Liste[i][j].oben.lebendig) nachbarn++;
            if (Liste[i][j].unte.lebendig) nachbarn++;
            if (Liste[i][j].link.lebendig) nachbarn++;
            if (Liste[i][j].rech.lebendig) nachbarn++;
            if (Liste[i][j].obli.lebendig) nachbarn++;
            if (Liste[i][j].obre.lebendig) nachbarn++;
            if (Liste[i][j].unli.lebendig) nachbarn++;
            if (Liste[i][j].unre.lebendig) nachbarn++;
            //*/
            
            //*
            Liste[i][j].next = Liste[i][j].lebendig;

            if (Liste[i][j].lebendig)
            {
                if (nachbarn < 2) Liste[i][j].next = false;
                
                if (nachbarn >= 4) Liste[i][j].next = false;
            }
            else
            {
                if (nachbarn == 3) Liste[i][j].next = true;
            }
            
           // */

        }

    for (i = 0; i < groesse; i++)
        for (j = 0; j < groesse; j++)
        {
            //*
            Liste[i][j].lebendig = Liste[i][j].next;

            if (Liste[i][j].lebendig) Liste[i][j].setAttribute("fill", "black");
            else Liste[i][j].setAttribute("fill", "white");
            //*/
            
            //*/
          //  Liste[i][j].setAttribute("fill", "white");
        }

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

