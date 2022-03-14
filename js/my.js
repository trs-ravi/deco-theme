
        //------------------ SCROLL TOP FUNCTIONALITY CODE---------------------

        // Get the button
        var mybutton = document.getElementById("myBtn");

        // when the user scroll down 20px from the top of the document,show the btton
        window.onscroll = function () { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                myBtn.style.display = "block";
            } else {
                myBtn.style.display = "none";
            }
        }

        //When user click on the button,scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }


        $(window).scroll(function(){
            var sticky = $('.header_two'),
                color = $('.header_two .nav-link')
                scroll = $(window).scrollTop();
          
            if (scroll >= 100){ sticky.addClass('fixed');
            color.css("color","black");
        }
            else{ sticky.removeClass('fixed');
            color.css("color","white");
        }
          });

          
        $(window).scroll(function(){
            var sticky = $('.header_two'),
                color = $('.header_two .nav-link')
                scroll = $(window).scrollTop();
          
            if (scroll >= 100){ sticky.addClass('fixed');
            color.css("color","black");
        }
            else{ sticky.removeClass('black');
            color.css("color","white");
        }
          });

        //   if(window.location.href=== "deco-theme/about.html") {
        //     $("header_two").addClass("fixed");
        // }