
$(document).ready(function() {
	
	 $('.next').hide();
    
	 var lock = new Auth0Lock("1wN2D7f28qRiRo30KgguaNNyGSH22LiP", "arcuss.auth0.com", {
	    auth: {
	      params: { scope: 'openid email'//, 
	    	
	    }
	    
	  }});

	  
	  $('.btn-login').click(function(e) {
	    e.preventDefault();
	    lock.show();
	  });

	  $('.btn-logout').click(function(e) {
	    e.preventDefault();
	    logout();
	  })

	   
	  
	  lock.on("authenticated", function(authResult) {
	    lock.getProfile(authResult.idToken, function(error, profile) {
	      if (error) {
	        // Handle error
	        return;
	      }
	      localStorage.setItem('id_token', authResult.idToken);
	      document.cookie = authResult.idToken;
	      // Display user information
	      show_profile_info(profile);
	    });
	  });

	  //retrieve the profile:
	  var retrieve_profile = function() {
	    var id_token = localStorage.getItem('id_token');
	    if (id_token) {
	      lock.getProfile(id_token, function (err, profile) {
	        if (err) {
	          return alert('There was an error getting the profile: ' + err.message);
	        }
	        // Display user information
	        show_profile_info(profile);
	      });
	    }
	  };

	  var show_profile_info = function(profile) {
	     $('.nickname').text("Hi "+ profile.nickname);
	     $('.btn-login').hide();
	     $('.panel-title').hide();
	     $('.avatar').attr('src', profile.picture).show();
	     $('.btn-logout').show();
	     $('.next').show();
	     $('.dropbox').show();
	  };
	  

	  $('.next').click(function(e) {
		  window.location = "index.html";  
	  })
	  
	 
	  var logout = function() {
	    localStorage.removeItem('id_token');
	    window.location.href = "logout.html";
	  };

	  retrieve_profile();
	});


function goToDropbox(){
	  /*$('.goToDropbox').click(function(e) {
		  window.location = "index.html";  
	  })*/
	  
	  
	  location.href='https://arcuss.auth0.com/login?client=1wN2D7f28qRiRo30KgguaNNyGSH22LiP&ldaps=1&state=&redirect_uri=&request_id=&prompt=';
		  
}