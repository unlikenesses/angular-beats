app.factory('NotesService', function() {

	var NotesService = {};		
	var bass = new Howl({src:['audio/Bass-Drum-1.mp3']});
	var snare = new Howl({src:['audio/Hip-Hop-Snare-1.mp3']});
	var hihat = new Howl({src:['audio/Closed-Hi-Hat-1.mp3']});
	var staves = [
		{
			'id': 1,
			'pos': 0,
			'name': 'Bass',
			'sample': bass,
			'notes': [
				{'pos': 0, 'active': false},
				{'pos': 1, 'active': false},
				{'pos': 2, 'active': false},
				{'pos': 3, 'active': false},
				{'pos': 4, 'active': false},
				{'pos': 5, 'active': false},
				{'pos': 6, 'active': false},
				{'pos': 7, 'active': false}
			]
		},
		{
			'id': 2,
			'pos': 1,
			'name': 'Snare',
			'sample': snare,
			'notes': [
				{'pos': 0, 'active': false},
				{'pos': 1, 'active': false},
				{'pos': 2, 'active': false},
				{'pos': 3, 'active': false},
				{'pos': 4, 'active': false},
				{'pos': 5, 'active': false},
				{'pos': 6, 'active': false},
				{'pos': 7, 'active': false}
			]
		},
		{
			'id': 3,
			'pos': 2,
			'name': 'Hihat',
			'sample': hihat,
			'notes': [
				{'pos': 0, 'active': false},
				{'pos': 1, 'active': false},
				{'pos': 2, 'active': false},
				{'pos': 3, 'active': false},
				{'pos': 4, 'active': false},
				{'pos': 5, 'active': false},
				{'pos': 6, 'active': false},
				{'pos': 7, 'active': false}
			]
		}
	];
	NotesService.getStaves = function() {
		for (var stave of staves) {
			let localStorageRef = localStorage.getItem('agjs-pattern-' + stave.id);
			if (localStorageRef) {
				stave.notes = JSON.parse(localStorageRef);
			}
		}
		return staves;
	};
	NotesService.toggleNote = function(stavePos, notePos) {
		var note = staves[stavePos].notes[notePos];
		note.active = ! note.active;
		this.savePatterns();
	};
	NotesService.checkSound = function(pos) {
		for(var i = 0; i < staves.length; i++) {
			stave = staves[i];
			if (stave.notes[pos].active) {
				stave.sample.play();
			}
		}
	};
	NotesService.clearPattern = function() {
		for (var i = 0; i < staves.length; i++) {
			stave = staves[i];
			for (var n = 0; n < stave.notes.length; n++) {
				note = stave.notes[n];
				note.active = false;
			}
		}
		this.savePatterns();
	};
	NotesService.savePatterns = function() {
		for (var stave of staves) {
			localStorage.setItem('agjs-pattern-' + stave.id, JSON.stringify(stave.notes));
		}				
	};
	NotesService.restorePatterns = function() {
		for (var stave of staves) {
			let localStorageRef = localStorage.getItem('agjs-pattern-' + stave.id);
			if (localStorageRef) {
				stave.notes = JSON.parse(localStorageRef);
			}
		}
	};

	return NotesService;

});