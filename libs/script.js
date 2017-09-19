var token = '611768430.9e40ee6.ed28a58ce97948389668289eec853a25'
var userid = 611768430
var num = 6

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num},
	success: function(data){
 		console.log(data)
		for( x in data.data ){
      if (data.data[x].images.low_resolution.height > data.data[x].images.low_resolution.width) {
        $('.socials-instagram').append('<div class="socials-box"><div class="instagram-post-image"><img class="portrait" src="'+data.data[x].images.low_resolution.url+'"></div></div>')
      } else {
        $('.socials-instagram').append('<div class="socials-box"><div class="instagram-post-image"><img class="landscape" src="'+data.data[x].images.low_resolution.url+'"></div></div>')
      }
      // data.data[x].images.low_resolution.url - URL of image, 306х306
			// data.data[x].images.thumbnail.url - URL of image 150х150
      // data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL
		}
	},
	error: function(data){
		console.log(data) // send the error notifications to console
	}
});
