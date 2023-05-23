var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Tomando la próxima selfie en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function(){
        var image_id = "selfie1";
        takeSnapshot();
        speak_data="Tomando tu selfie en 5 segundos"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },5000)

    setTimeout(function(){
        var image_id = "selfie2";
        takeSnapshot();
        speak_data="Tomando tu selfie en 5 segundos"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    },10000)

    setTimeout(function(){
        var image_id = "selfie3";
        takeSnapshot();
    },15000)
}

//creo "takeSnapshot" hago que se tome mi selfie condicionales "si img_id == selfie1" lo muestro en result1
function takeSnapshot(){
    if(image_id == selfie1){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = "<img id='selfie' src="+data_uri+">";
        })
    }

    if(image_id == selfie2){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = "<img id='selfie' src="+data_uri+">";
        })
    }

    if(image_id == selfie3){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = "<img id='selfie' src="+data_uri+">";
        })
    }
}