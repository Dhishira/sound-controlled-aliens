function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    sounds = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6kAcc_7Ld/model.json",modelready);
}

function modelready()
{
    sounds.classify(gotresult);
}

function gotresult(error,results)
{
   if (error)
   {
       console.error(error);
   } 
   else
   {
       console.log(results);
       random_numnber_r = Math.floor(Math.random() * 255)+1 ;
       random_numnber_g = Math.floor(Math.random() * 255)+1 ;
       random_numnber_b = Math.floor(Math.random() * 255)+1 ;

       document.getElementById("result_name").innerHTML = "I can hear - "+results[0].label;
       document.getElementById("result_confidence").innerHTML = "Accuracy - "+(results[0].confidence * 100).toFixed(2) + "%" ;
       document.getElementById("result_name").style.color = "rgb("+random_numnber_r+","+random_numnber_g+","+random_numnber_b+")";
       document.getElementById("result_confidence").style.color = "rgb("+random_numnber_r+","+random_numnber_g+","+random_numnber_b+")";

       img = document.getElementById("alien1") 
       img1 = document.getElementById("alien2") 
       img2 = document.getElementById("alien3") 
       img3 = document.getElementById("alien4") 

       if ( results[0].label == "Clap")
       {
         img.src = "aliens-01.gif" ;
         img.src = "aliens-02.png" ;
         img.src = "aliens-03.png" ;
         img.src = "aliens-04.png" ;
       }
       else if ( results[0].label == "Snap")
       {
         img.src = "aliens-01.png" ;
         img.src = "aliens-02.gif" ;
         img.src = "aliens-03.png" ;
         img.src = "aliens-04.png" ;
       }
       else if ( results[0].label == "Bell")
       {
         img.src = "aliens-01.png" ;
         img.src = "aliens-02.png" ;
         img.src = "aliens-03.gif" ;
         img.src = "aliens-04.png" ;
       }
       else ( results[0].label == "Background Noise")
       {
         img.src = "aliens-01.png" ;
         img.src = "aliens-02.png" ;
         img.src = "aliens-03.png" ;
         img.src = "aliens-04.gif" ;
       }
   }

}