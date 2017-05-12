
$(document).ready(function() {
	  
	  var lock = new Auth0Lock("1wN2D7f28qRiRo30KgguaNNyGSH22LiP", "arcuss.auth0.com", {
	    auth: {
	      params: { scope: 'openid email'//, 
	    	  //"return_url": "http://54.183.224.145:8070/pages/index.html"}
	    }
	    //redirectUrl: 'http://54.183.224.145:8070/pages/index.html'
	    //allowedConnections: ['Username-Password-Authentication']
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
	     $('.nickname').text(profile.nickname);
	     $('.btn-login').hide();
	     $('.avatar').attr('src', profile.picture).show();
	     $('.btn-logout').show();
	  };

	  var logout = function() {
	    localStorage.removeItem('id_token');
	    window.location.href = "login.html";
	  };

	  retrieve_profile();
	});
