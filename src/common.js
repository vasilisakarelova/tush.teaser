var token = '611768430.9e40ee6.ed28a58ce97948389668289eec853a25'
var userid = 611768430
var num = 6

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num},
	success: function(data){
		for( x in data.data ){
      if (data.data[x].images.low_resolution.height > data.data[x].images.low_resolution.width) {
        //$('.socials-instagram').append('<div class="socials-box socials-box-ig"><div class="instagram-post-image"><img class="portrait" src="'+data.data[x].images.low_resolution.url+'"></div></div>')
				$('.collage').append('<div class="collage-box"><a style="height:100%;"href="'+data.data[x].link+'"><div class="collage-bg"><img class="portrait" src="' + data.data[x].images.standard_resolution.url + '" /></div><div class="collage-post-image"><img class="portrait" src="'+data.data[x].images.low_resolution.url+'"></div><p class="collage-post-caption">' + data.data[x].caption.text + '</p></a></div>')
      } else {
        //$('.socials-instagram').append('<div class="socials-box socials-box-ig"><div class="instagram-post-image"><img class="landscape" src="'+data.data[x].images.low_resolution.url+'"></div></div>')
				$('.collage').append('<div class="collage-box"><a style="height:100%;"href="'+data.data[x].link+'"><div class="collage-bg"><img class="portrait" src="' + data.data[x].images.standard_resolution.url + '" /></div><div class="collage-post-image"><img class="landscape" src="'+data.data[x].images.low_resolution.url+'"></div><p class="collage-post-caption">' + data.data[x].caption.text + '</p></a></div>')
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

$(document).ready(function(){
  $('.socials-covers').slick({
    variableWidth: true,
		infinite: true,
	  speed: 300,
	  slidesToShow: 1,
		slidesToScroll: 2,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000
  });

	$('.socials-instagram').slick({
    variableWidth: true,
		infinite: true,
	  speed: 300,
	  slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000
  });
});

document.addEventListener('click', () => {
	document.querySelector('#intro').play()
	document.querySelector('#loading-wrap').classList.add('fade-out')
	document.querySelector('.page-teaser').classList.add('fade-in')
	document.querySelector('.page-teaser').style.height = 'auto'
})

var vid = document.querySelector('#intro')
vid.oncanplay = function() {
	setTimeout(function() {
		document.querySelector('#intro').play()
		document.querySelector('#loading-wrap').classList.add('fade-out')
		document.querySelector('.page-teaser').classList.add('fade-in')
		document.querySelector('.page-teaser').style.height = 'auto'
	}, 3000)
};
