var firebaseConfig = {
      apiKey: "AIzaSyBd4j9ilKRVWdWMrshLcmgKc7R-bqoHBOs",
      authDomain: "kwitter-763e0.firebaseapp.com",
      databaseURL: "https://kwitter-763e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-763e0",
      storageBucket: "kwitter-763e0.appspot.com",
      messagingSenderId: "156938266943",
      appId: "1:156938266943:web:08563aa8bb1b30f52d0b8a",
      measurementId: "G-1BGPQJDH8D"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location="index.html";
  }