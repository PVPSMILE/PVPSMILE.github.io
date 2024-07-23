$(window).on("load", function () {
	// Preload
	$("#preload").fadeOut(500);
 });
 
 jQuery(document).ready(function () {
 
	// Magnific Popup Video
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	   disableOn: 700,
	   type: 'iframe',
	   mainClass: 'mfp-fade',
	   removalDelay: 160,
	   preloader: false,
 
	   fixedContentPos: false
	});
 
	// Counter
	$('.counter').counterUp({
	   delay: 10,
	   time: 1100,
	});
 
	// Owl Carousel Testimonials
	$('.testimonials-carousel').owlCarousel({
	   loop: true,
	   margin: 10,
	   nav: false,
	   dots: true,
	   responsive: {
		  0: {
			 items: 1
		  },
		  600: {
			 items: 1
		  },
		  1000: {
			 items: 1
		  }
	   }
	});
 
	// Scroll Top Button
	$('#scroll-top').click(function () {
	   $('body,html').animate({
		  scrollTop: 0
	   }, 800);
	   return false;
	});
 
	// Scroll Top
	$('#scroll-top').hide();
	$(window).scroll(function () {
	   if ($(this).scrollTop() > 50) {
		  $('#scroll-top').fadeIn();
	   } else {
		  $('#scroll-top').fadeOut();
	   }
	});
 
	// Scroll Fixed Menu
	$(window).scroll(function () {
	   if ($(this).scrollTop() > 0) {
		  $('.wrapper-header').addClass('bgdark');
	   } else {
		  $('.wrapper-header').removeClass('bgdark');
	   }
	});
 
	// Scroll Menu
	$(".menu li").on("click", "a", function (event) {
	   event.preventDefault();
	   var id = $(this).attr('href'),
		  top = $(id).offset().top;
	   $('body,html').animate({
		  scrollTop: top
	   }, 1500);
	});
 
	$("#logo,  .aboutus-content .btn").on("click", function (event) {
	   event.preventDefault();
	   var id = $(this).attr('href'),
		  top = $(id).offset().top;
	   $('body,html').animate({
		  scrollTop: top
	   }, 1500);
	});
 
	// Mobile Menu
	$('#openmenu').click(function (event) {
	   event.preventDefault();
	   $('#nav').animate({
		  'left': 0
	   }, 800);
	});
 
	$('#closemenu').click(function (event) {
	   event.preventDefault();
	   $('#nav').animate({
		  'left': '-320px'
	   }, 800);
	});
 
	$('#nav a').on("click", function () {
	   $("#nav").animate({
		  'left': '-320px'
	   }, 800);
	});
 
	// Booking Ajax 
	$('#sendbook').click(function (event) {
	   event.preventDefault();
 
	   var name = $('input[name="name"]').val();
	   var lastname = $('input[name="lastname"]').val();
	   var phone = $('input[name="phone"]').val();
	   var email = $('input[name="email"]').val();
	   var date = $('input[name="date"]').val();
	   var time = $('input[name="time"]').val();
 
	   if (name == '' || lastname == '' || phone == '' || email == '' || date == '' || time == '') {
 
		  $('.res-booking').fadeIn().html('<span class="error">All fields must be filled.</span>');
		  $('input').focus(function () {
			 $('.res-booking').fadeOut();
		  });
 
	   } else {
 
		  $.ajax({
			 url: '../booking.php',
			 type: 'POST',
			 data: {
				name: name,
				lastname: lastname,
				phone: phone,
				email: email,
				date: date,
				time: time
			 },
			 dataType: 'html',
			 success: function (data) {
				if (data == 'Send') {
 
				   $('.res-booking').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');
 
				   $('input[name="name"]').val('');
				   $('input[name="lastname"]').val('');
				   $('input[name="phone"]').val('');
				   $('input[name="email"]').val('');
				   $('input[name="date"]').val('');
				   $('input[name="time"]').val('');
 
				}
			 }
		  }); // ajax
	   }
	});
 
 }); // ready