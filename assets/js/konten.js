function openn() {
  var p = document.getElementsByClassName("sidebar");
  if (p[0].style.display === "block") {
    p[0].style.display = "none";
  } else {
    p[0].style.display = "block";
  }
}

function petunjukk() {
  var x = document.getElementsByClassName("dalam");
  if (x[0].style.display === "none") {
    x[0].style.display = "block";
  } else {
    x[0].style.display = "none";
  }
}

//CONTOH SOAL 
$(document).ready(function(){
    $(".contoh2").hide();
    $(".contoh3").hide();
          $(".no1").click(function(){
                $(".contoh2").hide(0);
                $(".contoh3").hide(0);
                $(".contoh1").show(0);
          });
          $(".no2").click(function(){
                $(".contoh2").show(0);
                $(".contoh1").hide(0);
                $(".contoh3").hide(0);
          });
          $(".no3").click(function(){
                $(".contoh3").show(0);
                $(".contoh2").hide(0);
                $(".contoh1").hide(0);
          });
});

//SOAL
$(document).ready(function(){
    $(".soal2").hide();
    $(".soal3").hide();
          $(".nos1").click(function(){
                $(".soal2").hide(0);
                $(".soal3").hide(0);
                $(".soal1").show(200);
          });
          $(".nos2").click(function(){
                $(".soal2").show(200);
                $(".soal1").hide(0);
                $(".soal3").hide(0);
          });
          $(".nos3").click(function(){
                $(".soal3").show(200);
                $(".soal2").hide(0);
                $(".soal1").hide(0);
          });
});

//Contoh no 1
$(document).ready(function(){
    $(".a").hide();
    $(".dit").hide();
    $(".jwb").hide();
          $(".diket").click(function(){
                $(".a").show(500);
                $(".diket").hide();
                $(".dit").show(500);
          });

    $(".b").hide();
          $(".dit").click(function(){
                $(".b").show(500);
                $(".dit").hide();
                $(".jwb").show(500);
          });

    $(".c").hide();
          $(".jwb").click(function(){
                $(".c").show(500);
                $(".jwb").hide();
          });
});

//contoh no 2
$(document).ready(function(){
    $(".aa").hide();
    $(".dit2").hide();
    $(".jwb2").hide();
          $(".diket2").click(function(){
                $(".aa").show(500);
                $(".diket2").hide();
                $(".dit2").show(500);
          });

    $(".bb").hide();
          $(".dit2").click(function(){
                $(".bb").show(500);
                $(".dit2").hide();
                $(".jwb2").show(500);
          });

    $(".cc").hide();
          $(".jwb2").click(function(){
                $(".cc").show(500);
                $(".jwb2").hide();
          });
});

//contoh no 3
$(document).ready(function(){
    $(".a3").hide();
    $(".dit3").hide();
    $(".jwb3").hide();
          $(".diket3").click(function(){
                $(".a3").show(500);
                $(".diket3").hide();
                $(".dit3").show();
          });

    $(".ba3").hide();
          $(".dit3").click(function(){
                $(".ba3").show(500);
                $(".dit3").hide();
                $(".jwb3").show(500);
          });

    $(".c3").hide();
          $(".jwb3").click(function(){
                $(".c3").show(500);
                $(".jwb3").hide();
          });
});


let petunjuknya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjuknya.length; i++) {
      petunjuknya[i].addEventListener('click', function () {
      if (isinya[i].className.indexOf('hilang') == -1) {
            isinya[i].className += ' hilang';
      } else {
            isinya[i].className = isinya[i].className.replace('hilang', '');
      }
      })
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var l;

for (l = 0; l < dropdown.length; l++) {
  dropdown[l].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
