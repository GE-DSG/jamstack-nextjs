
/*******************************************************************************
**
** GE Unified Theme Scripts
**
*******************************************************************************/

import 'popper.js';
import 'bootstrap';


(function ($) {

  /* mobile-nav togler */
  $('.navbar-expand-lg .navbar-toggler').on('click', function(){
    $(this).closest('header').toggleClass('active-nav');
    $('body').toggleClass('active-menuoverlay');
    $(this).toggleClass('collapsed');
    $('.mobile-navbar .wrap_overlay').toggleClass('show');
  });

  $('ul.nav--list--level1 > li .active-arrow a.mobilenav-link, ul.nav--list--level1 > li .active-arrow span.mobilenav-link').click(function(e) {
    $('ul.nav--list--level1 li').removeClass('is-active');
    if ($(this).closest('li').find('ul').length > 0) {
      e.preventDefault();
      $(this).closest('li').addClass('is-active');
      $(this).closest('ul.nav--list--level1').addClass('is-active');
      $(this).closest('.wrap_overlay').addClass('is-active');
    }
  });


  /* code for floating header start */
  var lastScrollTop = 0;
  var $header = $('.header.sticky--float--header');
  var $scrolPos;
  $(window).scroll(function() {
    var st = $(this).scrollTop();
    if(st > 250) {
      if (st > lastScrollTop){
        // downscroll code
        $header.removeClass("floating--header");
      } else {
        // upscroll code
        $header.addClass("floating--header");
      }
    }
    else {
      $header.removeClass("floating--header");
    }

    lastScrollTop = st;
  });
  /* code for floating header end */


  var $backbtn = $('ul.nav--list--level2 li a.back--btn').length ? 'true' : 'false';

  if ($backbtn) {
    $('ul.nav--list--level2 li a.back--btn').on('click', function(e) {
      e.preventDefault();
      $(this).closest('li.is-active').toggleClass('is-active');
      $(this).closest('ul.nav--list--level1').removeClass('is-active');
      $(this).closest('.wrap_overlay').removeClass('is-active');
    });
  }

  var elmnt=$('body');
  var elmntWidth;
  //var elmnt = $('body');
  //var elmntWidth= elmnt[0].offsetWidth;

  $('.navbar-nav li.nav-item').on('mouseenter', function() {
    $('body').addClass('menu-active');
    //script starts for main menu active opacity
    $('.navbar-nav li.nav-item a.nav-link, .navbar-nav li.nav-item span.nav-link').css('opacity', '.5');
    $(this).find('a.nav-link, span.nav-link').css('opacity', '1');
    $(this).addClass('active');
    $(this).closest('.navbar-collapse').siblings('.ge-nav-icons-desktop').addClass('in-active');
    //$(this).find('.dropdown-menu').fadeIn();
    //script ends for main menu active opacity

    //script starts for removing flickering issue
    var elmntWidthactive = elmnt[0].clientWidth;
    var widthDifference =  elmntWidthactive - elmntWidth;
    widthDifference = widthDifference + "px";
    $(window).scrollTop($scrolPos);
    $('body').css('margin-right', widthDifference);

    $('.header.sticky--float--header nav.ge-menu-main .container-fluid').css({
      'margin-right': widthDifference,
      'transition': '0s'
    });
    //script ends for removing flickering issue

  }).on('mouseleave', function(){
    $('body').css('margin-right', '0');
    $('.header.sticky--float--header nav.ge-menu-main .container-fluid').css('margin-right', '0');
    $('body').removeClass('menu-active');
    $('.navbar-nav li.nav-item a.nav-link, .navbar-nav li.nav-item span.nav-link').css('opacity', '1');
    $(this).find('a.nav-link, span.nav-link').css('opacity', '1');
    $(this).removeClass('active');
    $(this).closest('.navbar-collapse').siblings('.ge-nav-icons-desktop').removeClass('in-active');
    //$(this).find('.dropdown-menu').fadeOut();
  });

  $('.ge-nav-icons-desktop li.nav-item').on('mouseenter', function() {
		$(this).closest('.ge-nav-icons-desktop').siblings('.navbar-collapse').find('ul.first--level').addClass('in-active');
		//$('.ge-nav-icons-desktop li.nav-item a.nav-link').css('opacity', '.5');
		//$(this).find('a.nav-link').css('opacity', '1');

		$('.ge-nav-icons-desktop li.nav-item a.nav-link').not('#ge-search-component-init').css('opacity', '.5');
		$(this).find('a.nav-link').not('#ge-search-component-init').css('opacity', '1');
  }).on('mouseleave', function(){
    $(this).closest('.ge-nav-icons-desktop').siblings('.navbar-collapse').find('ul.first--level').removeClass('in-active');
    //$('.ge-nav-icons-desktop li.nav-item a.nav-link').css('opacity', '1');
    //$(this).find('a.nav-link').css('opacity', '1');

    $('.ge-nav-icons-desktop li.nav-item a.nav-link').not('#ge-search-component-init').css('opacity', '1');
    $(this).find('a.nav-link').not('#ge-search-component-init').css('opacity', '1');
  });

  $('.navbar-nav li.nav-item').each(function() {
    $(this).on('mouseenter', function() {
      if($(this).find('> *').length > 1) {
        $(this).closest('ul.navbar-nav').removeClass('dd-bg-inactive', 300);
      } else {
        $(this).closest('ul.navbar-nav').addClass('dd-bg-inactive', 300);
      }
    });
  });


  /** scripts for header menu **/
  function heightWd() {
    //var $wh = $(window).height() + 4;
    var $wh = $(window).height() + 54;
    var $menuht = $('.navbar-nav.first--level .nav-item').find('.dropdown-menu');
    $menuht.css('height', $wh);
    var $mobmenuht = $('.mobile-navbar.overlay .inner--wrapper');
    $mobmenuht.css('height', ($wh-81));
  };
  heightWd();
  $(window).resize(function() {
    heightWd();
  });


  var $secondNav = $('.navbar-nav.first--level .nav-item .dropdown-menu .second--level li');
  $secondNav.on('mouseenter click', function() {
    //$('.dd-content-block').css('display', 'none');
    var maxHeight = $('.dd-content-block').height();

    if ($secondNav.find('.second-level-description').height() > maxHeight) {
      maxHeight = $secondNav.find('.second-level-description').height();
    }

    $('.dd-content-block').height(maxHeight);
    $secondNav.find('.second-level-description').height(maxHeight);

  }).on('mouseleave', function(){
    //$('.dd-content-block').css('display', 'block');
  });

  /** Fix for the view replace **/


  /** equalized height implementation **/
  
  /** Leadership script **/
  $(window).bind('load resize', function() {
    var iv = null;
    var $ddWidth = $('.navbar-nav.first--level .nav-item').find('.dropdown-menu').outerWidth();
    //if (($(window).width() >= 992) && ($(window).width() <= 1150)) {
    //if ($(window).width() >= 992) {
    //  $ddWidth = $('.navbar-nav.first--level .nav-item').find('.dropdown-menu').outerWidth() - 50;
    //}

    if(iv !== null) {
      window.clearTimeout(iv);
    }

    iv = setTimeout(function() {
      equalizeHeights($('.leadership-body .body-container ul li button'));
			equalizeHeights($('.archive-main-wrapper ul li .ge-sidebar-links'));
      equalizeHeights($('.card-body-leader p.caption'));
      equalizeHeights($('.related-pages .row h4'));

      $('.navbar-expand-lg .navbar-nav').find('.dd-bg').outerWidth($ddWidth);
      elmnt = $('body');
      elmntWidth= elmnt[0].offsetWidth;

    }, 120);



    if($('section.leadership-team')) {
      var max_height = '';
      $('.card-body-leader').each(function( index ) {
        if(max_height == '') {
          max_height = $(this).height();
        }
        else {
          if(max_height < $(this).height()) {
            max_height = $(this).height();
          }
        }
      });
      $('.card-body-leader').each(function( index ) {
        $(this).height(max_height);
      });
    }
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $(document).find('.sticky--float--header').addClass('sticky--header--hide');
      $(document).find('.dd-light-mask').addClass('hide');
    } else {
      $(document).find('.sticky--float--header').removeClass('sticky--header--hide');
      $(document).find('.dd-light-mask').removeClass('hide');
    }
  }).resize();

  $(window).bind('scroll load resize', function() {
    $scrolPos= $(this).scrollTop();
  }).resize();

  $(window).resize(function() {
    if($('section.leadership-team')) {
      var max_height = '';
      $('.card-body-leader').each(function( index ) {
        $(this).height('auto');
      });
      $('.card-body-leader').each(function( index ) {
        if(max_height == '') {
          max_height = $(this).height();
        }
        else {
          if(max_height < $(this).height()) {
            max_height = $(this).height();
          }
        }
      });
      $('.card-body-leader').each(function( index ) {
        $(this).height(max_height);
      });
    }
  });


  $('#print-bio').click(function() {
    window.print();
  });

  /** End of Leadership script **/

  function resizeCards(selector){
    if($(selector)) {
      var max_height = '';
      $(selector).each(function( index ) {
        $(this).height('auto');
      });
      $(selector).each(function( index ) {
        if(max_height == '') {
          max_height = $(this).height();
        }
        else {
          if(max_height < $(this).height()) {
            max_height = $(this).height();
          }
        }
      });
      $(selector).each(function( index ) {
        $(this).height(max_height);
      });
    }
  }

  /** equalized height function **/
  function equalizeHeights(selector) {

    var heights = new Array();

    // Loop to get all element heights
    $(selector).each(function() {

      // Need to let sizes be whatever they want so no overflow on resize
      $(this).css('min-height', '0');
      $(this).css('max-height', 'none');
      $(this).css('height', 'auto');

      // Then add size (no units) to array

      heights.push($(this).height());
      //console.log(heights);
    });

    // Find max height of all elements
    var max = Math.max.apply( Math, heights );

    // Set all heights to max height
    $(selector).each(function() {
      $(this).css('height', max + 'px');
    });
  }
  /** equalized height function **/




})(jQuery);
