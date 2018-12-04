$(function () {
	//on cache tous les <div> qui ont la classe .article sauf que 
	//<div> qui a l'id #tab1 
	$('div.article:not(#tab1)').hide();
	//on selectionne tous les li dans la classe .tabs
	var $tab = $('.tabs li');

	// $tab.each(function () {

	// 	$(this).click(function () {
	// 		// $tab.removeClass('active');
	// 		// $(this).addClass('active');
	// 		// on retire la classe active 
	// 		$tab.not(this).removeClass('active');
	// 		// on ajoute la classe active sur l'element courant 
	// 		$(this).addClass('active');
	// 		// on cherche <a> qui se trouve dans le <li> puis 
	// 		// on recupere son attribut href exemple #tab1
	// 		$a = $(this).find('a').attr('href');
	// 		//On cache l'article except l'element courant (sur le quel on a cliqué) 
	// 		$('.article').not($('.article' + $a)).hide();
	// 		//on affiche l'article avec un effet d'opacité 
	// 		$($a).fadeIn(3000);
	// 	});

	// 	$('.reponse').css('display','none');
	// 	// var $css="{display:none}";

	// 	// $('.reponse').addClass($css);
	// 	var $question = $('.question');
	// 	$question.each(function(){
	// 		$(this).click(function(e){
	// 			// e.preventDefault();
	// 			$('.reponse').not($(this).next()).hide();				$(this).next().slideToggle();

	// 		}).next().attr('href',(this).attr('src'));



	// 	});
	// });

	var $chemise = $('#large');
	var $img = $('.img-thumbnail');
	$img.each(function () {
		$(this).click(function () {
			$chemise.attr('src', $(this).attr('src'));
			$('#photo a').attr('href', $(this).attr('src'));
		});
	});

	var fontSize = $('#go~div').css('font-size');
	$('#go').click(function () {
		if ($('#go~div').css('font-size') === '50px') {
			$('#go~div').animate({
				'font-size': fontSize,
				'opacity': '1'
			}, 2000);
		} else {

			$('#go~div').animate({
				'font-size': '50px',
				'opacity': '0.5'
			}, 2000);
		}


	});

});