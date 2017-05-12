var x = document.cookie;

$(document).ready(function() {
	var lock = new Auth0Lock("1wN2D7f28qRiRo30KgguaNNyGSH22LiP", "arcuss.auth0.com", {
	    auth: {
	      params: { scope: 'openid email'//, 
	    	
	    }
	    
	  }});
		if (x) {
	      lock.getProfile(x, function (err, profile) {
	        if (err) {
	          return alert('There was an error getting the profile: ' + err.message);
	        }
	        // Display user information
	        //alert(profile.nickname);
	        $('.nickname').append("<i class='fa fa-user fa-fw'></i>Hi " + profile.name);
	        $('.avatar').attr('src', profile.picture).show();
	        $('.name').append(profile.name);
	        $('.nickname1').append(profile.nickname);
	        $('.team').append(profile.dn);
	        $('.emails').append(profile.emails[0]);
	        $('.principal').append(profile.userPrincipalName);
	        $('.createdat').append(profile.created_at);
	        
	      });
	    }
});