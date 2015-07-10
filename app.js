var app = angular.module('myApp', []);

app.controller('ctrl', function($scope,$http,$timeout) {
  //assumming each API is called independently, called once
  //and timeout is used to simulate delay
  $timeout(getAPI1,5000);
  $timeout(getAPI2,10000);
  
  function getAPI1(){
    $http.get('api1.json', {timeout: 5000}).success(function(data){
      $scope.person_array = data.person;
      sortPerson($scope.person_array);
    }).error(function(){
      console.log("error occurs");
    })  
  }
  
  function getAPI2(){
    $http.get('api2.xml', {timeout: 10000}).success(function(data){
      var member_xml  = x2js.xml_str2json(data);
      $scope.person_array = $scope.person_array.concat(member_xml.persons.person);
      sortPerson($scope.person_array);
    }).error(function(){
      console.log("error occurs");
    })
  }
  
  function sortPerson(inputArray){
    inputArray.sort(function(a,b) 
		{
		   return a.id - b.id;
		});
  }
});


