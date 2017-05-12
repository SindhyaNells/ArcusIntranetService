$( document ).ready(function() {


	$.ajax({
	    url: '/employee/list',
	    type: "get",
	    dataType: "json",
	
	    success: function(data, textStatus, jqXHR) {
	        // since we are using jQuery, you don't need to parse response
	        drawTable(data);
	    }
	});


	});




function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);

    }
   // document.getElementById("challengebutton").onclick = function () {
     //      location.href = "http://www.ec2-54-214-195-176.us-west-2.compute.amazonaws.com:3001/notification";
       //};

}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#employee").append(row);
    row.append($("<td>"+ rowData.employeeFname + " " + rowData.employeeLname + "</td>"));

    row.append($("<td>" + rowData.extension + "</td>"));
    row.append($("<td>" + rowData.email + "</td>"));
    row.append($("<td>" + rowData.jobTitle + "</td>"));
    //row.append($("<td>" + rowData.reportsTo + "</td>"));
    row.append($("<td><button id=\"challengebutton\" class=\"btn btn-primary\">See Details</button></td>"));

}


function myFunction() {
	  // Declare variables
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("myInput");
	  filter = input.value.toUpperCase();
	  table = document.getElementById("employee");
	  tr = table.getElementsByTagName("tr");

	  // Loop through all table rows, and hide those who don't match the search query
	  for (i = 0; i < tr.length; i++) {
	    td = tr[i].getElementsByTagName("td")[0];
	    if (td) {
	      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
	        tr[i].style.display = "";
	      } else {
	        tr[i].style.display = "none";
	      }
	    }
	  }
	}