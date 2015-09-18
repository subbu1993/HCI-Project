var kiosk = angular.module("kiosk",[]);
kiosk.controller('kioskController',function($scope){
  $scope.left_top = "Find a Class";
  $scope.left_bottom = "Find a Service";
  $scope.right_top = "Find a Professor";
  $scope.right_bottom = "Order Food";
  $scope.clickable = "Welcome to CampusBot";
  $scope.class_button = false;
  $scope.drill_down = false;
  $scope.font_size = 10;

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

  $scope.goBack = function(){
    $scope.left_top = "Find a Class";
    $scope.left_bottom = "Find a Service";
    $scope.right_top = "Find a Professor";
    $scope.right_bottom = "Order Food";
    $scope.clickable = "Welcome to CampusBot";
    $scope.class_button = false;
    $scope.drill_down = false;
  }

  $scope.professorButtonController = function(){
    $scope.left_top = "Name";
    $scope.left_bottom = "Class";
    $scope.right_top = "Department";
    $scope.right_bottom = "Look up a list";
    $scope.clickable = "Welcome to CampusBot";
    $scope.class_button = false;
    $scope.drill_down = true;
  }

  $scope.serviceButtonController = function(){
    $scope.left_top = "International Students' office";
    $scope.left_bottom = "Health Services";
    $scope.right_top = "Career Services";
    $scope.right_bottom = "Canteen";
    $scope.clickable = "Welcome to CampusBot";
    $scope.class_button = false;
    $scope.drill_down = true;
  }

  $scope.foodController = function(){
    $scope.left_top = "Pizza";
    $scope.left_bottom = "Burger";
    $scope.right_top = "Beverages";
    $scope.right_bottom = "Checkout";
    $scope.clickable = "Welcome to CampusBot";
    $scope.class_button = false;
    $scope.drill_down = true;
  }
});
