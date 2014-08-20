'use strict';
describe('PhoneListCtrl', function() {
	beforeEach(module('phoneCtrlModule'));

	it('should create "phones" model with 3 phones', inject(function($controller){
		var scope = {},
			ctrl = $controller('PhoneListCtrl', {$scope:scope});

		expect(scope.phones.length).toBe(3);
	}));
});