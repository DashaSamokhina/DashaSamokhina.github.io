$(document).ready(function(){
	// responsive menu
	var icon = $('.navbar-icon');
	var icon_active = $('.navbar-icon_active');
	var navbar = $('.navbar');
	var nav_link = $('.navbar-link');

 icon.click(function(){
  icon.toggleClass('navbar-icon_active');
  navbar.toggleClass('navbar_active');
 });
 nav_link.click(function(){
  icon.removeClass('navbar-icon_active');
  navbar.removeClass('navbar_active');
 });

 // fixed menu
 var header = $('.header');
 $(window).scroll(function () {
 		if ($(this).scrollTop() > $("main").height()) {
 			header.addClass("header_fixed");
 		} else {
 			header.removeClass("header_fixed");
 		}
 	});
})﻿

