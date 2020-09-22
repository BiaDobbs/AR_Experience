function ghost() {

  var numeros = [127, 200, 100, 225, 170, 135, 250, 230, 187, 153];

  image(video, 0, 0);
  tint(255, 100);
  //
  //filter(INVERT);
  // tint(10, 113, 114,transp++);
  filter(INVERT);
  image(video, 0, 0);
  tint(255, transp);

  muda++;
  if (muda == 30) {
    //transp = round(random(50, 250));
    transp = random(numeros);
    muda = 0;
  }
  //print(transp);
}
