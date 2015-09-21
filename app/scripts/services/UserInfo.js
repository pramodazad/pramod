'use strict';

angular.module('planistoApp')
.service('UserInfo',[ '$http', function ($http){

	var firstName ='';
	var lastName ='';
	var emailId = '';
	var mobile = '';

	this.setFirstName = function(fname){
		firstName = fname;
	};
	this.setLastName = function(lname){
		lastName = lname;
	};
	this.setEmailId = function(email){
		emailId = email;
	};
	this.setMobile = function(mobile){
		mobile =mobile;
	};
	this.getFirstName = function(){
		return firstName;
	};
	this.getLastName = function(){
		return lastName;
	};
	this.getEmailId = function(){
		return emailId;
	};
	this.getMobile = function(){
		return mobile;
	};
}
]);