$(document).ready(function(){

    let $btn = $('.project-area .button-group button');

    $btn.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');


        let selector =$(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter:selector

        });
        return false;


    })

    $('.project-area .button-group #btn1').trigger('click');
    $('.project-area .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
        // other options
      });


      // owl carousel
      $('.site-main .about-area .owl-carousel').owlCarousel(
     {
               loop: true,
               autoplay: true,
               margin:10,
               nav:true,
               
               responsive:
               {
                0 :{
                    items:1
                },
                544:{
                    items:2
                }
               }



      });

})