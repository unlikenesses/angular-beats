app.controller('StaveController', function($scope, NotesService) {

	this.toggleNote = function(stave, pos) {
		NotesService.toggleNote(stave, pos);
	};

	this.noteIsActive = function(stave, pos) {
		var note = this.staves[stave].notes[pos];
		return note.active;
	};

	this.staves = NotesService.getStaves();

});