$(function() {
    $(".devoured").on("click", function(event) {
      var id = $(this).data("id");
    
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          console.log(id+ "has been devoured");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var burgerName = {burgerName: $("#newName").val().trim()};
      console.log(burgerName)
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: burgerName
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
  