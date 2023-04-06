function bukaIsi(evt, nmrIsi) {
  var i, isian, pilihan;
  isian = document.getElementsByClassName("isian");
  for (i = 0; i < isian.length; i++) {
    isian[i].style.display = "none";
  }
  pilihan = document.getElementsByClassName("pilihan");
  for (i = 0; i < pilihan.length; i++) {
    pilihan[i].className = pilihan[i].className.replace(" tmblAktif", "");
  }
  document.getElementById(nmrIsi).style.display = "block";
  evt.currentTarget.className += " tmblAktif";
}

function petkon(){

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("petkon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}