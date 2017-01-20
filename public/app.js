// Initialize Firebase
var config = {
  apiKey: "AIzaSyDzif7BOOYgESIuvEl45CXspf9iyTO_5yE",
  authDomain: "fir-2eaf7.firebaseapp.com",
  databaseURL: "https://fir-2eaf7.firebaseio.com",
  storageBucket: "fir-2eaf7.appspot.com",
  messagingSenderId: "355157793688"
};
firebase.initializeApp(config);

var app  = angular.module("myApp", ["firebase"]);

 app.controller("CtrlList", function($scope, $firebaseArray){

  var ref = firebase.database().ref().child("posts");
 
  $scope.posts = $firebaseArray(ref);

  $scope.addPost = function(){          
    $scope.posts.$add({
      title: $scope.newTitle,
      author: $scope.newAuthor,
      text: $scope.newText
    });  
    $scope.newTitle = null; 
    $scope.newAuthor = null; 
    $scope.newText = null;        
  };

});