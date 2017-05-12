$( document ).ready(function() {
$.ajax({
    url: '/helpdesk',
    type: "get",
    dataType: "json",

    success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
    	for (var i = 0; i < data.length; i++) {
    		var row = $("<a href='#' class='list-group-item'> <i class='fa fa-comment fa-fw'></i> "
    				+ data[i].message+ "</a> <em>" + data[i].msgStatus + " </em>" );
    		$("#helpdesk").append(row);
    	}
    }
});

$('#helpTicket').click(function(e) {
		var msg = $('#msg').val();
		$.ajax({
		    url: '/helpdesk?message=' + msg,
		    type: "post",
		    dataType: "json",
	
		    success: function(data, textStatus, jqXHR) {
		        // since we are using jQuery, you don't need to parse response
		       alert("Created")
		    }
		});
		});

});

