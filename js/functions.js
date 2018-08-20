/*
    Author: Leandro.Zambelli@yahoo.com
*/

/* LOAD PARALLAX 
*/

function loadScript(url, callback) {

    var head    = document.getElementsByTagName('head')[0];
    var script  = document.createElement('script');

    script.type = 'text/javascript';
    script.src  = url;
    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
    
}

if (window.innerWidth > 991) {
    
    loadScript("js/jquery.parallax-scroll.js");
    
}

/* ONE PAGE SCROLL
*/

onePage();

function onePage(){
  $('a[href^="#"]').on('click', function(event) {
      
      var target = $(this.getAttribute('href'));
      
      if( target.length ) {
          
         event.preventDefault();
         $('html, body').stop().animate({
             scrollTop: target.offset().top
         }, 500);
          
      }
  });
}

