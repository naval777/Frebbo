


(function(){
'use strict';
 angular.module('main')
 .controller('inst_testCtrl',inst_testCtrl) ;

 inst_testCtrl.$inject = ['$scope','Access','File','$mdDialog'];

	function inst_testCtrl($scope,Access,File,$mdDialog){

		Access.obtain('tests').then(function(val){$scope.tests= val;});
		Access.obtain('curriculum').then(function(val){$scope.curriculum= val;});		

		$scope.tool_mesg="All Tests";
		$scope.enter_test=enter_test;
		$scope.go_back=go_back;
		$scope.create_test=create_test;
		$scope.copy_settings=copy_settings;


		function enter_test(name){
			$scope.test_box=true;
			$scope.test_name=name;
			$scope.tool_mesg = "All tests >"+name;
			$scope.testCopy_name=$scope.test_name;
		};
		
		function go_back(name){
		$scope.test_box=false;
		$scope.tool_mesg = "All Batches";
		}

		function create_test(ev){
						$mdDialog.show({
				      controller: instTestDialogCtrl,
				      templateUrl: '/views/institute/test_nameDialog.tmpl.html',
				      targetEvent: ev,
				    });
				};

		$scope.$on("newtest", function (event, args) {
				$scope.test_box=true;
				$scope.tests.push({name:args.name,section:[]});
				$scope.test_name=args.name;
				$scope.tool_mesg = "All Batches >"+$scope.test_name;
  			  });


		function copy_settings(ev){
					$mdDialog.show({
				      controller: instCopyDialogCtrl,
				      templateUrl: '/views/institute/test_copyDialog.tmpl.html',
				      targetEvent: ev,
				    });
				};

		$scope.$on("copytest", function (event, args) {
				$scope.testCopy_name=args.name;
				console.log($scope.testCopy_name);
  			  });

	}

	})();  


function instTestDialogCtrl($scope, $mdDialog,Share){
		
	$scope.Dialog_save = function() {
		    $mdDialog.hide();
		    $scope.$root.$broadcast("newtest", {
            name: $scope.test_name
     		   });
		    console.log("in test dialog");
		  };
		  $scope.Dialog_cancel = function() {
		    $mdDialog.cancel();
		  };
			

		};


function instCopyDialogCtrl($scope,Access, $mdDialog,Share){
		Access.obtain('tests').then(function(val){$scope.tests= val;});
		$scope.setCopy=setCopy;
		function setCopy(name){
			$scope.testCopy_name=name;
		};


	$scope.Dialog_save = function() {
		    $mdDialog.hide();
		    $scope.$root.$broadcast("copytest", {
            name: $scope.testCopy_name
     		   });
		    console.log("in test dialog");
		  };
		  $scope.Dialog_cancel = function() {
		    $mdDialog.cancel();
		  };
			

		};