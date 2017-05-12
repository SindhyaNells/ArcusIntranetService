//http://34.201.120.105:8080/intranet_service/employee/list?employeeNumber=value
	
$( document ).ready(function() {
$.ajax({
    url: '/employee/list?employeeName=2',
    type: "get",
    dataType: "json",

    success: function(data, textStatus, jqXHR) {
        // since we are using jQuery, you don't need to parse response
       
    }
});
});
