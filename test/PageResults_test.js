'use strict';

var chai = require('chai');
var PageResults = require('../domain/PageResults.js');
var CityPage = Object.create(PageResults);

before(function() {
	CityPage.totalElements = 100;
	CityPage.pageSize = 10;
	CityPage.pageNumber = 1;
	console.log(CityPage);
	CityPage.calculate();
});

describe('cityPage', function() {

	describe('calculate', function() {
		it('should return true', function() {
			chai.assert.equal(true, CityPage.firstPage);
			chai.assert.equal(false, CityPage.lastPage);
			chai.assert.equal(10, CityPage.totalPages);
		});
	});

});
