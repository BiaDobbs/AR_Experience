function nostalgia() {
  video.loadPixels();
  


  for (var y = 0; y < video.height; y += 5) {

    for (var x = 0; x < video.width; x += 5) {

      var pixel = video.pixels[(y * video.width + x) * 4];

      rectMode(CENTER);

      if (pixel < 60)
        stroke(2, 4, 16);
      else if (pixel >= 60 && pixel < 120)
        stroke(100, 0, 204);
      else if (pixel >= 120 && pixel < 180)
        stroke(128, 102, 255);
      else if (pixel >= 180)
        stroke(217, 179, 255);

      triangle(x, y, x+5, y+5, x-5, y-5);
      //
    }
  }
}
