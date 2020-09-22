

function multipicture() {
  var w = 100;
  var h = 100;
  var x = 0;
  var y = 0;



  // How many cells fit in the canvas
  total = (largura/ w) * (altura/ h);
  snapshots[counter] = video.get();
  counter++;
  if (counter >= total) {
    counter = 0;
  }
  var fim = altura-altura/2;
  for (var i = 0; i < snapshots.length; i++) {
    var index = (i + frameCount) % snapshots.length;
    image(snapshots[index], x, y, w, h);
    x = x + w;
    if (x >= largura) {
      x = 0;
      y = y + h;
    }
    //print(y);
  }
  filter(POSTERIZE, 5);
  //print(altura,",", fim);
  //print(snapshots.length);
}
