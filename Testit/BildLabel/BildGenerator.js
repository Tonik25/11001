

function GenerateImage()
{
    var img = document.createElement("img");
    img.src = "mouse.jpg";



    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');



    context.drawImage(img, 0, 0);
    


    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(450,800);
    context.stroke();
    

    

    
    

    

   

    //$("#bildg").append(img);


   
}