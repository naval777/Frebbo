

(function(){
'use strict';
 angular.module('main')
 .controller('inst_batchCtrl',inst_batchCtrl) ;

 inst_batchCtrl.$inject = ['$scope','Access','File','$mdDialog','Share'];

	function inst_batchCtrl($scope,Access,File,$mdDialog,Share){

		Access.obtain('batches').then(function(val){$scope.batches= val; console.log("iam in")});
		Access.obtain('curriculum').then(function(val){$scope.curriculum= val;});		

		$scope.tool_mesg="All Batches";
		$scope.add_singleStudent=true;
		$scope.edit_singleStudent=true;
	    $scope.save_changes_hide=true;
		$scope.enter_batch=enter_batch;
		$scope.save_changes=save_changes;
		$scope.go_back=go_back;
		$scope.selectFile=selectFile;
		$scope.newStudent=newStudent;
		$scope.create_batch=create_batch;
		$scope.add=add;$scope.edit=edit;
		$scope.editStudent=editStudent;
		$scope.delete_stud=delete_stud;
		$scope.chck_toggle=chck_toggle;
		$scope.selected=$scope.deleted_vals=[];


		function enter_batch(name){
				$scope.batch_box=true;
				$scope.batch_name=name;
				$scope.tool_mesg = "All Batches >"+name;
		};

		
		function create_batch(ev){
						$mdDialog.show({
				      controller: instBatchDialogCtrl,
				      templateUrl: '/views/institute/batch_nameDialog.tmpl.html',
				      targetEvent: ev,
				    });
				};

		 $scope.$on("newbatch", function (event, args) {
				$scope.batch_box=true;
				$scope.batches.push({name:args.name,students:[],curriculum:""});
				$scope.batch_name=args.name;
				$scope.tool_mesg = "All Batches >"+$scope.batch_name;
  			  });



		function go_back(name){
		$scope.batch_box=false;
		$scope.tool_mesg = "All Batches";
		}

		function newStudent(){
			var temp=this;
			  angular.forEach($scope.batches,function(value,index){
               if(value.name==$scope.batch_name){
               	value.students.unshift({name:temp.stud_name, rollnum:temp.stud_roll,email:temp.stud_email,phone:temp.stud_phone,gender:temp.stud_gender,added:'true'});
               
               	temp.stud_name = '';temp.stud_roll = '';temp.stud_email='';temp.stud_phone = '';temp.stud_gender='';
		        console.log(value.students);
               }
            })
			  $scope.save_changes_hide=false;
   		 };


   		 function chck_toggle(item,list){
   		 	 var idx = list.indexOf(item);
		        if (idx > -1) list.splice(idx, 1);
		        else list.push(item);
   		 };


   		 function add(){
		$scope.add_singleStudent=false;
		console.log($scope.batch_curric);
		}


		function edit(row){
		$scope.edit_singleStudent=false;
		$scope.row_roll=row.rollnum;
		$scope.row_name=row.name;
		console.log();
		}

		function editStudent(row){
		$scope.edit_singleStudent=true;
		angular.forEach($scope.batches,function(value,index){
               if(value.name==$scope.batch_name){
               	  value.students.splice(value.students.indexOf(row),1);
               	  value.students.unshift({edited:'true',name:row.name,rollnum:row.rollnum,email:row.email,phone:row.phone,gender:row.gender});
               	}
               });
		 $scope.save_changes_hide=false;
		}

   		 function delete_stud(){
   		 	console.log($scope.selected);
   		 	 angular.forEach($scope.batches,function(value,index){
               if(value.name==$scope.batch_name){
               	$scope.deleted_vals=$scope.selected;
               	 angular.forEach($scope.selected,function(value1,index1){
               	 	 var index1 = value.students.indexOf(value1);
              		value.students.splice(index1,1);
               	  });
                };
              });
		 $scope.selected=[];
		 $scope.save_changes_hide=false;

		};


		function selectFile($files){
   	  File.upload($files);
   	};

   		function save_changes(){
   			 angular.forEach($scope.batches,function(value,index){
               if(value.name==$scope.batch_name){
               	var temp_added=[],temp_edit=[];
               	value.curriculum=$scope.batch_curric;  // curriculum not getting send :Must resolve
               	 angular.forEach(value.students,function(value1,index1){
               	 	if(value1.added=='true'){
               	 		temp_added.push(value1);
               	 	}
               	 	if(value1.edited=='true'){
               	 		temp_edit.push(value1);
               	 	}
               	 });
   					Access.send('batches',temp_added,[{name:$scope.batch_name,type:'added'}]);
   					Access.send('batches',temp_edit,[{name:$scope.batch_name,type:'edited'}]);
   					Access.send('batches',$scope.deleted_vals,[{name:$scope.batch_name,type:'deleted'}]);
   					}
   				});
   			$scope.add_singleStudent=true;
   			console.log("sending updated batch......");
		    $scope.save_changes_hide=true;

   		};

	}

 })();  


function instBatchDialogCtrl($scope, $mdDialog,Share){
		
	$scope.Dialog_save = function() {
		    $mdDialog.hide();
		    $scope.$root.$broadcast("newbatch", {
            name: $scope.batch_name
     		   });
		    console.log("in dialog");
		  };
		  $scope.Dialog_cancel = function() {
		    $mdDialog.cancel();
		  };
			

		};