(function(){
'use strict';
 angular.module('main')
.factory('Auth',Auth);

Auth.$inject=['$cookies','$http','Access'];
	
	function Auth($cookies,$http,Access){

		var Authentication = {
		  getAuthenticatedAccount: getAuthenticatedAccount,
		  isAuthenticated: isAuthenticated,
		  setAuthenticatedAccount: setAuthenticatedAccount,
		  unauthenticate: unauthenticate,
		  login: login,
		  register_inst:register_inst,
		  register_prof:register_prof,
		  register_stud:register_stud
		   // add something to redirect to appropriate profile
};
		return Authentication;

	function login(email, password) {
	  		return $http.post('/api/v1/auth/login/', {
	   			 email: email, password: password
			}).then(loginSuccessFn, loginErrorFn);

			 function loginSuccessFn(data, status, headers, config) {
				    Auth.setAuthenticatedAccount(data.data);
				    window.location = '/';
				  }

			 function loginErrorFn(data, status, headers, config) {
				    console.error('login failure!');
				  }
		}

		function logout() {
		  return $http.post('/api/v1/auth/logout/')
		    .then(logoutSuccessFn, logoutErrorFn);

		  function logoutSuccessFn(data, status, headers, config) {
		    Auth.unauthenticate();
		    window.location = '/';
		  }
		  function logoutErrorFn(data, status, headers, config) {
		    console.error('Logout failure!');
		  }
		}

	function getAuthenticatedAccount() {
  			if (!$cookies.authenticatedAccount) {
   				 return;
  			}

  			return JSON.parse($cookies.authenticatedAccount);
		}

	function isAuthenticated() {
 		 return !!$cookies.authenticatedAccount;
		}
	
	function unauthenticate() {
  		 delete $cookies.authenticatedAccount;
		}

	function setAuthenticatedAccount(account) {
 		 $cookies.authenticatedAccount = JSON.stringify(account);
		}




		function register_inst(email,password,username){
			return $http.post('/api/v1/institute/',{
					username:username,
					password:password,
					email:email
			}).then(registerSuccessFn, registerErrorFn);

			  function registerSuccessFn(data, status, headers, config) {
			    Authentication.login(email, password);
			  }

			  function registerErrorFn(data, status, headers, config) {
			    console.error('Epic failure!');
			  }
					}



		function register_prof(email,username,password1,password2,professor_id,institute){
			return $http.post('/api',{
					email:email,
					username:username,
					name:username,
					password1:password1,
					password2:password2,
					professor_id:professor_id,
					institute:institute,
					dob: '11/12/2007',
					contact_number:'8972489',
					branch:'sdf',
					gender:'M'
				});
			}


		function register_stud(email,password,username){
			return $http.post('/api/v1/student/',{
					username:username,
					password:password,
					email:email
				});
			}
	}
	
})(); 

(function(){
'use strict';
 angular.module('main')
 .factory('Access',Access);

Access.$inject=['$http','$q'];

 function Access($http,$q){

 	var Access = {
		everything:everything,
		obtain:obtain,
		send:send
			};
		return Access;

		function everything(id) {			// this must b send from login to ensure who has logged in
			$http.get('/api/v1/student/', {
	   			 params: { id: id }
				});

		}

		function obtain(name,values) {	
   			 var defer = $q.defer();
			$http.get('/'+name+'.json', {	
   			 params: {val: values}
 		}).success(function(data){ defer.resolve(data[name]); });
			return defer.promise;
 		}

 		function send(name,values,extra) {	
   			 var defer = $q.defer();
			$http.post('/'+name+'_send', {	
   			 params: {extra:extra,
   			 	val: values}
 		}).success(function(data){ defer.resolve("submitted"); });
			return defer.promise;
			console.log(values);
 		}

}

 })();

(function(){
'use strict';
 angular.module('main')
 .factory('File',File);

File.$inject=['$upload'];


function File($upload){

			var File_upload = {
		 upload:upload
			};
		return File_upload;


		
			function upload($files) {
                for (var i = 0; i < $files.length; i++) {
                    var $fl = $files[i];
                    $upload.upload({
                        url: 'my/upload/url',
                        file: $fl,
                        progress: function (e) { }
                    }).then(function (data, status, headers, config) {
                        console.log(data);
                    });
                }
            }
		    }
})();



(function(){
'use strict';
 angular.module('main')
 .factory('Share',Share);

//File.$inject=['$upload'];


function Share(){

		var Share = {
		 send:send,
		 get:get
			};
		return Share;

var val=[];
		  function send(id,values){
		  	console.log(id);
		  	val[id]=values;
		  }
		  function get(id){return val[id];}
		    };
})();

