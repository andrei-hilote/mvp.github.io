(function($) {
  "use strict";

  $(window).on('load', function() {
    $(".codex-loader").fadeOut("slow");
  });

  $(document).ready(function() {

    //*** SIDEBAR START ***//
    $(".submenu-list").slideUp(300);
    $(".secondsubmenu-list").slideUp(300); 

    $('.codex-menu').on('click', '.menu-item', function() {
      $(this).children(".submenu-list").slideToggle(300);
      $(this).siblings().children(".submenu-list").slideUp(300);
      $(this).toggleClass("active");
      $(this).siblings().removeClass('active');
    });

    var menuUrl = window.location.pathname.split('/');
    $(".codex-menu .menu-item a").each(function () {
      if ($(this).attr("href")) {
        if (menuUrl[menuUrl.length - 1] === $(this).attr("href")) {
          $(this).addClass("active");
          $(this).parent().addClass("active");
          $(this).parent().parent().parent().addClass("active");
        }
      }
    });

    $(document).on('click', '.sidebar-action', function () {
      const $body = $('body');
      const currentState = $body.attr('data-bs-sidebar');

      if (currentState === 'compact') {
        $body.attr('data-bs-sidebar', 'full');
      } else {
        $body.attr('data-bs-sidebar', 'compact');
      }   
      const savedSidebartype = $body.attr('data-bs-sidebar');
      localStorage.setItem('sidebartype', savedSidebartype);
    });

    $(document).on('click', '.codex-header .input-group-text', function(){
      $('.codex-header .form-control').toggleClass("active");
    });

    $(document).on('click', '.cdxapp-toggle', function(){
      $('.cdxapp-sidebar, .cdxapp-xl-sidebar').toggleClass('show-sidebar');
    });

    //*** AUTHENTICATION START ***//
    $(document).on('click', '.toggle-show', function(){
      var inp = $('.showhide-password');
      if (inp.attr('type') === 'password') {
        setTimeout(function(){
          inp.attr('type','text');  
          $(".toggle-show").addClass('fa-eye-slash');
        },250);
      } else {
        setTimeout(function(){
          inp.attr('type','password');
          $(".toggle-show").removeClass('fa-eye-slash');
        },250);
      } 
    });

    //*** TOOLTIP GENRATOR START ***//
    $('.iconGroup li i, .iconGroup li svg').each(function() {
      let className = $(this).attr('class');
      $(this).attr('data-bs-toggle','tooltip')
      $(this).attr('title', className);
    });

    //*** THEME ICON CODE COPY START ***//
    function clipboard_genFun(e){
      let $div = $('<div/>').appendTo('body');
      $div.attr('class', 'copied');
      $div.html(e).show().fadeOut(600);
      setTimeout(function(){
        $div.remove();
      }, 600);
    }

    $('.iconGroup').on('click','li',function() {
      let iconName;
      let html;
      if($('.iconGroup').hasClass('svg')){
        iconName = $(this).children('span').attr('class');
        html = `<i data-feather="${iconName}"></i>`;
      } else {
        iconName = $(this).children('i').attr('class');  
        html = `<i class="${iconName}"></i>`;
      }

      // Clipboard copy
      if (navigator.clipboard) {
        navigator.clipboard.writeText(html).then(() => {
          clipboard_genFun('Copied to clipboard');
        }).catch(() => {
          clipboard_genFallback(html);
        });
      } else {
        clipboard_genFallback(html);
      }

      function clipboard_genFallback(text) {
        let $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
        clipboard_genFun('Copied to clipboard');
      }
    });

    //*** BOOTSTRAP TOOLTIP START  ***//
    $('[data-bs-toggle="tooltip"]').tooltip();

    //** POPOVER JS **//
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });

    //*** BACK TO TOP START ***//
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 450) {
        $('.scroll-top').addClass('show');
      } else {
        $('.scroll-top').removeClass('show');
      } 
    });

    $(document).on("click", '.scroll-top', function(){
      $('html, body').animate({scrollTop:0}, 450);
    });

    // FILTER TOGGLE
    $(document).on('click', '.filter-action', function(){
      $('.filte-sidebar').toggleClass("active");
    });

    $(document).on('click', '.close-filter', function(){
      $('.filte-sidebar').removeClass("active");
    });

  });

  // Sticky Header (after landing scroll)
  $(window).on('scroll', function() {
    if($(this).scrollTop() > 78){
      $('.landing-header').addClass("sticky");
    } else {
      $('.landing-header').removeClass("sticky");
    }
  });

})(jQuery);