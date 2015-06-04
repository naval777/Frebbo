

(function(){
'use strict';
 angular.module('main')
 .controller('inst_sidenavCtrl',inst_sidenavCtrl) ;

 	function inst_sidenavCtrl($scope){

 		$scope.navigation = [{title:'Dashboard'},{title:'Question Bank'},{title:'Batch'},{title:'Tests'},{title:'Reports'},{title:'Manage Staff'},{title:'Search Institute'}];
 		
 	}
})(); 
