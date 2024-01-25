let modeloPreTreinado;
let video;

function modeloPronto(){
  modeloPreTreinado.predict(video, obterResult);
}

function obterResult(error, resultados){
  if(error){
    console.error(error);
  }else{
    console.error(resultados);
    let label = resultados[0].label;
    fill(0);
    textSize(100);
    text(label, 10, 10);
  }
}

function setup() {
  createCanvas(750, 599);
  video = createCapture(VIDEO);
  video.hide();

  background(0);
  modeloPreTreinado = ml5.imageClassifier('MobileNet', modeloPronto);

}



function draw() {
 image(video, 0, 0);
}