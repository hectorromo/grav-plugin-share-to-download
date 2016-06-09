// {# FACEBOOK script that detects if the item has been posted #}

var secret_data = '',
	e = {};

function shareOnFB() {
	// Get same info as the facebook and twitter cards
    e = {
        method: "feed",
        link: "http://w3lessons.info",
        picture: "http://w3lessons.info/logo_large.png",
        name: "W3lessons - PHP, MYSQL, HTML5, CSS3, jQuery, Ajax, Facebook Style Scripts",
        caption: 'w3lessons.info',
        description: "w3lessons.info is a programming blog maintained by Karthikeyan K. Tutorials focused on Programming, Jquery, Ajax, PHP,HTML5, CSS3, Web Design  and MySQL"
    };

    FB.ui(e, function(res) {
        if (res["post_id"]) {
        	// If post_id send a signal to php to display download content

          	// Append this with PHP if possible
    		secret_data = "<h2 class=\"stitle1\">Thank you!</h2><h2 class=\"stitle2\">Please use the below link to download</h2><p class=\"d_link\"><a href=\"https://app.box.com/s/mqb29ed1pl2kh9h6x1bq\">https://app.box.com/s/mqb29ed1pl2kh9h6x1bq</a></p>";
          	
          	$("#results").html(secret_data);
        } 
    });
}


// <div id="results">
// 	<p>Download content is locked! Please share it & unlock the content</p>
// </div>