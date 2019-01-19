//Json Object
var data = [
	{
		time: '2018-08-08',
		header: 'The Introduction of the Book Network',
		body: [{
			tag: 'p',
			content: "Book(WRT) TRC10 is created on tronscan.org"	
                       },
                       {
			tag: 'p',
			content: "The Official Book(WRT) Telegram group is created started with 5 people"	
                       },
                       {
			tag: 'p',
			content: "Book(WRT) Website is created(being updated)"	
                       },
                       {
			tag: 'p',
			content: "Book(WRT) White Paper is written(being updated"
                     }]
	},

	{
		time: '2018-08-30',
		header: 'Test Book Network',
		body: [  {
			tag: 'p',
			content: "Developement of the Test Book Network begins"
                     }]

	},

	{
		time: '2018-09-25',
		header: 'Main Book Network',
		body: [  {
			tag: 'p',
			content: "Development of the Main Book Network begins"
                     }]

	},
	{
		time: '2018-10-20',
		header: 'WRT DApp',
		body: [  {
			tag: 'p',
			content: "Smart contract of the WRT DApp is written"
                     }]

	},
	{
		time: '2018-11-15',
		header: 'WRT Blockchain',
		body: [  {
			tag: 'p',
			content: "Development of the new Blockchain begins"
                     }]

	},
	{
		time: '2018-12-01',
		header: 'WRT Beta launch',
		body: [  {
			tag: 'p',
			content: "Dummy Book Network/Beta launched"
                     }]

	},
	{
		time: '2019-01-01',
		header: 'Q1 of 2019',
		body: [{
			tag: 'p',
			content: "Deployment of TESTBOOK TRC20 Book(WRT) token launched"
                     },
                     {
			tag: 'p',
			content: "Deployment of Demo WRT DApp launched"	
                     },
                     {
			tag: 'p',
			content: "Development of the System of Authenticity"	
                     },
                       
                  ]

	},
	{
		time: '2019-04-01',
		header: 'Q2 of 2019',
		body: [{
			tag: 'p',
			content: "Development of Test Book Network"
                     },
                       
                  ]

	},
	{
		time: '2019-07-01',
		header: 'Q3 of 2019',
		body: [{
			tag: 'p',
			content: "Test Book Network launched"
                     },
                     {
			tag: 'p',
			content: "TRC20 Book(WRT) token launched"	
                     },
                     {
			tag: 'p',
			content: "WRT DApp launched"	
                     },
                       
                  ]

	},
	{
		time: '2019-10-01',
		header: 'Q4 of 2019',
		body: [{
			tag: 'p',
			content: "Main Book Network launched"
                     },
                       
                  ]

	},
	{
		time: '2020-01-01',
		header: 'Q1 of 2020',
		body: [{
			tag: 'p',
			content: "Chapter 1 of the Book Network begins"
                     },
                     {
			tag: 'p',
			content: "Chapter 2 of the Book Network begins"
                     },
                     {
			tag: 'p',
			content: "Chapter n..."
                     },
                       
                  ]

	},
	
];

$(document).ready(function () {

    //Overrides the CutureInfo default plugin
    $.fn.albeTimeline.languages = {
        "en-US": {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", " Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            msgEmptyContent: "No information to display."
        },
        "es-ES": {
            days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            shortMonths: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            msgEmptyContent: "No hay información para mostrar."
        },
        "fr-FR": {
            days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            shortMonths: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
            msgEmptyContent: "Aucune information à afficher."
        }
    };

$("#wrtTimeline").albeTimeline(data, {sortDesc: false, language: 'en-US'});

});