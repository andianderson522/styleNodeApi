'use strict';

var chai = require('chai');
var PageResults = require('../domain/PageResults.js');
var cityPage = Object.create(PageResults);
var assert = chai.assert;

before(function() {
	cityPage.totalElements = 100;
	cityPage.pageSize = 10;
	cityPage.pageNumber = 1;
	cityPage.calculate();
});

describe('cityPage', function() {

	describe('calculate', function() {
		it('should return true', function() {
			assert.equal(true, cityPage.firstPage);
			assert.equal(false, cityPage.lastPage);
			assert.equal(10, cityPage.totalPages);
		});
	});

	describe('calculate lastPage', function() {
		it('lastPage should be true', function() {
			cityPage.pageNumber = 10;
			cityPage.calculate();
			assert.isTrue(cityPage.lastPage, 'should be true');
			assert.isFalse(cityPage.firstPage, 'firstPage should be fasle');
		});
	});

	describe('last and first page', function() {
		it('last and first the same', function() {
			cityPage.totalElements = 10;
			cityPage.pageSize = 10;
			cityPage.pageNumber = 1;
			cityPage.calculate();
			assert.isTrue(cityPage.firstPage, 'firstPage should be true');
			assert.isTrue(cityPage.lastPage, 'lastPage should be true');
		});
	});

});
