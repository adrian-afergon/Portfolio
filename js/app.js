(function(){
	var app = angular.module('portfolio',[]);

	var project = {
		name:'name',
		description:'description',
		tecnologies:'tecnologies',
		lastUpdate:'lastUpdate',
	}

	/*Formato de la fecha MM/dd/yyyy*/
	var projects=[
		{
			name:'Sistema de Facturacion',
			description:'Sistema de facturación realizado para facilitar la elaboración de facturas',
			tecnologies:'ASP.NET + SQL',
			lastUpdate:new Date('12/19/2013'),
			image:'image',
			url:'',
		},
		{
			name:'Centro de Salud',
			description:'Proyecto basado en Open Data, para la solicitud de donaciones de sangre',
			tecnologies:'PHP + CodeIgniter + JavaScript + MySQL',
			lastUpdate:new Date('01/09/2014'),
			image:'image',
			url:'http://fionexpert.net46.net/PHP_CI_JSON_Project/index.php/home',
		},
		{
			name:'Turism plataform',
			description:'Plataforma para realizar reserva de actividades turísticas',
			tecnologies:'Java (jsp) + MySQL + JPA',
			lastUpdate:new Date('02/28/2014'),
			image:'image',
			url:'',
		},
		{
			name:'Space Avenger',
			description:'Minigame maked for web',
			tecnologies:'HTML + CSS3 + JavaScript',
			lastUpdate:new Date('02/12/2014'),
			image:'image',
			url:'http://fionexpert.net46.net/Proyecto_JS_Juego/',
		},
	];

	app.controller('portfolioController',function(){
		this.works = projects;
	});

})();

