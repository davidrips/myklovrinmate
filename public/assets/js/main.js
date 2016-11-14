$(document).ready(function() {
	console.log('sup');

	$("#lifestyle").on("click", function(e){
		e.preventDefault();
		var c = []

		$('input[type=checkbox]').find("input:checked").each(function(){
			// c.push(this.value);
			console.log(this);
		})

		// $('form').find("input:")







		return false;

	})





	
});