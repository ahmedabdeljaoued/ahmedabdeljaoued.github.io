jQuery(document).ready(function($) {

   (function typeHeroName() {
      var el = document.getElementById('typed-name');
      if (!el) return;

      var phrases = [
         'Ahmed Abdeljaoued.',
         'Senior Data Engineer | Lakehouse Platforms',
         'Databricks + PySpark + Delta Lake',
         'Power BI Analytics & Data Storytelling',
         'Applied Data AI from design to production'
      ];
      var phraseIndex = 0;
      var charIndex = 0;
      var deleting = false;
      var typingMs = 90;
      var deletingMs = 50;
      var holdFullMs = 1750;
      var holdEmptyMs = 420;

      el.textContent = '';

      function tick() {
         var current = phrases[phraseIndex];

         if (!deleting) {
            charIndex += 1;
            el.textContent = current.slice(0, charIndex);

            if (charIndex === current.length) {
               if (phraseIndex === phrases.length - 1) {
                  setTimeout(function () {
                     deleting = true;
                     tick();
                  }, holdFullMs + 600);
               } else {
                  setTimeout(function () {
                     deleting = true;
                     tick();
                  }, holdFullMs);
               }
               return;
            }

            setTimeout(tick, typingMs);
            return;
         }

         charIndex -= 1;
         el.textContent = current.slice(0, Math.max(charIndex, 0));

         if (charIndex <= 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(tick, holdEmptyMs);
            return;
         }

         setTimeout(tick, deletingMs);
      }

      setTimeout(tick, 400);
   })();

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });

   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

});

