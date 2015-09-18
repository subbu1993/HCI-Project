var kiosk = angular.module("kiosk",[]);
kiosk.controller('kioskController',function($scope){
  $scope.left_top = "Find a Class";
  $scope.left_bottom = "Find a Service";
  $scope.right_top = "Find a Professor";
  $scope.right_bottom = "Order Food";
  $scope.clickable = "Welcome to CampusBot";
  $scope.class_button = false;
  $scope.drill_down = false;

  $scope.classButtonController = function() {
    $scope.left_top = "Class ID";
    $scope.left_bottom = "Class Name";
    $scope.right_top = "Class Code";
    $scope.right_bottom = "Back";
    $scope.clickable = "Class";
    $scope.class_button = true;
    $scope.drill_down = true;
  }

  $scope.reset = function(){
    $scope.left_top = "Find a Class";
    $scope.left_bottom = "Find a Service";
    $scope.right_top = "Find a Professor";
    $scope.right_bottom = "Order Food";
    $scope.clickable = "Welcome to CampusBot";
    $scope.class_button = false;
  }
});
