var kiosk = app.module('kiosk',[]);
kiosk.controller('kioskController',function($scope){
  console.log('controller called');
  $scope.text1 = "Find a class";
  $scope.clickable = "Welcome to CampusBot";
  $scope.class_button = false;
  $scope.text1 = "blah";
});
