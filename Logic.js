
$(document).ready(function() {
    $("#searchButton").click(function() {
      var searchValue = $("#search-term").val();
      if(searchValue){
        console.log(searchValue)
        $("#search-response").html("Loading.....");
      }
      else {
        $("#search-response").html("Please input something in the search c'mon");
      }
    });
  });