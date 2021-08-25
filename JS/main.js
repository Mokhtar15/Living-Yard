$(document).ready(function(){
    $('.fade_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear'
    });
    });


    $(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows:false,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear'
    });
    });


    let nav = document.querySelector("nav");
    window.addEventListener('scroll', function(){
        let windowPositionScroll = window.scrollY > 50;
        nav.classList.toggle('scrolling-active', windowPositionScroll);
    })
    

    
    $(function(){
        'use strict';
        console.log($('nav').offset().top);
        let windowPosition = $('nav').offset().top > 50;
        nav.classList.toggle('scrolling-active', windowPosition);
    })
    
    $(document).ready(function(){
        
        $(".menu").click(function()
        {
            
            $("#menu").toggle();
        })
        
        $("#closeMenu").click(function()
        {
            
            $("#menu").fadeOut(100);
        })
        
    })
    
    $(document).ready(function() {

        var divide = 2.5;
        $(".mouse-scroll").click(function() {

            $("html, body").animate ({
                scrollTop: $("." + $(this).data("scroll")).offset().top - $(".navbar").innerHeight() / divide
            },10)
        })
    })

    $(document).ready(function() {

        var divide = 2.5;
        $(".a-link").click(function() {

            $("html, body").animate ({
                scrollTop: $("." + $(this).data("scroll")).offset().top - $(".navbar").innerHeight() / divide
            },10)
        })
    })
    
    $(document).ready(function() {

        var divide = 2.5;
        $(".p-link").click(function() {

            $("html, body").animate ({
                scrollTop: $("." + $(this).data("scroll")).offset().top - $(".navbar").innerHeight() / divide
            },10)
        })
    })
    
    $(document).ready(function() {

        var divide = 2.5;
        $(".c-link").click(function() {

            $("html, body").animate ({
                scrollTop: $("." + $(this).data("scroll")).offset().top - $(".navbar").innerHeight() / divide
            },10)
        })
    })

    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });



    var menuList = document.getElementById("menuList");
    var logo = document.getElementById("logo")
    var menuBar = document.getElementById("menu-bar") 
    var titleBar = document.getElementById("title-bar")
    var colorLogo = document.getElementById("colorLogo")
    var Close = document.getElementById("close")
    menuList.style.maxHeight = "0px";
    function togglemenu() {

        if (menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "100vh";
            logo.style.display = "none";
            titleBar.style.display = "none";
            colorLogo.style.display = "block";
            menuBar.style.display = "none";
            Close.style.display = "block";

        }
        else
        {
            menuList.style.maxHeight = "0px";
            logo.style.display = "block";
            titleBar.style.display = "block";
            colorLogo.style.display = "none";
            menuBar.style.display = "block";
            Close.style.display = "none";
        }
    }


    $(document).ready(function(){
        $('select').niceSelect();
    })

