var module = angular.module('bookstore');

module.controller('BooksController', function($scope) {
	$scope.books = data;

	$scope.limitBy = function(text, maxLen) {
		var cut = text.substr(0, maxLen);
		return cut.substr(0, Math.min(cut.length, cut.lastIndexOf(' ')));
	}

	$scope.trimHtml = function(html) {
		return html ? html.replace(/<(?:.|\n)*?>/gm, '') : '';
	}
});