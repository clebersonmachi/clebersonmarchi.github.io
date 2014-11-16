
// -------------------------------------------------------------------
// carrega os scripts 
// @koala-prepend carrega
// koala-prepend não carrega
// -------------------------------------------------------------------

// @koala-prepend "../../_scripts/jquery-migrate-1.2.1.min.js"
// @koala-prepend "../../_scripts/jquery.easing.1.3.js"
// @koala-prepend "../../_scripts/bootstrap.min.js"
// koala-prepend "../../_scripts/colorbox/jquery.colorbox-min.js"
// koala-prepend "../../_scripts/slick/slick.min.js"
// koala-prepend "../../_scripts/plugins_1wd/rolar_janela.js"


/* EXECUTA AS FUNÇÕES AO CARREGAR O SITE (CÓDIGO FONTE)
-----------------------------------------------------------------------*/
$(function(){
	
	
	/* MENU CONTEÚDO
	---------------------------------------------------------------------*/
	var MENU_PRINCIPAL = '.navbar-conteudo';
	$(MENU_PRINCIPAL + " .navbar-nav a").on('click', function(e) {
			
		// altera o padrão
		e.preventDefault();
		
		// guarda o hash
		var hash = this.hash;
		
		// anima até o local
		// -80px de margem para o topo
		$('html, body').animate(
			{
				scrollTop: $(this.hash).offset().top - 80
			}, 
			600,
			'easeInOutExpo',
			function(){
				window.location.hash = hash;
			}
		);
	
	});
		
	// seleciona a página atual enquanto rola
	$('body').scrollspy({ target: MENU_PRINCIPAL });

	var menu = $(MENU_PRINCIPAL);
	var posicao_menu = menu.offset().top;

	// fixa o menu no topo quando rola
	$( window ).scroll(function() {

		// posição atual
		var posicao_janela = $(window).scrollTop();
		var largura_janela = $(window).width();

		if(posicao_janela >= posicao_menu && largura_janela > 768){
			menu
				.addClass('navbar-fixed-top')
				.addClass('navbar-inverse');
		}else{
			menu
				.removeClass('navbar-fixed-top')
				.removeClass('navbar-inverse');
		}

	});

	
});