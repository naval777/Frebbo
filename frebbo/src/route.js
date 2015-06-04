
(function(){
'use strict';
 angular.module('main')
 .config(config);
 	var link='/';
 	var bang='';
	function config($routeProvider,$locationProvider){
		$routeProvider.when('/',{
			templateUrl:link+ 'views/login.html',
			controller:'loginCtrl',
			css: link+'views/css/login.css'
		});
		$routeProvider.when(bang+'/register/institute',{
			templateUrl:link+'views/register_inst.html',
			controller:'inst_regCtrl',
			css: link+'views/css/register_insti.css'
		});
		$routeProvider.when(bang+'/register/professor',{
			templateUrl:link+'views/register_prof.html',
			controller:'prof_regCtrl',
			css: link+'views/css/register_prof.css'
		});
		$routeProvider.when(bang+'/register/student',{
			templateUrl:link+'views/register_stud.html',
			controller:'stud_regCtrl',
			css: link+'views/css/register_stud.css'
		});

		//---------------------------------------------------------institute profile-----------------------------------------

		$routeProvider.when(bang+'/institute/profile',{
			templateUrl:link+'views/institute/profile.html',
			controller:'inst_profileCtrl',
			css: link+'views/institute/css/profile.css'
		});

		$routeProvider.when(bang+'/institute/batch',{
			templateUrl:link+'views/institute/batch.html',
			controller:'inst_batchCtrl',
		//	css: link+'views/institute/css/manage_user.css'
		});

		$routeProvider.when(bang+'/institute/question_bank',{
			templateUrl:link+'views/institute/question.html',
			controller:'inst_questionCtrl',
		//	css: link+'views/institute/css/manage_user.css'
		});
			
		$routeProvider.when(bang+'/institute/add_question',{
			templateUrl:link+'views/institute/add_question.html',
			controller:'inst_questionCtrl',
		//	css: link+'views/institute/css/manage_user.css'
		});

		$routeProvider.when(bang+'/institute/test',{
			templateUrl:link+'views/institute/test.html',
			controller:'inst_testCtrl',
		//	css: link+'views/institute/css/manage_user.css'
		});

		//---------------------------------------------------------student profile-----------------------------------------
		$routeProvider.otherwise({
        redirectTo: '/'
      });
		$routeProvider.when(bang+'/student/take_test',{
			templateUrl:link+'views/student/take_test.html',
			controller:'stud_testCtrl',
		//	css: link+'views/institute/css/manage_user.css'
		});
		$locationProvider.html5Mode(true);
	}

})(); 
