'use strict';

var PageResults = require('../domain/PageResults.js');
var CityPage = Object.create(PageResults);

exports['pageResults'] = {
	setUp : function(done) {
		// setup here
		CityPage.totalElements = 100;
		CityPage.pageSize = 10;
		CityPage.pageNumber = 1;
		console.log(CityPage);
		CityPage.calculate();

		done();
	},
	'calculate' : function(test) {
		test.expect(1);
		// tests here
		test.equal(CityPage.firstPage, true, 'should be true');
		test.done();
	}
};