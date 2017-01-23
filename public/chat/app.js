var config = {
  apiKey: "AIzaSyDzif7BOOYgESIuvEl45CXspf9iyTO_5yE",
  authDomain: "fir-2eaf7.firebaseapp.com",
  databaseURL: "https://fir-2eaf7.firebaseio.com",
  storageBucket: "fir-2eaf7.appspot.com",
  messagingSenderId: "355157793688"
};
firebase.initializeApp(config);

var btnLogin = document.getElementById('btnLogin');
var btnSair = document.getElementById('btnSair');
var user;

btnLogin.addEventListener('click', function(){

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;

    // alert("Bem vindo ao chat "+user.displayName);
    window.location.href ="#chat";

    //
    descerDiv(); 
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
});        
});

btnSair.addEventListener('click', function(){
  firebase.auth().signOut().then(function() {
    console.log('saiu');
  }, function(error) {
    // An error happened.
  });
});

var app  = angular.module("myApp", ["firebase"]);

var data;

app.controller("CtrlList", function($scope, $firebaseArray){       

var ref = firebase.database().ref().child("chat");

$scope.chatx = $firebaseArray(ref);

$scope.addPost = function(){          
  $scope.chatx.$add({
    img: user.photoURL,
    author: user.displayName,
    date: Date(),
    text: $scope.newText
  });  

  $scope.newText = null;     
  descerDiv(); 
};

});   

function descerDiv(){
  var objScrDiv = document.getElementById("messages");
  objScrDiv.scrollTop = objScrDiv.scrollHeight; 
}