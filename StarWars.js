$(function(){
  
  $(".dropdown-menu li a").click(function(){
    
    $("#StarWarsDropdown:first-child").text($(this).text());
     $("#StarWarsDropdown:first-child").val($(this).text());
  });
  
  
  $("#StarWarsButton").click(function(e) {
    e.preventDefault();
	
	var starWarsUrl = "https://swapi.co/api/" + $("#StarWarsDropdown").text().toLowerCase() + "/" + $("#NumberValue").val() + "/";
	
    $.ajax({
      url: starWarsUrl,
	  type: "GET",
	  dataType: "json",
      success: function(result) {	         
        $("#InfoText").html(JSON.stringify(result));
      },
      error: function(result) {
        alert('error');
      }
    }); 
  });

});