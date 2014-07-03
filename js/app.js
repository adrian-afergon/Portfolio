(function(){
	var app = angular.module('portfolio',[]);

	var routeImg='img/projects/';

	var project = {
		name:'name',
		description:'description',
		tecnologies:'tecnologies',
		lastUpdate:'lastUpdate',
	}

	/*Formato de la fecha MM/dd/yyyy*/
	var projects=[
		{
			name:'Billing system - class project',
			description:'Billing system made ​​to facilitate the processing of invoices',
			tecnologies:'ASP.NET + SQL',
			lastUpdate:new Date('12/19/2013'),
			image:routeImg+'sistemafacturacion.png',
			url:'https://github.com/adrian-afergon/Ending-Project-ASP.NET--Billing-system',
		},
		{
			name:'health center - class project',
			description:'Based on Open Data Project, request for blood donations',
			tecnologies:'PHP + CodeIgniter + JavaScript + MySQL',
			lastUpdate:new Date('01/09/2014'),
			image:routeImg+'donacioncordoba.png',
			url:'http://fionexpert.net46.net/PHP_CI_JSON_Project/index.php/home',
		},
		{
			name:'Turism plataform - class project',
			description:'Platform for booking of tourist activities designed for mobile',
			tecnologies:'Java (jsp) + MySQL + JPA + Web Service',
			lastUpdate:new Date('02/28/2014'),
			image:routeImg+'turismojava.png',
			url:'https://github.com/adrian-afergon/Ending-Project---Java-Web---Tourism',
		},
		{
			name:'Space Avenger',
			description:'Minigame maked for web',
			tecnologies:'HTML + CSS3 + JavaScript',
			lastUpdate:new Date('02/12/2014'),
			image:routeImg+'videojuegojs.png',
			url:'http://fionexpert.net46.net/Proyecto_JS_Juego/',
		},
	];

	app.controller('portfolioController',function(){
		this.works = projects;
	});

})();

