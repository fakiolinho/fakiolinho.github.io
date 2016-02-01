(function() {
	'use strict';

	angular
		.module('profileApp')
		.controller('HomeController', HomeController);

	HomeController.$inject = [];

	function HomeController() {
        var self = this;
        self.posts = [
            {
                title: 'Get rid of your controllers, start routing using components in AngularJS 1.5.x',
                date: '1 February 2016',
                url: 'http://angularjs-recipes.com/#!/posts/df6712/get-rid-of-your-controllers-start-routing-using-components-in-angularjs-15x'
            }, {
                title: 'I have a new project, should i use AngularJS 1.x or Angular 2?',
                date: '18 January 2016',
                url: 'http://angularjs-recipes.com/#!/posts/23swq1/i-have-a-new-project-should-i-use-angularjs-1x-or-angular-2'
            }, {
                title: 'Use components into AngularJS 1.5 before mastering them in Angular 2',
                date: '11 January 2016',
                url: 'http://angularjs-recipes.com/#!/posts/5612d0/use-components-into-angularjs-15-before-mastering-them-in-angular-2'
            }, {
                title: 'Debug your Angular 2 apps with ease',
                date: '4 January 2016',
                url: 'http://angularjs-recipes.com/#!/posts/fg34q2/debug-your-angular-2-apps-with-ease'
            }, {
                title: 'Bored with Cheat Sheets? This one will make your day',
                date: '28 December 2015',
                url: 'http://angularjs-recipes.com/#!/posts/Ge1672/bored-with-cheat-sheets-this-one-will-make-your-day'
            }, {
                title: 'A developer’s guide to writing newsletter and email templates',
                date: '20 October 2015',
                url: 'http://blog.mist.io/post/131085224931/a-developers-guide-to-writing-newsletter-and'
            }, {
                title: 'JavaScript MVC showdown: AngularJS vs EmberJS',
                date: '31 July 2015',
                url: 'http://blog.mist.io/post/125506672521/javascript-mvc-showdown-angularjs-vs-emberjs'
            }
        ];
	}
})();
