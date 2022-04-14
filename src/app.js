// Get the modal
var imgShazam = document.getElementById("shazam");
var imgAquaman = document.getElementById("aquaman");
var imgBatman = document.getElementById("batman");
var imgSuperman = document.getElementById("superman");
var imgWonderWoman = document.getElementById("wonderwoman");
var imgShazamMd = document.getElementById("myModalSh");
var imgAquamanMd = document.getElementById("myModalAq");
var imgBatmanMd = document.getElementById("myModalBa");
var imgSupermanMd = document.getElementById("myModalSu");
var imgWonderWomanMd = document.getElementById("myModalWw");

function lanzamientoImagen(img, myModal, caption) {

  var modal = myModal;
  var captionText = document.getElementById(caption);

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  modal.style.display = "block";
  captionText.innerHTML = img.innerText;
}

var span = document.getElementById("close");
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
var span4 = document.getElementById("close4");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  imgShazamMd.style.display = "none";
};
span1.onclick = function () {
  imgAquamanMd.style.display = "none";
};
span2.onclick = function () {
  imgSupermanMd.style.display = "none";
};
span3.onclick = function () {
  imgBatmanMd.style.display = "none";
};
span4.onclick = function () {
  imgWonderWomanMd.style.display = "none";
};


imgShazam.onclick = function () {
  lanzamientoImagen(imgShazam, imgShazamMd, "caption");
};
imgAquaman.onclick = function () {
  lanzamientoImagen(imgAquaman, imgAquamanMd, "caption1");
};
imgSuperman.onclick = function () {
  lanzamientoImagen(imgSuperman, imgSupermanMd, "caption2");
};
imgBatman.onclick = function () {
  lanzamientoImagen(imgBatman, imgBatmanMd, "caption3");
};
imgWonderWoman.onclick = function () {
  lanzamientoImagen(imgWonderWoman, imgWonderWomanMd, "caption4");
};

