$(document).ready(function() {

	event.preventDefault();

	// Make a list of existing cats appear underneath the form.


// 	$("#new-cat").submit(function() {
// 		$.ajax({
// 			var string = JSON.stringify(data);
// 			type: $(this).attr('method'),
// 			url:  "https://ga-cat-rescue.herokuapp.com/api/cats",
// 			success: function(response) {
// 				 $('#cats').append(response);
// 				 console.log("Is this running")
// 			}
// 		});
// 		return false;
// 	});


	$.get('https://ga-cat-rescue.herokuapp.com/api/cats')
	    .done(function(data){
	        var allCats = JSON.parse(data);
	        //console.log(allCats);
  				for (var i = 0; i < allCats.length; i++){
	       		 $('#cats').append("<li>" + "Name:" + " " + allCats[i].name + "</br>" + "Note:" + " " + allCats[i].note + "</br>" + "</br>" + "</li>");
	       		}
	       	});

	    $('#cats').css({"font-size": "105%", "padding":"15px", "text-align": "center", "list-style": "none"});


	    $("#new-cat").on("submit", function(event){
		    event.preventDefault();  
	    	var catName = $('#cat-name').val();
	    	var catNote = $('#cat-note').val();
	    	$('#cats').append('<li>' + "Name:" + " " + catName + "</br>" + "Note:" + " " + catNote + "</br>" + "</br>" + '</li>');


		    newCat = {
		    	name: catName,
		    	note: catNote
		    }

		    $.ajax({
		    	type: "POST",
		    	data: JSON.stringify(newCat),
		   		url: "https://ga-cat-rescue.herokuapp.com/api/cats",
		    })


	    });

});


// .serialize() will make a string
// parse