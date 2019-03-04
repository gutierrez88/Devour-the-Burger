$(function() {

  $(".devoured").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(function() {
      console.log(id+ "has been devoured");
      location.reload();
    });
  });
  
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var burgerName = {burgerName: $("#newName").val().trim()};
    $.ajax("/api/burgers", {
      type: "POST",
      data: burgerName
    }).then(function() {
      console.log("created new burger");
      location.reload();
    });
  });

});

$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 600, 'linear');
});

