let price = 0;
let seconds = 0;
let paris = null;
let isPlay = true;
let maxPrice = 100;

$('document').ready(function(){
	$('.maxPrice').html(maxPrice);
	$('#start').click(function() {
		isPlay = true;
		seconds = 30;
		$('.stopWatch').html(seconds);
		$('.second').html('Secondes');
		price = Math.floor(Math.random() * maxPrice);
		$('#paris').css({'visibility': 'visible', 'opacity': '1'});
		setTimeout(function() {$('#number').focus()}, 100);
		$('#number').val('');
		
let stopWatch = setInterval(function(){
		if (seconds == 0) {
			isPlay = false;
			clearInterval(stopWatch);
			$('.response').html('😅 Perdu 😅');
			$('#paris').css({'visibility': 'hidden', 'opacity': '0'});
		}
		else if (isPlay) {
			seconds--;
			$('.stopWatch').html(seconds);
			if (seconds == 1) {
				$('.second').html('Second');
			}
		}
		else {
			clearInterval(stopWatch);
			$('#paris').css({'visibility': 'hidden', 'opacity': '0'});
		}
		}, 1000);
	});
	
	$('#paris').submit(function(event) {
		if (isPlay) {
		paris = $('#number').val();
		
		if (paris == price) {
			isPlay = false;
			$('.response').html('🎉 Gagné 🎉');
		}
		else if (paris < price) {
			$('.response').html('Plus grand ! 😏');
		}
		else {
			$('.response').html('Plus petit ! 🙄');
		}
		
		$('#number').val('');
		}
		event.preventDefault();
	});
	
});

let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
