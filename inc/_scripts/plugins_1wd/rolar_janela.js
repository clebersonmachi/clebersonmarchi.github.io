/* substitui textos por links
--------------------------------------------------------------------------------*/
function rolar_janela(elemento,distancia){
	n_topo = $(elemento).offset().top - distancia
	$('html, body').stop().animate({scrollTop: n_topo}, 1000,'easeInOutExpo')	
}