    //https://teachablemachine.withgoogle.com/models/L89qIzlld/

function Iniciar(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classFier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/L89qIzlld/model.json", acessarModelo)
}

function acessarModelo(){
    classFier.classify(obterResultados)
}

function obterResultados(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("resultLabel").innerHTML = "Posso Ouvir: "+results[0].label
        document.getElementById("resultConfidence").innerHTML = "Precisao: "+((results[0].confidence)*100).toFixed(2)+"%"
        var label = results[0].label
        var img = document.getElementById("A1")
        var img2 = document.getElementById("A2")
        var img3 = document.getElementById("A3")
        var img4 = document.getElementById("A4")
        if(label == "Apito"){
            img.src= "aliens-01.gif"
            img2.src= "aliens-02.png"
            img3.src= "aliens-03.png"
            img4.src= "aliens-04.png"
        }
        else if(label == "Flauta"){
            img.src= "aliens-01.png"
            img2.src= "aliens-02.gif"
            img3.src= "aliens-03.png"
            img4.src= "aliens-04.png"
        }
        else if(label == "Palmas"){
            img.src= "aliens-01.png"
            img2.src= "aliens-02.png"
            img3.src= "aliens-03.gif"
            img4.src= "aliens-04.png"
        }
        else{
            img.src= "aliens-01.png"
            img2.src= "aliens-02.png"
            img3.src= "aliens-03.png"
            img4.src= "aliens-04.gif"
        }

    }

    
}