app.controller('ControlsController', function($scope, $interval, NotesService, BpmService) {

	$scope.buttonText = 'Play';
	$scope.bpm = BpmService.getBpm();

	$scope.togglePlay = function() {
		BpmService.toggleTicker();
		if (BpmService.isPlaying()) {
			$scope.buttonText = 'Stop';
		} else {
			$scope.buttonText = 'Play';
		}
	}

	$scope.clearPattern = function() {
		NotesService.clearPattern();
	}

	$scope.newRange = function() {
		BpmService.setBpm($scope.bpm);
	}

});