


(function(){
'use strict';
 angular.module('main')
 .controller('stud_testCtrl',stud_testCtrl) ;

 stud_testCtrl.$inject = ['$scope','Access','File'];

	function stud_testCtrl($scope,Access,File){

		Access.obtain('take_test').then(function(val){$scope.questions= val;console.log($scope.questions);});

		$scope.tool_mesg="All Tests";
		$scope.enter_test=enter_test;
		$scope.bool1=false;


		function enter_test(name){
			$scope.test_box=true;
			$scope.test_name=name;
			$scope.tool_mesg = "All tests >"+name;
		};
		
		$scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };
         $scope.saveAns = function (index) {
           $scope.questions[index].answered='true';
        };
        $scope.markReview = function (index) {
            $scope.questions[index].review='true';
            console.log("res");
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

         $scope.isAnsweredIndex = function (index) {
            return $scope.questions[index].answered==='true';
        };
        $scope.isReviewIndex = function (index) {
            return $scope.questions[index].review==='true';
        };
        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.questions.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.questions.length - 1;
        };
	}

	})();  