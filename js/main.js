/*jQuery(document).ready(function($){
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();
  
  // Account for home page with empty path
  if ( path == '' ) {
    path = 'home';
  }
      
  var target = $('#main_menu nav a[href="'+path+'"]');
  // Add active class to target link
  target.addClass('active');
  console.log("added" + target)
});*/


$(document).ready(function () {
  //Preloader
  $(window).on("load", function () {
    preloaderFadeOutTime = 500;

    function hidePreloader() {
      var preloader = $('.loader_wrapper');
      preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
  });
});




// $(document).ready(function () {
//   function showStickyFormOnDesktop() {
//     $(window).scroll(function () {
//       $('#contact_form').css('position', 'relative');
//       var scrollTop = $(window).scrollTop();
//       var start = 530;
//       var bottom = $('#our_customers').offset().top - $('#hubspot_form_alignment').height();
//       console.log('bottom', bottom);
//       if (scrollTop >= start && scrollTop < bottom) {
//         if ($(window).width() > 767 && $(window).width() <= 1199) {
//           $('#hubspot_form_alignment').css({
//             'position': 'fixed',
//             'top': '0',
//             'bottom': 'unset',
//             'width': '390px'
//           });
//         } else {
//           $('#hubspot_form_alignment').css({
//             'position': 'fixed',
//             'top': '0',
//             'bottom': 'unset',
//             'width': '620px'
//           });
//         }


//       } else if (scrollTop > bottom) {
//         $('#hubspot_form_alignment').css({
//           'position': 'absolute',
//           'bottom': '0',
//           'top': 'unset'
//         });
//       } else {
//         $('#hubspot_form_alignment').css('position', 'static');
//       }



//     });
//   }

//   if ($(window).width() > 767) {
//     showStickyFormOnDesktop();
//   }
// });

$("#link-1").bind("click", function()
   {
     var hash = "#why-use-a-landing-page";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#link-2").bind("click", function()
   {
     var hash = "#how_do_you_create_landing_page";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#link-3").bind("click", function()
   {
     var hash = "#how_does_a_lp_work";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#link-4").bind("click", function()
   {
     var hash = "#is_lp_a_website";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#link-5").bind("click", function()
   {
     var hash = "#types_of_landing_page";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#link-6").bind("click", function()
   {
     var hash = "#who_designs_landing_page";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});


$("#move-down").bind("click", function()
   {
     var hash = "#blog_single_content_wrapper";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

// header active class 
$.each($('#menu-header-menu').find('> li'), function () {
  var menuItem = $(this).find('a');
  if(menuItem.prop('href') === window.location.href) {
    menuItem.addClass('active');
  }
});


  
      

$("#first_col").bind("click", function()
   {
     var hash = "#why-use-a-landing-page";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#scnd_col").bind("click", function()
   {
     var hash = "#how_do_you_create_landing_page";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#third_col").bind("click", function()
   {
     var hash = "#how_does_a_lp_work";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#forth_col").bind("click", function()
   {
     var hash = "#is_lp_a_website";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#fifth_col").bind("click", function()
   {
     var hash = "#types_of_landing_page";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

$("#sixth_col").bind("click", function()
   {
     var hash = "#who_designs_landing_page";
     $('html, body').animate({
           scrollTop: $(hash).offset().top
}, 1800);
});

 //console.log($(".blog_container.container ol li").length);
var count = $(".blog_container.container ol li").length; 

console.log(count);

 //  for (var i = count; - 1 ; i >=  0; i--) {
   
 // console.log(i);
 // console.log("test");
 //  }