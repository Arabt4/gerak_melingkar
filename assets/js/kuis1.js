function cekJawaban() {
        let isi1 = document.getElementById("isian1").value.toLowerCase();
        let jawaban1 = new RegExp('instalasi');
        let result1 = jawaban1.test(isi1);
        if (result1 == true) {
            document.getElementById("cekIsian1").innerHTML = "benar";
            document.getElementById("cekIsian1").style.color = "green";
            document.getElementById("isian1").style.border = "2px solid green";
        } else {
            document.getElementById("cekIsian1").innerHTML = "salah";
            document.getElementById("cekIsian1").style.color = "red";
            document.getElementById("isian1").style.border = "2px solid red";
        }
    
        let isi2 = document.getElementById("isian2").value.toLowerCase();
        let jawaban2 = new RegExp('512');
        let result2 = jawaban2.test(isi2);
        if (result2 == true) {
            document.getElementById("cekIsian2").innerHTML = "benar";
            document.getElementById("cekIsian2").style.color = "green";
            document.getElementById("isian2").style.border = "2px solid green";
            
        } else {
            document.getElementById("cekIsian2").innerHTML = "salah";
            document.getElementById("cekIsian2").style.color = "red";
            document.getElementById("isian2").style.border = "2px solid red";
        }
    }