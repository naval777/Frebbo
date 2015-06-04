// --------------------------------------This is for institute manage user----------




(function(){
'use strict';
 angular.module('main')
 .controller('inst_profileCtrl',inst_profileCtrl) ;

 	function inst_profileCtrl($scope){

 		
 	}
})(); 


(function(){
'use strict';
 angular.module('main')
 .controller('inst_manageCtrl',inst_manageCtrl) ;

 inst_manageCtrl.$inject = ['$scope','File','$filter','$http'];

 	function inst_manageCtrl($scope,File,$http,$filter){
 		$scope.visible1 = false;
 		$scope.visible2 = false;
 		$scope.visible3 = false;

        $scope.staff = [];

    $scope.newStaff=newStaff;
    $scope.add=add;
    $scope.remove=remove;
    $scope.selectFile=selectFile;

     function newStaff(){

        $scope.staff.push({name:this.staffname, id:this.staffid,role:this.staffrole,staff_selected:'false'});
   	
        this.staffname = '';
        this.staffid = '';
        this.staffrole='';
        console.log($scope.staff);
   	 };


//for remove button
   	  $scope.chckedIndexs=[];
     $scope.checkedIndex = function (person) {
         if ($scope.chckedIndexs.indexOf(person) === -1) {
             $scope.chckedIndexs.push(person);
         }
         else {
             $scope.chckedIndexs.splice($scope.chckedIndexs.indexOf(person), 1);
         }
     }

     function add(index){
     		if(angular.element( document.querySelector('#tab1')).hasClass('active')){$scope.add_visible1=true};
     		if(angular.element( document.querySelector('#tab2')).hasClass('active')){$scope.add_visible2=true};
     		if(angular.element( document.querySelector('#tab3')).hasClass('active')){$scope.add_visible3=true};
     };
   	  function remove(index){
   	  	  angular.forEach($scope.chckedIndexs, function (value, index) {
              var index = $scope.staff.indexOf(value);
              $scope.staff.splice($scope.staff.indexOf(value), 1);
              console.log('here');
          });
           
   	  	  	$scope.chckedIndexs=[];
   	  };

// remove ends

//upload begins
   	 function selectFile($files){
   	  File.upload($files);
   	};


//viwe list begins	
          $scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    $scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
    $scope.selectedPredicate = $scope.predicates[0];


 	}


})(); 