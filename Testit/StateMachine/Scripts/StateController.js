


/*
var selectList = document.createElement("select");
selectList.className = "form-control";

function addOption()
{  
    


    var div2 = document.createElement("div");
    div2.className = "well";

    var inp = document.createElement("input");
    inp.className="form-control input-lg";

    
  //  var texta = document.captureEvents("textarea");
    var sect = selectList;

    div2.appendChild(inp);

    div2.appendChild(sect);
    //div2.appendChild(texta);

    $("#Optionenliste").append(div2);

    
  


    

}












//_________________


function addList()  {

    if ($("#inputliste").val() != "")
    {
            var option = document.createElement("lable");
   
            option.innerHTML = $("#inputliste").val();
            option.className = "col-sm-10";




            var icondelate = document.createElement("span");
            icondelate.className = "glyphicon glyphicon-remove";




            var div1 = document.createElement("div");
            div1.className = "list-group-item";
            // div1.className = "row";
            div1.appendChild(option);
            div1.appendChild(icondelate);
   
    
   

            $("#Liste").append(div1);

            //var noption = document.createElement("option");
            //noption.innerHTML = "testit";
            //Liste.append(noption);



   



            var neuekarte = document.createElement("option");
            neuekarte.innerHTML = $("#inputliste").val();
            selectList.appendChild(neuekarte);

            //option.innerHTML = document.getElementById("inputListe").value;//$("#inputListe").innerHTML;
    
    
            $("#inputliste").val("");

    }


}

//#############
*/

var stateMaschine = new StateMaschine();
var aktuellerState;
var listlenght = 0;


function addstate()
{
    if ($("#inputliste").val() != "")
    {
        
        var name = $("#inputliste").val();
        var state = new State(name);
        stateMaschine.Liste.push(state);
        aktuellerState = state;

        state.divinliste.num =listlenght;
        state.num = listlenght;
       
        listlenght++;
        state.divinliste.name = name;
        state.name = name;
        state.divinliste.innerHTML = name;
        state.divinliste.addEventListener('click', function () { onlistklick(this) }, false)




        state.button = document.createElement("button");
        state.button.className = "btn btn-primary";
        state.button.innerText = "add Option";
        state.button.addEventListener('click', function () { addOption(state) }, false)
      
        $("#Kartenliste").append(state.divinliste);
        
        $("#inputliste").val("");
        selectreload();
    }
}



function addOption(thisstate)
{
    var newOption = new Option();

    
    thisstate.optionen.push(newOption);
    setkarte(thisstate.num);
}


function onlistklick(thisdiv)
{
   // alert(thisdiv.num);
    //    $("#Karte").val("");

    for (i = 0; i < stateMaschine.Liste.length;i++)
    {
        stateMaschine.Liste[i].divinliste.style.backgroundColor = "#f5f5f5";
    }
   // for (states in stateMaschine.Liste)
    {
        stateMaschine.Liste[thisdiv.num].divinliste.style.backgroundColor = "lightblue";
    }

    setkarte(thisdiv.num);
}

function selectreload()
{
    for (var kartennum = 0; kartennum < stateMaschine.Liste.length; kartennum++) 
    {
        for (var i = 0; i < stateMaschine.Liste[kartennum].optionen.length; i++) 
        {

            stateMaschine.Liste[kartennum].optionen[i].nextstate = stateMaschine.Liste[kartennum].optionen[i].select.value;
            
        }
    }




    for (var kartennum = 0; kartennum < stateMaschine.Liste.length; kartennum++)
    {
        for (var i = 0; i < stateMaschine.Liste[kartennum].optionen.length; i++)
        {

            while (stateMaschine.Liste[kartennum].optionen[i].select.hasChildNodes())
            {
                stateMaschine.Liste[kartennum].optionen[i].select.removeChild(stateMaschine.Liste[kartennum].optionen[i].select.childNodes[0]);
            }

            for (var j = 0; j < stateMaschine.Liste.length; j++)
            {
                var newoption = document.createElement("option");
                newoption.value = j;
                newoption.innerText = stateMaschine.Liste[j].name;
                stateMaschine.Liste[kartennum].optionen[i].select.appendChild(newoption);
            }
        }
    }

    for (var kartennum = 0; kartennum < stateMaschine.Liste.length; kartennum++) {
        for (var i = 0; i < stateMaschine.Liste[kartennum].optionen.length; i++) {

            stateMaschine.Liste[kartennum].optionen[i].select.value = stateMaschine.Liste[kartennum].optionen[i].nextstate;

        }
    }
}

function setkarte(kartennum)
{
    //loeschechild($("#Karte"));
    $("#Karte").empty();
    $("#Karte").append(stateMaschine.Liste[kartennum].div);

    
    for (var i = 0; i < stateMaschine.Liste[kartennum].optionen.length; i++)
    {
        $("#Karte").append(stateMaschine.Liste[kartennum].optionen[i].div);


    }
    selectreload();

    $("#Karte").append(stateMaschine.Liste[kartennum].button);

   // alert($("#Karte").val());
   // $("#Karte").val("");

   // $("#Karte").val("stateMaschine.Liste[kartennum].name");
}

/*
function loeschechild(element)
{
    while (element.firstChild)
    {
        element.removeChild(element.firstChild);
    }
}
*/

/*
var statetext = $("#Statetext");
var stateoption = $("#Stateoption");
function refreshInterface()
{
   
    while (statetext.firstChild)
    {
        statetext.removeChild(statetext.firstChild);
    }


    while (stateoption.firstChild)
    {
        stateoption.removeChild(stateoption.firstChild);
    }

}

*/


//Alle State in der "Liste"
function StateMaschine()
{
    this.Liste=[];
}

//Eine State hat einen Namen als Zuweisung und eine unbestimmte anzahl an Optionen
function State(statename)
{
    this.name = statename;
    this.optionen = [];
    this.text;
    this.num;

    this.div = document.createElement("div");
    this.div.className = "well";

    this.divinliste = document.createElement("li");
    this.divinliste.className = "list-group-item";
   



    this.kartetext = document.createElement("textarea");
    this.kartetext.className = "form-control";
    this.kartetext.setAttribute("rows", "3")


    this.div.appendChild(this.kartetext);
    

  //  div.innerHTML = "test";
}

//eine Option hat ihren Anzeige text und einen folgezustand
function Option()
{
    this.div = document.createElement("div");
    this.div.className = "well";

    this.text = document.createElement("textarea");
    this.text.className = "form-control";
    this.text.setAttribute("rows", "3")



    this.select = document.createElement("select");





    this.div.appendChild(this.text);
    this.div.appendChild(this.select);

    this.nextstate;


  
   
}

