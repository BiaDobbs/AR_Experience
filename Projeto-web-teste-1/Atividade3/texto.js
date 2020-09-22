
function texto() { 

  background(0);
  imgCache.image(video, 0, 0);

  push();
  noStroke();
  for (var y = 0; y < imgCache.height; y += radius) {
    for (var x = 0; x < imgCache.width; x += radius) {
      var pixel = imgCache.get(x, y);
      var r = pixel[0];
      var g = pixel[1];
      var b = pixel[2];

      let bk = (r + g + b) / 3;
      let bkI = 10 - int(bk / 25.5);

      let txt = "FICÇÃO&HISTORIAS";
      fill(r + 50, g + 50, b + 50);
      textSize(radius);
      textStyle(BOLD);
      text(txt[bkI], x, y);
    }
  }
  pop();

  push();
  //image(overAllTexture, 0, 0);
  pop();
}
