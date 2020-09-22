var largura = 640;
var altura = 480;

var tela = 0;
var tempo = 0;

var video;
var snapshots = [];
var counter = 0;
var vScale = 4;
var total;


let theShader;

var muda = 0;
var transp = 127;

var radius = 8;
var imgCache;
let overAllTexture;


function preload() {
  //não funciona por algum motivo misterioso
  //theShader = loadShader('vert.txt', 'frag.txt');

  video = createCapture(VIDEO, () => {
    video.size(largura, altura);
  }
  );
  imgCache = createGraphics(largura, altura);
}

function setup() {

  canvas = createCanvas(largura, altura);
  canvas.center();

  imgCache = createGraphics(largura, altura);
  imgCache.translate(largura, 0);
  imgCache.scale(-1.2, 1);
  rectMode(CENTER);
  video.hide();

  overAllTexture = createGraphics(width, height);
  overAllTexture.loadPixels();
  noStroke();
  for (var i = 0; i < width + 50; i++) {
    for (var o = 0; o < height + 50; o++) {
      overAllTexture.set(i, o, color(100, noise(i / 3, o / 3, i * o / 50) * random([0, 50, 100])));
    }
  }
  overAllTexture.updatePixels();
  rectMode(CENTER);
  video.hide();
}

function draw() {
  tempo++;
  //print(tempo, ",", tela)

  if (tempo > 30) {
    tela++;
    tempo = 0;
    restart=true;
    clear();
    snapshots.splice(0, snapshots.length);
  }
  if (tela > 3) {
    tela = 0;
  }
  if (tela == 1) {
    //rainbowshader();
    nostalgia();
  }

  if (tela == 2) {
    multipicture();
  }

  if (tela == 3) {
    translate(0, height);
    scale(1, -1);
    ghost();
  }
  if (tela == 0) {
    texto();
  }
}  
