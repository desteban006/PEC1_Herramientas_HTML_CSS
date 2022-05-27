// Get the modal
var imgBatman = document.getElementById("batman");
var imgSuperman = document.getElementById("superman");
var imgBatmanMd = document.getElementById("myModalBa");
var imgSupermanMd = document.getElementById("myModalSu");
function lanzamientoImagen(img, myModal, caption) {
    var modal = myModal;
    var captionText = document.getElementById(caption);
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    modal.style.display = "block";
    captionText.innerHTML = img.innerText;
}
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    imgSupermanMd.style.display = "none";
};
span3.onclick = function() {
    imgBatmanMd.style.display = "none";
};
imgSuperman.onclick = function() {
    lanzamientoImagen(imgSuperman, imgSupermanMd, "caption2");
};
imgBatman.onclick = function() {
    lanzamientoImagen(imgBatman, imgBatmanMd, "caption3");
};

//# sourceMappingURL=categoria.816e7b21.js.map
