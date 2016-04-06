var app = angular.module('myApp', []);
console.log("THis is running");
app.controller('MainController', function($scope){
  $scope.toDo = '';
  $scope.toDoList = [];

  $scope.runClick = function(){

    $scope.toDoList.push($scope.toDo);
    console.log($scope.toDoList);
    $scope.toDo ='';
    console.log($scope.runClick());
  }
  $scope.removeItem = function(){
    // This removes last item
    // $scope.toDoList.pop();
    $scope.toDo.remove()
  }
});
