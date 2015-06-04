// controllers for login and signup i.e. the app 'main'

	////////////////////////////////////// login///////////////////////////////

////////////////////////////////////////////////////////login control//////////////////////


(function(){
'use strict';
 angular.module('main')
 .controller('loginCtrl',loginCtrl);

	loginCtrl.$inject = ['$location', '$scope','Auth'];

	function loginCtrl($location, $scope,Auth){
		activate();
		$scope.login =login;
		$scope.Fruit=['Apple', 'Banana', 'Orange'];
		function login(){
			Auth.login($scope.email,$scope.pwd);
				$scope.email='asdf';
		}

		 function activate() {
      //If the user is authenticated, they should not be here.
      if (Auth.isAuthenticated()) {
       // $location.url('/profile');
      }
    }

	}

})(); 


////////////////////////////////////////////////////////institute register//////////////////////

(function(){
'use strict';
 angular.module('main')
 .controller('inst_regCtrl',inst_regCtrl);

 inst_regCtrl.$inject = ['$location', '$scope', 'Auth'];


	function inst_regCtrl($location, $scope, Auth){
			activate();
			$scope.register =register;

			function register() {
				Auth.register_inst();
			
			}
			 function activate() {
      //If the user is authenticated, they should not be here.
      if (Auth.isAuthenticated()) {
       // $location.url('/profile');
     	 }
    	}

	}

})(); 

////////////////////////////////////////////////////////// professor register////////////////

(function(){
'use strict';
 angular.module('main')
 .controller('prof_regCtrl',prof_regCtrl);

 prof_regCtrl.$inject = ['$location', '$scope', 'Auth'];


	function prof_regCtrl($location, $scope, Auth){
			activate();
			$scope.register =register;
		
			function register() {
				Auth.register_prof($scope.prof_email,$scope.prof_name,$scope.prof_pwd1,$scope.prof_pwd2,$scope.prof_id,$scope.prof_inst);
				$scope.prof_email='asdf';
			}
			 function activate() {
      //If the user is authenticated, they should not be here.
      if (Auth.isAuthenticated()) {
       // $location.url('/profile');
     	 }
    	}
	}

})(); 



////////////////////////////////////////////////////////// student register////////////////

(function(){
'use strict';
 angular.module('main')
 .controller('student_regCtrl',student_regCtrl);

 student_regCtrl.$inject = ['$location', '$scope', 'Auth'];


	function student_regCtrl($location, $scope, Auth){
			activate();
			$scope.register =register;

			function register() {
				Auth.register_stud(email,password,username);
				
			}
			 function activate() {
      //If the user is authenticated, they should not be here.
      if (Auth.isAuthenticated()) {
       // $location.url('/profile');
     	 }
    	}
	}

})();  