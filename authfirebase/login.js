      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries

      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyBPsyT3idkbKgIs6Tv9VYUGBYJEwGmVwKk",
        authDomain: "gerakmelingkar-af778.firebaseapp.com",
        databaseURL: "https://gerakmelingkar-af778-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "gerakmelingkar-af778",
        storageBucket: "gerakmelingkar-af778.appspot.com",
        messagingSenderId: "642003937999",
        appId: "1:642003937999:web:50fc9c9e8e1fe5dbb465ba"
      };
    

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      import { getDatabase, ref, child, set, get, update, remove } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

      const db = getDatabase();

      //--references--//

      const name = document.getElementById("nama_signup");
      const NIS = document.getElementById("nis_signup");
      const kelas = document.getElementById("kelas_signup");
      const sekolah = document.getElementById("sekolah_signup");
      const password = document.getElementById("pass_signup");
      const submit= document.getElementById("button_signup");

      //--validation--//

      function isEmptyOrSpaces(str) {
       return str == null || str.match(/^ *$/) !== null;
      }

      function validation() {
        let nameregex = /^[a-zA-Z\s]+$/;
        let nisregex = /^[a-zA-Z0-9]+$/;

        if (isEmptyOrSpaces(name.value) || isEmptyOrSpaces(NIS.value) || isEmptyOrSpaces(kelas.value) || isEmptyOrSpaces(sekolah.value) || isEmptyOrSpaces(password.value)) {
          alert("Silahkan Isi Semua Data");
        }

          if (!nameregex.test(name.value)) {
          alert("Nama harus Sesuai dengan Alphabet");
          return false;
        }

        if (!nisregex.test(NIS.value)) {
          alert("NIS berupa angka");
          return false;
        }
        return true;
      }

      //--register user to firebase--//

        function RegisterUser() {
        if (!validation()) {
          return;
        }

        const dbRef = ref(db);

        get(child(dbRef, "Data-Siswa/" + name.value)).then((snapshot) => {
          if (snapshot.exists()) {
            alert("Akun sudah terdaftar!");
          } else {
            set(ref(db, "Data-Siswa/" + name.value), {
              fullname: name.value,
              nis: NIS.value,
              kelas: kelas.value,
              sekolah: sekolah.value,
              password: password.value,
            })
              .then(() => {
                alert("registrasi berhasil");
                window.location = "index.html";
              })
              .catch((error) => {
                alert("gagal");
              });
          }
        });
      }
      //assign the events
      submit.addEventListener("click", RegisterUser);

      //--references--//
      const submit2 = document.getElementById("button_signin");
      const name1 = document.getElementById("name_sigin")
      const password1  = document.getElementById("pass_sigin")
	
      //proses autentikasi
      function AuthenticateUser() {
      const dbRef = ref(db);

      get(child(dbRef, "Data-Siswa/" + name.value )).then((snapshot) => {
      if (snapshot.exists()) {
        let dbNIS = snapshot.val().nis;
        let dbnama = snapshot.val().fullname;
        let dbkelas = snapshot.val().kelas;
        let dbsekolah = snapshot.val().sekolah;
        let dbpassword = snapshot.val().password;

        if (dbNIS == name.value && dbpassword == password.value) {
        sessionStorage.setItem("NIS", dbNIS);
        sessionStorage.setItem("name", dbnama);
        sessionStorage.setItem("kelas", dbkelas);
        sessionStorage.setItem("sekolah", dbsekolah);
        sessionStorage.setItem("password", dbpassword);
        // alert("Berhasil Login");
        window.location = "Beranda.html";
        } else {
        alert("nama atau nis yang anda masukkan salah");
        }
      } else {
        alert("anda belum terdaftar");
      }
      });
    }
//assign the events
submit2.addEventListener("click", AuthenticateUser);