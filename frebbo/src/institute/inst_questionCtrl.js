

(function(){
'use strict';
 angular.module('main')
 .controller('inst_questionCtrl',inst_questionCtrl) ;

 inst_questionCtrl.$inject = ['$scope','Access','File','$mdDialog'];

	function inst_questionCtrl($scope,Access,File,$mdDialog){
		Access.obtain('curriculum').then(function(val){$scope.curriculum= val;});

		$scope.tool_mesg="All Curriculum";
		$scope.enter_curric=enter_curric;
		$scope.set_course=set_course;
		$scope.set_chapter=set_chapter;
		$scope.addDialog=addDialog;
		$scope.addQuestion=addQuestion;
		$scope.addDraftQuest=addDraftQuest;
		$scope.quest_nos=$scope.draft_quest=[];
		$scope.tag_model=['dfsa','afds'];
		function enter_curric(name){
			$scope.curric_box=true;
			$scope.curric_name=name;
			$scope.tool_mesg="All Curriculum >" +name;
		};

		function set_course(name){
			$scope.curric_course=name;
			$scope.tool_mesg="All Curriculum >" +$scope.curric_name+">"+name;

			angular.forEach($scope.curriculum,function(value,index){
               if(value.name==$scope.curric_name){
               	angular.forEach(value.courses,function(value1,index){

               		if(value1.name==$scope.curric_course){	 	
               		 			 $scope.quest_nos.push(value1.questions);
		    	}
		    	})
               }
            })
            Access.obtain('questions',$scope.quest_nos).then(function(val){$scope.questions= val;});
		};

		function set_chapter(name){
			$scope.curric_chapter=name;
			$scope.tool_mesg="All Curriculum >" +$scope.curric_name+">"+$scope.curric_course+">"+name;
		};


   		 function addQuestion(){
   		 	var extra=[$scope.curric_name,$scope.curric_course,"add"];
   		 			 Access.send('questions',$scope.draft_quest,extra).then(function(val){$scope.alert=val;});
   		 };
   		  function addDraftQuest(){
   		 	var temp=this;
   		 	$scope.draft_quest.push({quest:temp.add_quest, correct_ans:temp.add_correct,options:temp.add_opt,difficulty:temp.add_diff,timing:temp.add_timing,main_tag:temp.add_maintag,secondary_tag:temp.add_sectag});
              temp.add_quest=temp.add_correct=temp.add_opt=temp.add_diff=temp.add_timing=temp.add_maintag=temp.add_sectag='';

   		 };


   		 // for dialog

			  function addDialog(ev) {
			    $mdDialog.show({
			      controller: DialogController,
			      templateUrl: '/views/institute/add_questDialog.tmpl.html',
			      targetEvent: ev,
			    })
			    .then(function(answer) {
			      $scope.alert = 'You said the information was "' + answer + '".';
			    }, function() {
			      $scope.alert = 'You cancelled the dialog.';
			    });
			  };

			  
  };

})(); 

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
  $scope.newQuestion=newQuestion;

	  function newQuestion(){
	  		var temp=this;
				  angular.forEach($scope.questions,function(value,index){
	               	value.push({quest:temp.add_quest, correct_ans:temp.add_correct,options:temp.temp.add_options,difficulty:temp.add_diff,timing:temp.add_timing,main_tag:temp.add_maintag,secondary_tag:temp.add_sectag});
	               
	               	temp.stud_name = '';temp.stud_roll = '';temp.stud_email='';temp.stud_phone = '';temp.stud_gender='';
			        console.log(value.students);
	            })

	  };
}	