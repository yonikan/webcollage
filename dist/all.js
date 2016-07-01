"use strict";

// test interpolation ----------------------------------------
var name = "Bob",
    time = "today";

console.log("foo " + name + " and      a a and " + time);

yoni = 5;

// test classes ----------------------------------------
// class SkinnedMesh extends THREE.Mesh {
//   constructor(geometry, materials) {
//     this.idMatrix = SkinnedMesh.defaultMatrix();
//     this.bones = [];
//   }
//   static defaultMatrix() {
//     return new THREE.Matrix4();
//   }
// }

// ----------------------------------------
"use strict";
"use strict";

$(document).ready(function () {

	// Background Strech -----------------------------------------------
	$(".slider-img").backstretch('dist/img/backs/orange-back.jpg');

	// Ajax test -----------------------------------------------
	$("#ajax-btn").click(function (event) {

		var root = 'http://jsonplaceholder.typicode.com';

		//  $.getJSON('../dist/others/test.json', function(data) {
		// 	   	console.log(data);
		// 		$('#ajax-test').html('<p> Name: ' + data.name + '</p>');
		// 		$('#ajax-test').append('<p>Age : ' + data.age+ '</p>');
		// 		$('#ajax-test').append('<p> Sex: ' + data.sex+ '</p>');
		//  });

		$.getJSON(root + '/posts/1', function (data) {
			$('#ajax-test').html('<p> user id: ' + data.id + '</p>');
			$('#ajax-test').append('<p>id : ' + data.userId + '</p>');
			$('#ajax-test').append('<p> title: ' + data.title + '</p>');
			$('#ajax-test').append('<p> body: ' + data.body + '</p>');
			console.log(data);
		});
	});

	// Header Scroll
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// wow.js initialization
	var myWindow = $(window);
	if (myWindow.width() > 530) {
		new WOW().init();
	};

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false
	});

	// Page Scroll
	var sections = $('section');
	nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		sections.each(function () {
			var top = $(this).offset().top - 76;
			bottom = top + $(this).outerHeight();
			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});
	nav.find('a').on('click', function () {
		var $el = $(this);
		id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
		return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function () {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function () {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});
//# sourceMappingURL=others/all.js.map
