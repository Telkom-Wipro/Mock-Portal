
$(function(){
	
	//Language change
	var dictionary = {
        'greet': {
            'id': 'Dukungan',
            'en': 'APIs ',
			
           
        }
	};
		var langs = ['id', 'en'];
		var current_lang_index = 0;
		var current_lang = langs[current_lang_index];

		window.change_lang = function() {
			current_lang_index = ++current_lang_index % 2;
			current_lang = langs[current_lang_index];
			translate();
		}

		function translate() {
			$("[data-translate]").each(function(){
				var key = $(this).data('translate');
				$(this).html(dictionary[key][current_lang] || "N/A");
			});
		};	
	//Language change end
	
	
	 //Email and share hover
	$(".email").hover(function () {
    $(this).toggleClass("result_hover");
	});
	$(".share").hover(function () {
    $(this).toggleClass("result_hover");
	});
	//Email and share hover end
 
	
	
	//To pouup close
	var getPageurl;
	$('.popupclick a').on('click', function(){
		getPageurl = location.href;
		$.cookie("popCookie", getPageurl);
	});

	$('.closeicn').on('click', function(){
		location.href = ($.cookie("popCookie"));
		$.removeCookie("popCookie")
	});
	//alert($.cookie("popCookie"));
	//To pouup close
	
	//accordian
	function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
	}
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);
	//accordian end
	
	//expand/collapse all
    $('.collapseall-icon').addClass('collapse-inactive');

	$('.expandall-icon').click(function(){
		$(this).addClass('expand-inactive');
		$('.collapseall-icon').removeClass('collapse-inactive')
		$('.inner-content').slideDown();
        $('.expand').removeClass('collapse');
	});
	$('.collapseall-icon').click(function(){
		$(this).addClass('collapse-inactive');
		$('.expandall-icon').removeClass('expand-inactive');
		$('.inner-content').slideUp();
        $('.expand').addClass('collapse');
	}); 	
	
	//Collapse and expand data
	$('.inner-content').hide();
	$(".expand a").click(function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('collapse');
		$(this).closest('.content').find('.inner-content').slideToggle();	
      if ($('.collapse').length === $('.content').length) {
       $('.collapseall-icon').addClass('collapse-inactive');
        $('.expandall-icon').removeClass('expand-inactive');
      }
      else if ($('.collapse').length === 0) {
        $('.expandall-icon').addClass('expand-inactive');
      $('.collapseall-icon').removeClass('collapse-inactive');
      }
      else {
        $('.expandall-icon').removeClass('expand-inactive');
        $('.collapseall-icon').removeClass('collapse-inactive');
      }
	});
	//expand/collapse all end
	
	//$('.chatoption').click(function(){
		//alert("dhjsvdjsdhs....");
		//$(this).addClass('display');
	//});

	
});
