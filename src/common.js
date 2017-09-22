var token = '611768430.9e40ee6.ed28a58ce97948389668289eec853a25'
var userid = 611768430
var num = 8

var contestPostIDs = ['1608630387419205805_611768430', '1608629139085455010_611768430', '1608627910221294520_611768430', '1608626411915238457_611768430', '1608623289507720508_611768430', '1608621909925614877_611768430']
contestPostIDs.forEach(function(contestPostID) {
	$.ajax({
		url: 'https://api.instagram.com/v1/media/' + contestPostID + '?access_token=' + token + '',
		dataType: 'jsonp',
		type: 'GET',
		success: function(response){
			if (response.data.images.low_resolution.height > response.data.images.low_resolution.width) {
				$('.collage').append('<div class="collage-box"><a style="height:100%;"href="'+response.data.link+'"><div class="collage-bg"><img class="portrait" src="' + response.data.images.standard_resolution.url + '" /></div><div class="collage-post-image"><img class="portrait" src="'+response.data.images.low_resolution.url+'"></div><p class="collage-post-caption">' + response.data.caption.text + '</p></a></div>')
      } else {
				$('.collage').append('<div class="collage-box"><a style="height:100%;"href="'+response.data.link+'"><div class="collage-bg"><img class="portrait" src="' + response.data.images.standard_resolution.url + '" /></div><div class="collage-post-image"><img class="landscape" src="'+response.data.images.low_resolution.url+'"></div><p class="collage-post-caption">' + response.data.caption.text + '</p></a></div>')
      }
		},
		error: function(data){
			console.log(data) // send the error notifications to console
		}
	});
})

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num},
	success: function(data){
		for( x in data.data ){
      if (data.data[x].images.low_resolution.height > data.data[x].images.low_resolution.width) {
        $('.socials-instagram').append('<div class="socials-box socials-box-ig"><div class="instagram-post-image"><a style="height: 100%;" target="_blank" href="http://instagram.com/tushmagazine"><img class="portrait" src="'+data.data[x].images.low_resolution.url+'"></a></div></div>')
      } else {
        $('.socials-instagram').append('<div class="socials-box socials-box-ig"><div class="instagram-post-image"><a style="height: 100%;" target="_blank" href="http://instagram.com/tushmagazine"><img class="landscape" src="'+data.data[x].images.low_resolution.url+'"></a></div></div>')
      }
      // data.data[x].images.low_resolution.url - URL of image, 306х306
			// data.data[x].images.thumbnail.url - URL of image 150х150
      // data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL
		}

		$('.socials-instagram').slick({
	    variableWidth: true,
			infinite: true,
		  speed: 300,
		  slidesToShow: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 1000
	  });
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
});

document.addEventListener('click', function() {
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
